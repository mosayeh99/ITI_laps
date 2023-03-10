<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/posts', [PostController::class, 'index'])->name(name: 'posts.index');
Route::get('/posts/create', [PostController::class, 'create'])->name(name: 'posts.create');
Route::post('/posts/store', [PostController::class, 'store']);
Route::get('/posts/{id}', [PostController::class, 'show'])->name(name: 'posts.show');
Route::get('/posts/{id}/edit', [PostController::class, 'edit'])->name(name: 'posts.edit');
Route::put('/posts/{id}', [PostController::class, 'update'])->name(name: 'posts.update');
