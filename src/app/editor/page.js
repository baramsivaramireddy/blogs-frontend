
"use client"
import LexicalEditor from "@/editor/LexicalEditor"
import { useRef } from "react"
export default function EditorPage(){

    const editorRef = useRef(null)
    return (<>

            <div className="h-full  p-5">

            <LexicalEditor  isReadonly={false}  ref={editorRef} />
            </div>
    </>)


}