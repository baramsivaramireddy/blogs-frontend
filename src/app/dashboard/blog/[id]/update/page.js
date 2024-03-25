"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import axiosInstance from "@/utils/axiosInstance"

import BLOGFormDataComponent from "@/components/pages/admin/blogformComponent"
const BlogUpdatePage = () => {




    const params = useParams()


    const BLOGID = params.id

    const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {


        async function fetBlog() {

            let response = await axiosInstance.get(`/api/blogs/${BLOGID}`)
            setIsLoading(false)
            setBlog(response.data.blog)
            console.log(blog)
        }

        setIsLoading(true)
        fetBlog()

    }, [])
    return (<>

        <div className=" p-5 flex justify-center items-center">

        {isLoading == false ?
            <BLOGFormDataComponent isReadonly={false} BLOGID={BLOGID} DEFAUTVALUES={blog} title={'update blog'} /> : "loading"}

        </div>
  
    </>)
}

export default BlogUpdatePage