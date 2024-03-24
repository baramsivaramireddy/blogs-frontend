"use client"
import { useEffect , useState } from "react"
import { useParams } from "next/navigation"
const BlogUpdatePage = ()=>{



    const BLOGID = useParams().BLOGID

    const [blog , setBlog] = useState(null)

    useEffect(() =>{


        
    } ,[])
    return (<>


    </>)
}

export default BlogUpdatePage