<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = NewsResource::collection(News::paginate(10));

        return Inertia::render('Homepage', [
            "title" => "Homepage",
            "description" => "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, eligendi.",
            "news" => $news,
        ]);
    }
}
