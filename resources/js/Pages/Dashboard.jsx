import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router as Inertia } from '@inertiajs/react';

import Paginator from "@/Components/Hompage/Paginator";
import { useEffect, useState } from 'react';

export default function Dashboard(props) {
    // console.log(props);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(0);

    const [isNotif, setIsNotif] = useState(false);

    function createNews() {
        const data = {title, description, category}
        Inertia.post("/news", data);

        setIsNotif(true);

        setTitle("");
        setDescription("");
        setCategory(0);
    }

    useEffect(() => {

        if (!props.news.data) {
            Inertia.get('/dashboard');
        }

        return;

    }, []);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title={props.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-10">
                    {isNotif && (
                        <div className="alert alert-success shadow-lg mb-5">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>
                    )}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
                        <div className="form-control w-full max-w-xl">
                            <label className="label" htmlFor="title">
                                <span className="label-text font-semibold">Title:</span>
                            </label>
                            <input type="text" name='title' id='title' placeholder="Title" className="input input-bordered input-primary w-full max-w-xl" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        
                        <div className="form-control w-full max-w-xl">
                            <label className="label" htmlFor="description">
                                <span className="label-text font-semibold">Description:</span>
                            </label>
                            <textarea name="description" id="description" placeholder='Description' rows="5" className="textarea textarea-primary" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label" htmlFor="category">
                                <span className="label-text font-semibold">Category:</span>
                            </label>
                            <select name="category_id" id="category" className='select select-primary' onChange={(e) => setCategory(e.target.value)}>
                                <option disabled selected>Choose category!</option>
                                {props.category.map((data, i) => (
                                    <option key={i} value={data.id} >{data.title}</option>
                                ))}
                            </select>
                        </div>
                        <button onClick={(e) => createNews()} className='btn btn-success mt-5'>Create</button>
                    </div>
                </div>
                
                <div className="pb-5 px-10 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-slate-100 text-slate-800 text-base">
                    {props.news.data.length > 0 && props.news.data.map((data, i) => {
                        return (
                            <div key={i} className="card w-full bg-base-100 shadow-xl">
                                <figure>
                                    <img src={"https://source.unsplash.com/1920x1080/?" + data.slug} alt="News Photo" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {data.title}
                                    </h2>
                                    <div>
                                        <div className="badge badge-secondary">{data.author.name}</div>
                                        <div className="badge badge-outline ml-3">{data.category.title}</div>
                                    </div>
                                    <p>{data.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link href={route('editNews')} method="get" data={{ id: data.id }} className="btn btn-warning btn-sm">Edit</Link>
                                        <Link href={route('deleteNews')} method="post" data={{ id: data.id }} className="btn btn-error btn-sm">Delete</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {props.news.data.length == 0 && (
                    <div className="hero bg-slate-100">
                        <div className="hero-content flex-col lg:flex-row text-center lg:text-left">
                            <img src="https://source.unsplash.com/1920x1080/?empty" className="max-w-xs sm:max-w-lg  mr-10 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl sm:text-5xl font-bold">Tidak ada berita</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                )}

                {props.news.data.length > 0 ? (
                    <div className="flex justify-center items-center bg-slate-100">
                        <Paginator meta={props.news.meta} />
                    </div>
                ) : ""}
            </div>
        </AuthenticatedLayout>
    );
}
