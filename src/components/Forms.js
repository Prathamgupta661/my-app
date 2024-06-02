import React, { useState } from 'react';

export default function Forms(props) {
    const handleclick = () => {
        let newtxt = text.toUpperCase();
        settext(newtxt);
    }
    const handleloclick = () => {
        let newtxt = text.toLowerCase();
        settext(newtxt);
    }
    const capitaltxt = () => {
        let newtxt = text[0].toUpperCase() + text.slice(1)
        settext(newtxt);
    }
    const cleartxt = () => {
        let newtxt = '';
        settext(newtxt);
    }
    
    const handlechange = (e) => {
        settext(e.target.value);
    }
    const removes = () => {
        let newtxt = text.split(/[ ]+/);
        settext(newtxt.join(" "));
    }
    const  copytxt=async()=>{
        await navigator.clipboard.writeText(text)
        alert("message copied");
        
    }
    const [text, settext] = useState('');
    return (
        <>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Try TxtXtract Word Counter || Copyt Text || Remove Extra Spaces</h2>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} placeholder="Enter Text Here" value={text} onChange={handlechange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} id="mybox" rows="8"></textarea>
                    <button disabled={text.length===0} className='btn btn-primary m-2' d onClick={handleclick}>Convert to UpperCase</button>
                    <button disabled={text.length===0} className='btn btn-primary m-2' onClick={handleloclick}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className='btn btn-primary m-2' onClick={capitaltxt}>Capitalize text</button>
                    <button disabled={text.length===0} className='btn btn-primary m-2' onClick={cleartxt}>Clear text</button>
                    <button disabled={text.length===0} className='btn btn-primary m-2' onClick={copytxt}>Copy text</button>
                    <button disabled={text.length===0} className='btn btn-primary m-2' onClick={removes}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes to read this</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
