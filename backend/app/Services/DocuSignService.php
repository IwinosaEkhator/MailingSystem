<?php


use DocuSign\eSign\Client\ApiClient;
use DocuSign\eSign\Api\EnvelopesApi;
use DocuSign\eSign\Model\EnvelopeDefinition;
use DocuSign\eSign\Model\Signer;
use DocuSign\eSign\Model\Document;
use DocuSign\eSign\Model\Tabs;
use DocuSign\eSign\Model\SignHere;

class DocuSignService {

    public function createEnvelopeWithSenderAndRecipient($recipientEmail, $recipientName, $senderEmail, $senderName, $documentBase64, $documentName) {
        // DocuSign API Client
        $apiClient = new ApiClient();
        $apiClient->setBasePath(env('DOCUSIGN_BASE_PATH'));
        $apiClient->setOAuthBasePath(env('DOCUSIGN_OAUTH_BASE_PATH'));

        $envelopesApi = new EnvelopesApi($apiClient);

        // Step 1: Create Document object
        $document = new Document([
            'document_base64' => $documentBase64, // The base64-encoded content of the document
            'name' => $documentName, // Name of the document
            'file_extension' => 'pdf',
            'document_id' => '1', // Must be unique for each document in the envelope
        ]);

        // Step 2: Create a Signer for the Recipient
        $recipientSigner = new Signer([
            'email' => $recipientEmail,
            'name' => $recipientName,
            'recipient_id' => '1',
            'routing_order' => '1', // First signer in the sequence
        ]);

        // Step 3: Create Signer for the Sender (You as the sender can also sign)
        $senderSigner = new Signer([
            'email' => $senderEmail,
            'name' => $senderName,
            'recipient_id' => '2',
            'routing_order' => '2', // Sender signs after the recipient
        ]);

        // Step 4: Define Signature Tabs (Positions to sign on the document)
        // For the recipient
        $recipientSignHere = new SignHere([
            'document_id' => '1',
            'page_number' => '1',
            'x_position' => '150', // Adjust according to the document
            'y_position' => '450', // Adjust according to the document
        ]);

        // For the sender
        $senderSignHere = new SignHere([
            'document_id' => '1',
            'page_number' => '1',
            'x_position' => '150',
            'y_position' => '550',
        ]);

        // Step 5: Attach Tabs to the Signers
        $recipientSigner->setTabs(new Tabs([
            'sign_here_tabs' => [$recipientSignHere],
        ]));

        $senderSigner->setTabs(new Tabs([
            'sign_here_tabs' => [$senderSignHere],
        ]));

        // Step 6: Create Envelope Definition
        $envelopeDefinition = new EnvelopeDefinition([
            'email_subject' => "Please sign this invoice document",
            'documents' => [$document],
            'recipients' => new \DocuSign\eSign\Model\Recipients([
                'signers' => [$recipientSigner, $senderSigner],
            ]),
            'status' => 'sent', // Sends the envelope immediately
        ]);

        // Step 7: Create and Send the Envelope
        $accountId = env('DOCUSIGN_ACCOUNT_ID');
        $envelopeSummary = $envelopesApi->createEnvelope($accountId, $envelopeDefinition);

        return $envelopeSummary;
    }
}
