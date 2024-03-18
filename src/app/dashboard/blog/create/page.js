"use client"
import { useForm } from 'react-hook-form';

import BLOGFormDataComponent from '@/components/pages/admin/blogformComponent'
const AdmindashboardBlogCreate = () => {


    return (<>
        <BlogCreationForm />
    </>)
}



const BlogCreationForm = () => {

    return (<>
        <div className='p-5'>
            <BLOGFormDataComponent title={`create a blog`} />
        </div>
    </>)
}


export default AdmindashboardBlogCreate;