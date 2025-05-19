<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoriaController extends Controller
{
    public function index(){
        $data = Categoria::orderBy("orden") -> get(["id","orden","nombre","descripcion"]);
        return response()->json($data, 200);
    }

    public function store(Request $request){
        //validacion
        $data = new Categoria($request->all());
        //upload image
        if($request->urlfoto){
            $img = $request->urlfoto;
            //process
            $folderPath = "/img/categoria/";
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
        $data->save();
        return response()->json($data, 200);
    }

    public function show($id){
        $data = Categoria::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
    $data = Categoria::find($id);

    if (!$data) {
        return response()->json(['error' => 'Categoría no encontrada'], 404);
    }

    $data->nombre = $request->nombre;
    $data->descripcion = $request->descripcion;
    $data->orden = $request->orden;
    $data->slug = Str::slug($request->nombre);
    $data->menu = $request->menu ? 1 : 0;

    if ($request->urlfoto && strpos($request->urlfoto, ';base64,') !== false) {
        $img = $request->urlfoto;
        $folderPath = "/img/categoria/";
        $image_parts = explode(";base64,", $img);

        if (count($image_parts) === 2) {
            $image_type_aux = explode("image/", $image_parts[0]);

            if (isset($image_type_aux[1])) {
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $file = $folderPath . Str::slug($request->nombre) . '.' . $image_type;

                file_put_contents(public_path($file), $image_base64);

                $data->urlfoto = Str::slug($request->nombre) . '.' . $image_type;
            }
        }
    }

    $data->save();

    return response()->json($data, 200);
}


    public function destroy($id)
{
    $data = Categoria::find($id);

    if (!$data) {
        return response()->json(['error' => 'Categoría no encontrada'], 404);
    }

    // Ruta del archivo a eliminar
    if ($data->urlfoto) {
        $filePath = public_path('img/categoria/' . $data->urlfoto);

        if (file_exists($filePath)) {
            unlink($filePath); // Elimina la imagen
        }
    }

    $data->delete();
    return response()->json("Categoria eliminada", 200);
}

}
