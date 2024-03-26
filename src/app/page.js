"use client"

import DisplayBlogs from "@/components/pages/shared/displayBlogs";
import { useToken } from "@/hooks/useAuth";
import Link from "next/link";
export default function Home() {

  const token = useToken()
  return (
    <div className="  h-full p-5  flex flex-col gap-3">


        <h1 className="text-2xl font-bold  my-5"> BLOGS</h1>
        

        { token &&  <Link className='action-button w-48 ' href={`/dashboard/blog/create`} >create a blog</Link>}

        <DisplayBlogs />

    </div>
  );
}
