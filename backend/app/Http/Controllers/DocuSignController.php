<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use DocuSign\eSign\Client\ApiClient;
use DocuSign\eSign\Model\EnvelopeDefinition;
use DocuSign\eSign\Model\Document;
use DocuSign\eSign\Model\Signer;
use DocuSign\eSign\Model\Recipients;
use DocuSign\eSign\Model\Tabs;
use DocuSign\eSign\Model\SignHere;

class DocuSignController extends Controller
{
    public function sendToDocuSign(Request $request)
    {
        // Validate the uploaded PDF file
        $request->validate([
            'pdfFile' => 'required|file|mimes:pdf|max:2048',
        ]);

        // Retrieve the uploaded PDF file
        $pdfFile = $request->file('pdfFile');
        $filePath = $pdfFile->store('pdfs');

        // Get DocuSign credentials from environment variables
        $baseUrl = env('DOCUSIGN_BASE_URL');
        $accountId = env('DOCUSIGN_ACCOUNT_ID');
        $clientId = env('DOCUSIGN_CLIENT_ID');
        $clientSecret = env('DOCUSIGN_CLIENT_SECRET');

        // Initialize the DocuSign API Client
        $apiClient = new ApiClient();
        $apiClient->setBasePath($baseUrl);
        $apiClient->getOAuth()->setOAuthBasePath('account-d.docusign.com'); // Use the correct base path for your account

        // Set up the access token (assumed you already have it stored in your env or session)
        $apiClient->setOAuthToken($this->getAccessToken());

        try {
            // Create a new envelope for sending the document
            $envelopeDefinition = new EnvelopeDefinition();
            $envelopeDefinition->setEmailSubject('Please sign this document');

            // Load the document and encode it in Base64 format
            $documentContent = file_get_contents(Storage::path($filePath));
            $base64FileContent = base64_encode($documentContent);

            // Create the document object for DocuSign
            $document = new Document();
            $document->setDocumentBase64($base64FileContent);
            $document->setName('Delivery Note'); // Name for the document
            $document->setFileExtension('pdf');  // File extension
            $document->setDocumentId('1');       // ID for this document

            // Add the document to the envelope
            $envelopeDefinition->setDocuments([$document]);

            // Create a signer for the document
            $signer = new Signer();
            $signer->setEmail('recipient@example.com'); // Replace with recipient's email
            $signer->setName('Recipient Name');         // Replace with recipient's name
            $signer->setRecipientId('1');               // Recipient ID

            // Specify where the recipient should sign on the document
            $signHere = new SignHere();
            $signHere->setXPosition('100');
            $signHere->setYPosition('150');
            $signHere->setDocumentId('1');
            $signHere->setPageNumber('1');

            // Add the signing location to the recipient's tabs
            $tabs = new Tabs();
            $tabs->setSignHereTabs([$signHere]);
            $signer->setTabs($tabs);

            // Add the signer to the recipients list
            $recipients = new Recipients();
            $recipients->setSigners([$signer]);
            $envelopeDefinition->setRecipients($recipients);

            // Create the envelope using the Envelopes API
            $envelopesApi = new \DocuSign\eSign\Api\EnvelopesApi($apiClient);
            $envelopeSummary = $envelopesApi->createEnvelope($accountId, $envelopeDefinition);

            // Return a successful response
            return response()->json([
                'message' => 'PDF sent successfully for signing!',
                'envelope_id' => $envelopeSummary->getEnvelopeId(),
            ]);
        } catch (\Exception $e) {
            // Handle errors and exceptions
            return response()->json(['error' => 'Failed to send PDF to DocuSign: ' . $e->getMessage()], 500);
        }
    }

    // Method to get access token (if not stored already in session)
    private function getAccessToken()
    {
        // Check if access token is already stored in session
        if (session()->has('docusign_access_token')) {
            return session()->get('docusign_access_token');
        }

        // Otherwise, retrieve it from the API using client credentials
        $apiClient = new ApiClient();
        $tokenData = $apiClient->requestJWTUserToken(
            env('DOCUSIGN_CLIENT_ID'),
            env('DOCUSIGN_ACCOUNT_ID'),
            file_get_contents(storage_path('docusign/private_key.txt')), // Path to private key
            ['signature'],
            3600
        );

        // Store the access token in session
        $accessToken = $tokenData[0]->getAccessToken();
        session()->put('docusign_access_token', $accessToken);

        return $accessToken;
    }
}
