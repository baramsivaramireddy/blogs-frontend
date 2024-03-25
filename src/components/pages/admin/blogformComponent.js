import { useForm } from "react-hook-form";
import { useRef, useState } from 'react'
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import LexicalEditor from "@/editor/LexicalEditor"
const BLOGFormDataComponent = (props) => {

    const [isLoading, setIsloading] = useState(false)
    const DEFAUTVALUES = props.DEFAUTVALUES || {}
    const TITLEFORFORM = props.title
    const router = useRouter()
    

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: {

        title:DEFAUTVALUES.title,
        description:DEFAUTVALUES.description,
        visibility: DEFAUTVALUES.visibility 
    } });
    const editorRef = useRef(null)
    const onSubmit = async (data) => {

        try {

            setIsloading(true)

           
            const payload = data
            let fileToBeUpload = data?.image[0];
            if (fileToBeUpload) {
                console.log("No file selected for blog ");
                const formData = new FormData();
                formData.append('file', fileToBeUpload);

                let response = await axiosInstance.post("/api/upload", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });

                payload.imageId = response.data.id
            }

            delete payload.image
            payload.content = JSON.stringify(editorRef.current.getEditorState())

            
            let response = await axiosInstance.patch(`/api/blogs/${props.BLOGID}`, payload)

            if (response.status ==201) {
                toast.success(' opearaion succesfully successfully')
                router.back()
                
            }
            else{
                toast.error('something went wrong')
            }
            setIsloading(false)
        }
        catch (err) {
            console.log(`Error while creating/ updating a blog ` + err)
            toast.error('something went wrong')
        }

    };

    return (
        <div className=" mx-auto">
            <h2 className="text-xl font-semibold mb-4">{TITLEFORFORM}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input type="text" id="title" {...register("title", { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>

                    <textarea id="description" {...register("description", { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
                    <input type="file" id="image" {...register("image",)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />

                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
                    <LexicalEditor isReadonly={props?.isReadonly}  ref={editorRef} initialEditorState ={DEFAUTVALUES.content} />
                    {/* <textarea id="content" {...register("content", { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" /> */}
                    {errors.content && <span className="text-red-500 text-sm">Content is required</span>}
                </div>

                <div>
                    <label htmlFor="visibility" className="block text-sm font-medium text-gray-700">Visibility:</label>
                    <select id="visibility" {...register("visibility", { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                        <option value="">Select visibility</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                    {errors.visibility && <span className="text-red-500 text-sm">Visibility is required</span>}
                </div>

                <div>
                    <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">{isLoading ? "doingg" :TITLEFORFORM}</button>
                </div>
            </form>
        </div>
    );
};
export default BLOGFormDataComponent