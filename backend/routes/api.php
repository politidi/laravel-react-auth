<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\UserController;

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//login route
Route::post('/login', [AuthController::class, "login"])->name('login.auth');

//register route
Route::post('/register', [AuthController::class, 'register'])->name('register.auth');

//forgot_password route
Route::post('/forgotPassword', [ForgotPasswordController::class, 'forgotPassword'])->name('forgotPassword.forgot');

//reset_password route
Route::post('/resetPassword', [ForgotPasswordController::class, 'resetPassword'])->name('resetPassword.forgot');

//current user
Route::get('/user', [UserController::class, 'user'])->middleware('auth:api');

//edit user
Route::put('/edit', [UserController::class, 'edit'])->middleware('auth:api');
