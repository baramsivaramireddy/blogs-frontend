"use client"

import DisplayBlogs from "@/components/pages/shared/displayBlogs";
export default function Home() {
  return (
    <div className="  h-full p-5 ">
        <h1 className="text-2xl font-bold  my-5"> BLOGS</h1>
        
        <DisplayBlogs />

    </div>
  );
}
