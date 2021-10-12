<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use DB;
use Mail;
use App\Mail\ForgotMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ForgotPasswordController extends Controller
{
    public function forgotPassword(Request $request) {
        
        $validator = Validator::make($request->all(),[
            'email' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ], 500);
        }

        $email=$request->email;

        if(User::where('email', $email)->doesntExist()) {
            return response()->json([
                'message' => 'Email not found'
            ], 401);
        }

        //generate random token
        $token=rand(10,100000);

        try {
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);

            Mail::to($email)->send(new ForgotMail($token)); //mail send to user
        
            return response([
                'message' => 'Reset password mail send to your email!'
            ], 200);
        } catch(Exception $e) {
            return response([
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public function resetPassword(Request $request) {
        
        $validator = Validator::make($request->all(),[
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ], 500);
        }
        
        $email = $request->email;
        $token = $request->token;
        $password = Hash::make($request->password);

        $emailcheck = DB::table('password_resets')->where('email', $email)->first();
        $pincheck = DB::table('password_resets')->where('token', $token)->first();

        if(!$emailcheck) {
            return response()->json([
                'message' => 'Email not found'
            ], 401);
        }
        if(!$pincheck) {
            return response()->json([
                'message' => 'Pincode invalid'
            ], 401);
        }
        
        DB::table('users')->where('email', $email)->update(['password'=>$password]);

        DB::table('password_resets')->where('email', $email)->delete();

        return response([
            'message' => 'Password changed successfully'
        ], 200);
    }
}
