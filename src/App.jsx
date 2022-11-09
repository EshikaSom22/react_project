import { useState } from 'react'
// import './index.css'
let currentTime=new Date();
 currentTime=currentTime.getHours();
 
 let greeting="";
 const cssStyle={}
 if(currentTime>=1 && currentTime<12){
 greeting="Good Morning";
cssStyle.color='green';}
 else if(currentTime>=12 && currentTime<19){
 greeting="Good Afternoon";
 cssStyle.color='orange';
 }
 else{ 
 greeting='Good Night';
 cssStyle.color="black";
 }
const contain={
  backgroundColor: 'rgba(130, 237, 201, 0.73)',
    width: '100 wh',
    height: '100vh',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center'
}
const main1={
  backgroundColor: 'rgba(241, 213, 188, 0.948)',
    width: '20%',
    height: '40px',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '30px',
    borderRadius: '9px',
    textAlign: 'center',
    display: 'flex',
    margin: 'auto',
    fontFamily: '"Josefin Sans", sans-serif',
    color: 'palevioletred',
    alignItems: 'center',
justifyContent: 'center'
}

const App = () => {
  return (
    <div className='container' style={contain}>
      <span className='main' style={main1}>Hello Sir,<span style={cssStyle}>{greeting}</span></span>
    </div>
  )
}

export default App
