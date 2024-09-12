<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\DeliveryRequest;
use App\Models\User;

class DeliveryRequestPolicy
{
    public function forceDelete(User $user, DeliveryRequest $deliveryRequest): Response
    {
        return $user->id === $deliveryRequest->user_id
            ? Response::allow()
            : Response::deny('You do not own this post.');
    }
}
