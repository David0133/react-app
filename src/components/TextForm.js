import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClear = ()=>{
      let newText = "";  
      setText(newText);
      props.showAlert("Text box cleared", "success");
    }
    
 const[text,setText] = useState('');
    return (
    <>
    <div className="conatiner" style={{color : props.mode==='dark'?'white':'#29424c'}}>
    <h1>{props.heading}</h1>
<div className="mb-3" >
<textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode!=='light'?'white':'#29424c'}} rows="6"></textarea>
</div>
<button className="btn btn-primary my-2" onClick={handleUpClick}  >Make it Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>

</div>

<div className="conatiner my-2" style={{color : props.mode!=='light'?'white': '#29424c' }}>
  <h1>Word and character count</h1>
  <p><b>{text.split(" ").length-1} words and {text.replace(/ /g ,"").length} characters</b></p>
  <h1>Preview</h1>
  <p><i>{text.length>0?text:"To see the preview enter something in the above box"}</i></p>
</div>
</>
  )
}
