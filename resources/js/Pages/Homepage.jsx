import { Link, Head } from "@inertiajs/react";
import React from "react";

import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Hompage/NewsList";
import Paginator from "@/Components/Hompage/Paginator";

export default function Homepage(props) {
    // console.log(props);

    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="w-full h-48 px-10 flex justify-center items-center bg-slate-100 text-slate-800 text-2xl">
                <p>{props.description}</p>
            </div>
            <div>
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center bg-slate-100">
                <Paginator meta={props.news.meta} />
            </div>
        </>
    );
}
