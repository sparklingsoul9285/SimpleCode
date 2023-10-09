import React, { useState } from 'react';  // imrs - import useState

export default function TextForm(props) {   
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();      // change to uppercase
        setText(newText);           // set a state
        props.showAlert("Converted to Uppercase!","success"); 
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleClearClick = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text has been Cleared!","success");
    }

    const replacecasefunc = () => {
        let existing_text = prompt("Enter which word to replace : ");
        let replaced_text = prompt("Enter New Text");
        setText(text.replaceAll(existing_text, replaced_text))
        props.showAlert("Text has been replaced!","success");
      }
    
    const handleCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Selected Text has been copied!","success");
    }  

    const handleOnChange = (event)=>{       // how to handle an event - using this function and called by textarea
        // console.log("On change");
        setText(event.target.value);        // event listener
    }

    const [text, setText] = useState('');      // hooks
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // right way to change the state
    return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'black':'black'}} id="mybox" rows="10"></textarea>
        {/* why onChange - becoz we are using value = text as a state here also we need to update the text whenever needed */}
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={replacecasefunc}>Replace any text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy} >Copy text</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'#042743'}}>     {/* mx and my are classes in bootstrap - sets margin between containers/button */}
        <h2>Your Text Summary</h2>
        <p>{text.replace(/\s+/gi, ' ').split(' ').length} words and {text.length} characters</p>      
        {/* text.length - finds no. of characters 
            text.split(" ").lenght - finds no. of words       
        */}
        <p>{0.008 * text.split(" ").length} Minutes to read for above sentence</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
