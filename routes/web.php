<?php

use Illuminate\Support\Facades\Route;

// Storefront web app is now the homepage
Route::get('/', function () {
    return response(
        file_get_contents(resource_path('webapp/index.html')),
        200,
        ['Content-Type' => 'text/html; charset=UTF-8']
    );
});

Route::get('/landing', function () {
    return view('landing');
});

Route::get('/brand', function () {
    return view('brand');
});
