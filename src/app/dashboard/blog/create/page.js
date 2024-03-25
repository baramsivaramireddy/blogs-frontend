"use client"
import { useForm } from 'react-hook-form';

import BLOGFormDataComponent from '@/components/pages/admin/blogformComponent'
const AdmindashboardBlogCreate = () => {


    return (<>
        <BlogCreationForm />
    </>)
}



const BlogCreationForm = () => {


    // based on title only form component create or updated blog . So take neccessary steps when  it need to change
    return (<>
        <div className='p-5'>
            <BLOGFormDataComponent title={`create a blog`} />
        </div>
    </>)
}


export default AdmindashboardBlogCreate;