import React, {useState} from 'react'
export default function Textform(props){
    const handleUpclick = ()=>{
        //console.log("you have clicked handleupclick" +text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success")
    }
    const handleOnchange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const handleLowerclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success")
    }
    const handleClearclick = ()=>{
        let newtext = '';
        setText(newtext);
        props.showAlert("Text cleaed","success")
    }
    const handleSenteceClick = ()=>{
        let sentence = text.toLowerCase().split(" ");
        for (let i = 0; i < sentence.length; i++) {
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        setText(sentence.join(" "))
        props.showAlert("Sentence set","success")
    }
    
    const handleCopyText = ()=>{
        let newtext = document.getElementById('mybox');
        newtext.select();
        navigator.clipboard.writeText(newtext.value)
        props.showAlert("Copy to clipboard","success")
    }

    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed","success")
    }
    

    const [text, setText] = useState("Enter text here");
 
    //text = "xyzkdkjd "; //wrong waty to change state;
    //setText("please Enter text here");//correct way to change state;
    return (
        <>
        <div className="container my-5" style={{color:props.mode==='dark'?'white':''}}>
             <h2>{props.heading}</h2>
            <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':''}} id="mybox"  rows="8" />
            </div>
            <button className="btn btn-primary my-2" onClick= {handleUpclick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick= {handleLowerclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick= {handleSenteceClick}>Sentence case</button>
            <button className="btn btn-primary mx-2" onClick= {handleCopyText}>Copy to clipboard</button>
            <button className="btn btn-primary mx-2" onClick= {handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-2" onClick= {handleClearclick}>Clear Text</button>
         </div>
         <div className="container my-3" style={{color:props.mode==='dark'?'white':''}}>
            <h2>The length of text summary</h2>
            <p>{text===""?0:text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes takes to read this</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the texbox to preview here"}</p>
         </div>
         </>
    )
}