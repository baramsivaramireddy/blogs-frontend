'use client'
const Toolbar = ({EditorBaseDiv}) => {


    const HandleFullScreen = ()=>{

        if(document.fullscreenElement){ 
            document.exitFullscreen() 
         } else { 
           EditorBaseDiv.current.requestFullscreen();
         } 
    }
    return (<div className="w-full glex  gap-5 items-center py-1">


        <button onClick={HandleFullScreen} > 	&#128437;</button>
    
    </div>)
}
export default Toolbar