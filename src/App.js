
import './App.css';
import data from './data.json'
import { useState } from 'react';

function App() {
 
  let [numOfParagraphs,setNumOfPara]=useState(0);
  let [para,setPara]=useState([]);
  let inputNumber=(e)=>{
    if(e.target.value>=0){
      setNumOfPara(e.target.value);
    }
   
   
  }
  let btn=()=>{
    if(numOfParagraphs>8){
      alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
   }
    let paraSectionOnUI = data.filter((e,index)=>{
      return numOfParagraphs>index;
    })
   
    setPara(paraSectionOnUI)
 
  }

  
  return (
    <div className="App">
      <p className='heading'>TIRED OF BORING LOREM IPSUM?</p>
      <div className='inp-box'>
      <p className='para'>Paragraphs:</p>
      <input className='inp' type='number' onChange={inputNumber} value={numOfParagraphs}/>
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
