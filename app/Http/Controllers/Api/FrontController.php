<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Empresa;

class FrontController extends Controller
{
    public function empresas($quantity)
    {
        $data = Empresa::where('publicado', 1)
            ->orderByDesc('created_at')
            ->take($quantity)
            ->get(["id", "nombre", "slug", "descripcion", "urlfoto", "telefono", "email", "direccion", "website", "facebook", "youtube", "tiktok"]);
        return response()->json($data, 200);
    }

    public function categorias()
    {
        $data = \App\Models\Categoria::where('menu', 1)
            ->orderBy('orden')
            ->get(['id', 'nombre', 'slug', 'descripcion', 'urlfoto']);
        return response()->json($data, 200);
    }

    public function categoriaBySlug($slug)
    {
        $categoria = \App\Models\Categoria::where('slug', $slug)
            ->where('menu', 1)
            ->select('id', 'nombre', 'slug', 'descripcion', 'urlfoto')
            ->firstOrFail();
        $empresas = $categoria->empresas()
            ->where('publicado', 1)
            ->select('id', 'nombre', 'descripcion', 'urlfoto', 'telefono', 'email', 'direccion', 'website', 'facebook', 'youtube', 'tiktok')
            ->get();
        return response()->json([
            'categoria' => $categoria,
            'empresas' => $empresas
        ], 200);
    }
}
