<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Validator;
use App\Models\User;

class UserController extends Controller
{
    public function user() {
        return Auth::user();
    }

    public function edit(Request $request, User $user) {
    
        $validator = Validator::make($request->all(),[
            'age' => 'integer',
            'city' => 'string|max:20'
        ]);

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ], 500);
        }
        
        try {
            $name = $request->name;
            $email = $request->email;
            $age = $request->age;
            $city = $request->city;
            $about = $request->about;
            
            DB::table('users')->where('email', $email)->update(['age'=>$age]);
            DB::table('users')->where('email', $email)->update(['city'=>$city]);      
            DB::table('users')->where('email', $email)->update(['name'=>$name]);      
            DB::table('users')->where('email', $email)->update(['about'=>$about]);      

            return response([
                'message' => 'Profile updated'
            ], 200);

        } catch (Exception $e) {
            return response([
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
