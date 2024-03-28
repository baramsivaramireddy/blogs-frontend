import { useToken } from '@/hooks/useAuth';
import axiosInstance from '@/utils/axiosInstance';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function DisplayBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsloading] = useState(false)

    const token = useToken()
    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/api/blogs")
                setBlogs(response.data.blogs);
                setIsloading(false)
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };

        setIsloading(true)

        fetchData();


    }, []);
    const renderBlogs = () => {
        return blogs.map((blog, index) => (

            <Link href={`/blog/${blog._id}`} key={index}>
                <div className="bg-white relative rounded-lg p-4 mb-4 flex  gap-3  items-center border-b-2 border-dashed ">

                    <div className='absolute top-1 right-1'>

                        {token && < AdminToolBarForBlog id={blog._id} visibility={blog.visibility} />}
                    </div>

                    {blog.image && blog.image.data && (
                        <img src={`data:image/*;base64,${btoa(String.fromCharCode.apply(null, blog.image.data.data))}`} alt={`Blog ${index}`} className="rounded-lg mb-2" />
                    )}


                    <div>
                        <h3 className="md:text-2xl  text-sm font-bold mb-2">{blog.title}</h3>
                        <p className="text-gray-700 md:text-xl  text-xs mb-2">{blog.description}</p>

                    </div>
                </div>

            </Link>

        ));
    };

    return (
        <div className="flex flex-col gap-5 overflow-auto  p-5">



            {blogs.length == 0 && <div className='text-center'> {isLoading == true ? <>loading ...</> : <> NO BLOG YET</>}</div>}
            {renderBlogs()}
        </div>

    );


}



const AdminToolBarForBlog = ({ id, visibility }) => {


    return (<div className='flex gap-5  items-center '>
        <div className={` rounded  text-white p-1 ${ visibility == 'public' ? 'bg-green-500':'bg-orange-500'}`}>
             {visibility}
        </div>
        <Link className='text-blue-500 text-2xl' href={`/dashboard/blog/${id}/update`}> &#128393;</Link>

    </div>)
}


export default DisplayBlogs;
