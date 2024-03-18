import axiosInstance from '@/utils/axiosInstance';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function DisplayBlogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/api/blogs")
                setBlogs(response.data.blogs);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };

        fetchData();
    }, []);
    const renderImages = () => {
        return blogs.map((blog, index) => (

            <Link href={`/blog/${blog._id}`}>
                <div key={index} className="bg-white rounded-lg p-4 mb-4 flex  gap-3  items-center border-b-2 border-dashed ">


                    {blog.image && blog.image.data && (
                        <img src={`data:image/*;base64,${btoa(String.fromCharCode.apply(null, blog.image.data.data))}`} alt={`Blog ${index}`} className="rounded-lg mb-2" />
                    )}


                    <div>
                        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                        <p className="text-gray-700 mb-2">{blog.description}</p>

                    </div>
                </div>

            </Link>

        ));
    };

    return (
        <div className="flex flex-col gap-5 ">
            {renderImages()}
        </div>

    );
}

export default DisplayBlogs;
