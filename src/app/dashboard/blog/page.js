"use client";
import Link from 'next/link'
import DisplayBlogs from '@/components/pages/shared/displayBlogs';
const AdmindashboardBlog = () => {


    return (<>

        <div className=" mx-auto p-4">
            <Link href="/dashboard/blog/create" className="block w-48 mb-4 px-4 py-2 bg-blue-500 text-white text-center rounded-md hover:bg-blue-600">
                Create a blog
            </Link>

            <DisplayBlogs />
        </div>
    </>)
}

export default AdmindashboardBlog;