import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createParagraphNode, $getSelection, $isRangeSelection } from 'lexical';

import { $createHeadingNode } from '@lexical/rich-text'

import { $setBlocksType } from '@lexical/selection'
import Dropdown, { DropDownItem } from '../ui/dropdown';
const Toolbar = ({ EditorBaseDiv }) => {
  const [editor] = useLexicalComposerContext();
  const HandleHeading = (tag) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));

      }
    })
  }


  const HandleFullScreen = () => {

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      EditorBaseDiv.current.requestFullscreen();
    }
  }

  const formatParagraph = () => {

    editor.update(() => {

      const selection = $getSelection()

      if ($isRangeSelection(selection)){
        $setBlocksType(selection, () => $createParagraphNode())
      }
    })
  }

  
  return (<div className="w-full flex  gap-5  items-center py-1">


    <button onClick={HandleFullScreen} > 	&#128437;</button>

    <Dropdown>
      <DropDownItem onClick={() => { HandleHeading('h1') }}>
        <span>  h1</span>
      </DropDownItem>
      <DropDownItem onClick={() => { HandleHeading('h2') }}>
        <span>  h2</span>
      </DropDownItem>
      <DropDownItem onClick={() => { HandleHeading('h3') }}>
        <span>  h3</span>
      </DropDownItem>
    </Dropdown>

  </div>)
}
export default Toolbar