<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsResource;
use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = NewsResource::collection(News::orderBy('id', 'desc')->paginate(10));

        return Inertia::render('Homepage', [
            "title" => "Homepage",
            "description" => "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, eligendi.",
            "news" => $news,
        ]);
    }

    public function newsByUser(Request $request)
    {
        $user = $request->user();
        $news = NewsResource::collection(News::where('user_id', $user->id)->paginate(10));
        $category = Category::all();

        return Inertia::render('Dashboard', [ 
            "title" => "Dashboard",
            "news" => $news,
            "category" => $category,
        ]);
    }

    public function store(Request $request)
    {
        $news = new News();

        $news->title = $request->title;
        $news->description = $request->description;
        $news->category_id = $request->category;
        $news->user_id = auth()->user()->id;

        $news->save();

        return redirect()->back()->with("message", "Created a new News");
    }

    public function edit(News $news, Request $request)
    {
        $category = Category::all();

        return Inertia::render('editNews', [
            "title" => "Edit News",
            "news" => $news->find($request->id),
            "category" => $category,
        ]);
    }

    public function update(Request $request)
    {
        News::where('id', $request->id)->update([
            "title" => $request->title,
            "description" => $request->description,
            "category_id" => $request->category,
        ]);

        return to_route("dashboard")->with("message", "Updated a News");
    }

    public function destroy(Request $request)
    {
        News::find($request->id)->delete();
        return redirect()->back()->with("message", "Deleted a new News");
    }
}
