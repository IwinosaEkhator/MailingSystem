<?php

namespace App\Http\Controllers;

use App\Models\DeliveryRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;

class DeliveryRequestController extends Controller implements HasMiddleware
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
        return DeliveryRequest::with('user')->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'request_items' => 'required|max:255'
        ]);

        $deliveryRequest = $request->user()->deliveryRequest()->create($fields);

        return [ 'deliveryRequest' => $deliveryRequest, 'user' => $deliveryRequest->user ];
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Find a DeliveryRequest by its ID, including the associated user
        $deliveryRequest = DeliveryRequest::with('user')->find($id);

        // If the request is not found, return a 404 error
        if (!$deliveryRequest) {
            return response()->json(['message' => 'Delivery request not found'], 404);
        }

        return response()->json($deliveryRequest);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DeliveryRequest $deliveryRequest)
    {
        Gate::authorize('modify', $deliveryRequest);

        $fields = $request->validate([
            'request_items' => 'required|max:255'
        ]);

        $deliveryRequest->update($fields);

        return [ 'deliveryRequest' => $deliveryRequest, 'user' => $deliveryRequest->user ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeliveryRequest $deliveryRequest)
    {
        Gate::authorize('modify', $deliveryRequest);

        $deliveryRequest->delete();

        return [ 'message' => 'The request was deleted'];
    }
}
