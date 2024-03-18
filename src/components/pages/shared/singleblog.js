"use client"

import { useState,useEffect } from "react";
import { useParams , useRouter} from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
const SingleBlogComponent= () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const router = useRouter()
    useEffect(() => {
      const fetchBlog = async () => {
        try {
          const response = await axiosInstance.get(`/api/blogs/${id}`)
          const data = await response.data
          setBlog(data.blog);
        } catch (error) {
          console.error(error);
          // Handle error
        }
      };
  
      fetchBlog();
    }, [id]);
  
    return (
      <div className="max-w-screen-lg mx-auto p-4">

        <button onClick={() => {router.back()}} className="our-nav-link w-10 text-2xl">  &#8592;</button>
        {blog ? (
          <div className="bg-gray-100 rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-700 mb-2">{blog.description}</p>
            {blog.image && blog.image.data && (
              <img src={`data:image/*;base64,${btoa(String.fromCharCode.apply(null, blog.image.data.data))}`} alt={`Blog Image`} className="rounded-lg mb-2" />
            )}
            <p className="text-gray-800 mb-2">{blog.content}</p>
            <p className="text-gray-600">Visibility: {blog.visibility}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default SingleBlogComponent;