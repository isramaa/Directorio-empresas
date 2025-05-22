<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class EmpresaController extends Controller
{
    public function index(){

    $user = auth()->user();

    $data = Empresa::where('user_id', $user->id)
                    ->orderBy('orden')
                    ->get(['id', 'orden', 'nombre', 'email', 'telefono', 'direccion']);

    return response()->json($data, 200);
}

public function store(Request $request){
        //validacion
        $data = new Empresa($request->all());
        //Subir la imagen
        if($request->urlfoto){
            $img = $request->urlfoto;
            //process
            $folderPath = "/img/empresa/";
            $image_parts = explode (";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $file = $folderPath . Str::slug($request->nombre) . '.' .$image_type;
            file_put_contents(public_path($file), $image_base64);

            $data->urlfoto = Str::slug($request->nombre). '.' .$image_type;
        }else{
            $data->urlfoto = null;
        }
        $data->slug = Str::slug($request->nombre);
        $data->user_id = auth()->id();
        $data->save();
        return response()->json($data, 200);
    }



}
