import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection } from 'lexical';

import { $createHeadingNode} from '@lexical/rich-text'

import {$setBlocksType} from '@lexical/selection'
const Toolbar = ({ EditorBaseDiv }) => {
  const [editor] = useLexicalComposerContext();
  const HandleHeading = () => {

    editor.update(() => {

  

      const selection = $getSelection();
      $setBlocksType(selection, () => $createHeadingNode('h1'));
    })
  }
  const HandleFullScreen = () => {

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      EditorBaseDiv.current.requestFullscreen();
    }
  }
  return (<div className="w-full flex  gap-5  items-center py-1">


    <button onClick={HandleFullScreen} > 	&#128437;</button>
    <button onClick={HandleHeading}> h1</button>
  </div>)
}
export default Toolbar