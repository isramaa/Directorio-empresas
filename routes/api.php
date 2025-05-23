<?php

use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Client\EmpresaController as EmpresaClient;
use App\Http\Controllers\Api\Admin\EmpresaController;
use App\Http\Controllers\Api\FrontController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function() {
    // PUBLIC
    Route::get('/public/empresas/{quantity}', [FrontController::class, 'empresas']);
    //Route::get('/public/{slug}', [FrontController::class, 'categoria']);

    // AUTH (sin token)
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    // PROTECTED ROUTES (requieren token Bearer)
    Route::middleware('auth:sanctum')->group(function() {
        // AUTH
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        // CLIENT
        Route::apiResource('/client/empresa', EmpresaClient::class);

        // ADMIN
        Route::apiResource('/admin/user', UserController::class);
        Route::apiResource('/admin/categoria', CategoriaController::class);
        Route::apiResource('/admin/empresa', EmpresaController::class);
    });
});
