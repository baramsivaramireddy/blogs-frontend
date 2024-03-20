

"use client"

import { $getRoot, $getSelection } from "lexical"

import { forwardRef, useEffect } from 'react'


import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {EditorRefPlugin} from '@lexical/react/LexicalEditorRefPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
const theme = {

}

function onError(err) {

    console.log(err)
}





const LexicalEditor = forwardRef((props, ref) => {

    const initialConfig = {

        namespace: "Myeditor",
        editorState: props?.initialEditorState ,
        theme,
        onError,
    }

    if (props?.isReadonly ){

        initialConfig.editable = false
    }

    return (

        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />



         {props?.isReadonly == false &&    <EditorRefPlugin editorRef={ref} />}
        </LexicalComposer>
    )
})
export default LexicalEditor