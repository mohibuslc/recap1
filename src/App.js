    import React from 'react';

    import './App.css';


    function App(){

      const info =['KALAM','TINA','FRIDA','MONI','NILU'];

      return(
        <div style={{textAlign:"center"}}>
        <Friends name ={info[0] } age="89"></Friends>
        <Friends name ={info[1]}></Friends>
        <Friends name ={info[2]}></Friends>
        <Friends name ={info[3]}></Friends>
        <Friends name = {info[4]}></Friends>

        </div>

      );
            }

    function Friends(props){
     console.log(props);
      const design ={

        margin:'10px',
        border: '2px solid red',
        
        
      }
    
      return (
      
        <div style={design}>
          <h2> Good Morning </h2>
          <p>{props.name} Hellow !!! i m Start Recap : Module 31 To 48</p>
          <p>My age is : {props.age || 45}</p>
          
          </div>
      )
      
      }


    export default App;
