<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/welcome', [NewsController::class, 'index'])->name('homepage');

Route::group([
    "middleware" => ["auth", "verified"]

], function() {
    Route::get('/dashboard', [NewsController::class, 'newsByUser'])->name('dashboard');
    Route::post('/news', [NewsController::class, 'store'])->name('storeNews');
    Route::get('/editNews', [NewsController::class, 'edit'])->name('editNews');
    Route::post('/updateNews', [NewsController::class, 'update'])->name('updateNews');
    Route::post('/deleteNews', [NewsController::class, 'destroy'])->name('deleteNews');
});