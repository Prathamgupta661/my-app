import React from 'react'

export default function about(prop) {
  return (
    <div className='container'>
      <h1 className={`text-center text-${prop.mode==='dark' ? 'light' : 'dark'}`}>About Us</h1>
      <p className={`my-4 text-${prop.mode==='dark' ? 'light' : 'dark'}`}><h3>TxtXtract is a unique website developed by Pratham Gupta, primarily designed to perform various operations on regular typed text. Here are some key details about the website:</h3></p>      <ul>
        <li className={`text-${prop.mode==='dark' ? 'light' : 'dark'}`}><h5>Text Conversion: TxtXtract can convert your text to any case with just one simple click.</h5></li>
        <li className={`text-${prop.mode==='dark' ? 'light' : 'dark'}`}><h5>Whitespace Removal: You can even remove whitespaces from your scripted documents.</h5></li>
        <li className={`text-${prop.mode==='dark' ? 'light' : 'dark'}`}><h5>Text Analysis: It does a detailed analysis of your text, providing an output of words, characters, along with reading time.</h5></li>
        <li className={`text-${prop.mode==='dark' ? 'light' : 'dark'}`}><h5>Copy Text: It copy the text after you done all changes.</h5></li>
      </ul>
      <h5 className={`text-${prop.mode==='dark' ? 'light' : 'dark'}`}> Open Source: The best part of TxtXtract is that it is an open-source project, which means new features are continuously being added.
        TxtXtract is more than just a simple text drafting and formatting tool. It offers a wide range of features that make it stand out from traditional text editors like WordPad or NotePad. Whether you’re drafting a document, analyzing text, or just playing around with different text formats, TxtXtract has got you covered</h5>
    </div>
  )
}
