<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "slug" => $this->slug,
            "description" => $this->description,
            "author" => $this->author,
            "category" => $this->category,
            "created_at" => Carbon::make($this->created_at)->isoFormat("D MMMM Y"),
            "updated_at" => Carbon::make($this->updated_at)->isoFormat("D MMMM Y"),
        ];
    }
}
