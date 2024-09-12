<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'from',
        'item_name',
        'serial_number',
        'domain_name',
        'unit',
        'quantity'
    ];


    public function deliveryRequest()
    {
        return $this->belongsTo(DeliveryRequest::class);
    }
}
