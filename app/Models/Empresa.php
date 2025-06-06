<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;
    protected $guarded = [];
    
    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
