<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Delivery;
use App\Models\User;

class DeliveryPolicy
{
    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Delivery $delivery): Response
    {
        return $user->id === $delivery->request_id
            ? Response::allow()
            : Response::deny('You do not own this post.');
    }
}
