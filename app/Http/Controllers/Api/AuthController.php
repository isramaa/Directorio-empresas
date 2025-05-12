<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        $response = ["success"=>false];
        //validacion
        
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator -> fails()){
            $response = ["error"=>$validator->errors()];
            return response() -> json($response, 200);
        }

        $input = $request->all();
        $input["password"] = bcrypt($input['password']);

        $user = User::create($input);
        $user->assignRole('client');

        $response["success"] = true;
        //$response["token"] = $user->createToken("emartinez")->plainTextToken;

        return response()->json($response, 200);
    }

    public function login(Request $request){
        $response = ["success"=>false];
        //validacion
        
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator -> fails()){
            $response = ["error"=>$validator->errors()];
            return response() -> json($response, 200);
        }

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();

            $response["token"] = $user->createToken("minig.app")->plainTextToken;
            $response['user'] = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'email_verified_at' => $user->email_verified_at,
                'roles' => $user->getRoleNames(), // Aquí obtienes los roles del usuario
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ];
            $response['message'] = "logeado";
            $response['success'] = true;
        }
        return response()->json($response, 200);
    }

    public function logout(){
        $response = ["success"=>false];
        auth()->user()->tokens()->delete();
        $response = ["success"=>true,
                     "message"=>"Sesion cerrada"];
        return response()->json($response, 200);
    }
}
