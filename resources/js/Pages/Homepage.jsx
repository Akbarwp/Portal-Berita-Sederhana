import { Link, Head } from "@inertiajs/react";
import React from "react";

export default function Homepage(props) {
    // console.log(props.news);
    return (
        <>
            <Head title={props.title} />
            <div className="h-48 flex justify-center items-center bg-slate-700 text-white text-2xl">
                    <p>{props.description}</p>
            </div>
            <div className="pb-5 px-4 min-h-screen grid grid-cols-3 gap-3 bg-slate-700 text-white text-base">
                    {props.news ? props.news.map((data, i) => {
                        return (
                            <div key={i} className="p-5 m-2 mx-auto bg-green-300 text-black rounded-md shadow-sm shadow-slate-600">
                                <h3 className="text-xl font-bold">{data.title}</h3>
                                <h4 className="text-sm text-slate-600 font-bold">Author: {data.author.name}</h4>
                                <h4 className="font-semibold">Category: {data.category.title}</h4>
                                <p className="text-slate-700 text-base">{data.description}</p>
                            </div>
                        )
                    }) : "Belum ada berita"
                    }
            </div>
        </>
    );
}
