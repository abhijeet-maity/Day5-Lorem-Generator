import logo from './logo.svg';
import './App.css';
import data from './data.json'
import { useState } from 'react';

function App() {
 
  let [text,setText]=useState(0);
  let [para,setPara]=useState([]);
  let fun=(e)=>{
    if(e.target.value>=0){
      setText(e.target.value);
    }
   
   
  }
  let btn=()=>{
    if(text>8){
      alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
   }
      let a=data.filter((e,index)=>{
        return text>index;
    })
   
    setPara(a)
 
  }

  
  return (
    <div className="App">
      <p className='heading'>TIRED OF BORING LOREM IPSUM?</p>
      <div className='inp-box'>
      <p className='para'>Paragraphs:</p>
      <input className='inp' type='number' onChange={fun} value={text}/>
      <button onClick={btn}>Generate</button>
      </div>
      {
        para.map((e,index)=>(
          <p className='para1' key={index}>{e.title}</p>
        ))
      }
    </div>
  );
}

export default App;
