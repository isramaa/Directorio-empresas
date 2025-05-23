<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Empresa;

class FrontController extends Controller
{
    public function empresas($quantity)
    {
        $data = Empresa::orderByDesc('created_at')->take($quantity)->get(["id", "nombre", "slug", "descripcion", "urlfoto", "telefono", "email", "direccion", "website", "facebook", "youtube", "tiktok"]);
        return response()->json($data, 200);
    }
}
