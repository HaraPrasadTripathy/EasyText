import React, { useState } from 'react'
import '../my-proj1.css';
import './Navbar'
export default function TextForm(props) {
  const UpperCaseEvent =()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.alertfn("Success! Text has been converted to Upper Case")
    if(newText==="")
    props.alertfn("TextField is Empty,enter some text first")
  }

  const LowerCaseEvent =()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.alertfn("Success! Text has been converted to Lower Case")
    if(newText==="")
    props.alertfn("TextField is Empty,enter some text first")
  }
  
  const Extraspc =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alertfn("Success! Extra Spaces have been removed")
    if(text==="")
    props.alertfn("TextField is Empty,enter some text first")
  }

  const clearFn=()=>{
    let newText="";
    setText(newText);
    props.alertfn("Success! Text has been cleared")
    if(text==="")
    props.alertfn("TextField is already empty")
  }

  const capitalizeAfterSpace=()=>{
    const newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText);
    props.alertfn("Text has been capitalized!")
    if(newText==="")
    props.alertfn("TextField is Empty,enter some text first")
  }

  const CopyToClipboard = async () => {
    if (!text) {
      // If there's no text to copy, alert the user
      props.alertfn("TextField is empty, nothing to copy");
      return;
    }
    
    try {
      await navigator.clipboard.writeText(text);
      props.alertfn("Text has been copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text: ", error);
      props.alertfn("Failed to copy text to clipboard");
    }
  }

  const onchangefn=(event)=>{
    setText(event.target.value);
  }
  
  const [text,setText]=useState("");
  return (
  <>
  <div className="formDiv">
  <h2 style={{color: props.mode==="dark"?"black":"white"}}>{props.heading}</h2>
  <textarea style={{backgroundColor: props.mode==="dark"?"white":"rgb(77, 72, 72)",color: props.mode==="dark"?"black":"white"} } className='container'  value={text} placeholder={props.placeholder} rows="13" onChange={onchangefn}></textarea>
  <button className='btnClass my-4 mx-1' onClick={UpperCaseEvent}>UpperCase</button>
  <button className='btnClass my-4 mx-2' onClick={LowerCaseEvent}>LowerCase</button>
  <button className='btnClass1 my-4 mx-2' onClick={Extraspc}>RemoveExtraSpaces</button>
  <button className='btnClass2 my-4 mx-2' onClick={capitalizeAfterSpace}>EachFirstLetterCapital</button>
  <button className='btnClass my-4 mx-2' onClick={CopyToClipboard}>Copy</button>
  <button className='btnClass my-4 mx-2' onClick={clearFn}>Clear</button>
  </div>

  <div className="container ">
  <h2 style={{color: props.mode==="dark"?"black":"white"}}>Your text Summary</h2>
  <p style={{color: props.mode==="dark"?"black":"white"}}>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
  </div>
  </>
  )
}
