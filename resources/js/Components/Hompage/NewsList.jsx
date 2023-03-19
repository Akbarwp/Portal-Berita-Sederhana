import React from "react";

export default function NewsList({news}) {
    // console.log(news);

    function newsData(news) {
        return (
            <div className="pb-5 px-10 md:px-16 lg:px-24 min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-slate-100 text-slate-800 text-base">
                { news.map((data, i) => {
                        return (
                            <div key={i} className="card w-full bg-base-100 shadow-xl">
                                <figure>
                                    <img src={"https://source.unsplash.com/1920x1080/?" + data.slug} alt="News Photo" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {data.title}
                                    </h2>
                                    <div className="badge badge-secondary">{data.author.name}</div>
                                    <p>{data.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{data.category.title}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    function noNews() {
        return (
            <div className="hero bg-slate-100 ">
                <div className="hero-content flex-col lg:flex-row text-center lg:text-left">
                    <img src="https://source.unsplash.com/1920x1080/?empty" className="max-w-xs sm:max-w-lg  mr-10 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl sm:text-5xl font-bold">Tidak ada berita</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {news.length > 0 ? newsData(news) : noNews()}
        </>
    );
}
