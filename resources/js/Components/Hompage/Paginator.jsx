import React from "react";
import { Link } from "@inertiajs/react";

export default function Paginator({meta}) {

    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <>
            <div className="btn-group my-10">
                {prev && (
                    <Link href={prev} className="btn">«</Link>
                )}
                <button className="btn btn-active">Page {current}</button>
                {next && (
                    <Link href={next} className="btn">»</Link>
                )}
            </div>
        </>
    );
}
