import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router as Inertia } from '@inertiajs/react';

import { useState } from 'react';

export default function editNews(props) {
    // console.log(props);

    const [title, setTitle] = useState(props.news.title);
    const [description, setDescription] = useState(props.news.description);
    const [category, setCategory] = useState(props.news.category_id);

    function updateNews() {
        const data = {id: props.news.id, title, description, category}
        Inertia.post("/updateNews", data);
    }

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title={props.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-10">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
                        <div className="form-control w-full max-w-xl">
                            <label className="label" htmlFor="title">
                                <span className="label-text font-semibold">Title:</span>
                            </label>
                            <input type="text" name='title' id='title' placeholder="Title" className="input input-bordered input-primary w-full max-w-xl" defaultValue={props.news.title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        
                        <div className="form-control w-full max-w-xl">
                            <label className="label" htmlFor="description">
                                <span className="label-text font-semibold">Description:</span>
                            </label>
                            <textarea name="description" id="description" placeholder='Description' rows="5" className="textarea textarea-primary" defaultValue={props.news.description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label" htmlFor="category">
                                <span className="label-text font-semibold">Category:</span>
                            </label>
                            <select name="category_id" id="category" className='select select-primary' defaultValue={props.news.category_id} onChange={(e) => setCategory(e.target.value)}>
                                {props.category.map((data, i) => (
                                    <option key={i} value={data.id} >{data.title}</option>
                                ))}
                            </select>
                        </div>
                        <button onClick={(e) => updateNews()} className='btn btn-warning mt-5'>Update</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
