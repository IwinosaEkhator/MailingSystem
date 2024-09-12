<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('deliveries', function (Blueprint $table) {
            $table->id();
            // Updated to match the model
            $table->foreignId('request_id')->constrained('delivery_requests')->cascadeOnDelete();
            $table->string('date');
            $table->string('from');
            $table->string('item_name');
            $table->string('serial_number')->default('N/A');;
            $table->string('domain_name')->default('N/A');;
            $table->integer('unit');
            $table->integer('quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deliveries');
    }
};
