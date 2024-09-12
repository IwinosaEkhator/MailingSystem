<?php

namespace App\Http\Controllers;

use App\Models\Delivery;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDeliveryRequest;
use App\Http\Requests\UpdateDeliveryRequest;
use App\Models\DeliveryRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class DeliveryController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show'])
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Delivery::with('deliveryRequest')->latest()->get();;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Validate the request fields
    $fields = $request->validate([
        'date' => 'required',
        'from' => 'required|max:255',
        'item_name' => 'required|max:255',
        'serial_number' => 'max:255',
        'domain_name' => 'max:255',
        'unit' => 'required',
        'quantity' => 'required',
    ]);

    // Logic to find the relevant DeliveryRequest
    $deliveryRequest = DeliveryRequest::findOrFail($request->input('delivery_request_id'));

    // Check if a delivery already exists for this delivery request
    if ($deliveryRequest->deliveries()->exists()) {
        // Return a response indicating a delivery already exists
        return response()->json([
            'message' => 'You have already made a delivery for this request. Do you want to make another?',
            'existing_delivery' => true
        ], 409); // HTTP status 409 Conflict
    }

    // Create a new delivery if no delivery exists
    $delivery = $deliveryRequest->deliveries()->create($fields);

    return response()->json([
        'delivery' => $delivery,
        'deliveryRequest' => $deliveryRequest
    ], 201);
}

    /**
     * Display the specified resource.
     */
    public function show(Delivery $delivery)
    {
        return ['delivery' => $delivery];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Delivery $delivery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Delivery $delivery)
    {
        //
    }
}
