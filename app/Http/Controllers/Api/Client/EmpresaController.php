<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{
    public function index()
{
    $user = auth()->user();

    if (!$user) {
        return response()->json(['message' => 'No autenticado'], 401);
    }

    \Log::info('Authorization header:', [
    'Authorization' => request()->header('Authorization')
]);

    $data = Empresa::where('user_id', $user->id)
                    ->orderBy('orden')
                    ->get(['id', 'orden', 'nombre', 'email', 'telefono', 'direccion']);

    return response()->json($data, 200);
}
}
