import { forwardRef, useEffect, useState, useRef } from 'react';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

const theme = {};

function onError(err) {
    console.log(err);
}

function LexicalEditor(props, ref) {
    const [editorState, setEditorState] = useState(props?.initialEditorState);
    const editableRef = useRef(null);

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
        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            {props?.isReadonly === undefined && <EditorRefPlugin editorRef={editableRef} />}
        </LexicalComposer>
    );
}

export default forwardRef(LexicalEditor);
