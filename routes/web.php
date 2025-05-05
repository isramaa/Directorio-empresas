<?php

use Illuminate\Support\Facades\Route;
//use Spatie\Permission\Models\Role;

//$role = Role::create(['name' => 'admin']);
//$role = Role::create(['name' => 'client']);

Route::view('/{any}', 'welcome')->where('any', '.*');

Route::get('/', function () {
    return view('welcome');
});
