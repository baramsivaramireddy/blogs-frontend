import { forwardRef, useEffect, useState, useRef } from 'react';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import Toolbar from './plugins/Toolbar';

const theme = {};

function onError(err) {
    console.log(err);
}

function LexicalEditor(props, ref) {
    const [editorState, setEditorState] = useState(props?.initialEditorState);

  
    useEffect(() => {
        if (props?.initialEditorState) {
            setEditorState(props.initialEditorState);
        }
    }, [props.initialEditorState]);

    const initialConfig = {
        namespace: "Myeditor",
        editorState,
        theme,
        onError,
        editable: !props?.isReadonly,
    };



    return (

        <div className='bg-white overflow-auto' >

            <LexicalComposer initialConfig={initialConfig}>
               


                {props?.isReadonly != true &&  <Toolbar  />}
                <div className='relative'>
                <RichTextPlugin
                    placeholder={<div className='absolute top-0 p-1 '>Enter some text...</div>}
                    contentEditable={<div  >
                        <ContentEditable  className='p-1 border-2 rounded' />

                    </div>}

                    ErrorBoundary={LexicalErrorBoundary}
                />

                </div>
             
                <HistoryPlugin />
                <AutoFocusPlugin />
                {props?.isReadonly != true  && <EditorRefPlugin editorRef={ref} />}
            </LexicalComposer>
        </div>

    );
}

export default forwardRef(LexicalEditor);
