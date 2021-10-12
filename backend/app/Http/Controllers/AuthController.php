<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request) {

        $validator = Validator::make($request->all(),[
            'email' => 'required|string',
            'password' => 'required|min:6',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ], 500);
        }

        try {
            if(Auth::attempt($request->only('email','password'))) {
                $user=Auth::user();
                $token=$user->createToken('authToken')->accessToken;

                return response([
                    'message' => 'Successfully login',
                    'token' => $token,
                    'user' => $user
                ], 200);
            }
        } catch (Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }

        return response([
            'message' => 'Invalid Email or Password'
        ], 401);
    }

    public function register(Request $request) {

        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ], 500);
        }

        try {
            $user=User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            return response([
                'success' => true,
                'message' => 'Successfully registration',
                'user' => $user
            ], 200);
        } catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 401);
        }
    }
}
