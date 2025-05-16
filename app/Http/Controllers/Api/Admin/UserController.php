<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $data = User::whereHas('roles', function($q){
            $q -> where("name", "client");
        })->get();
        return response()->json($data, 200);
    }

    public function store(Request $request){

    }

    public function show($id){
        $data = User::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
        //agergar validacion de datos
        $data = User::find($id);
        $data->fill($request->all());
        $data->save();
        return response()->json($data, 200);
    }
}
