    import React from 'react';

    import './App.css';
    import {useState} from 'react';



    function App(){

      const info =['KALAM','TINA','FRIDA','MONI','NILU'];

      return(
        <div style={{textAlign:"center"}}>
          <MovieCounter></MovieCounter>
        <Friends name ={info[0]} age="89"></Friends>
        <Friends name ={info[1]}></Friends>
        <Friends name ={info[2]}></Friends>
        <Friends name ={info[3]}></Friends>
        <Friends name = {info[4]}></Friends>

        </div>

      );
            }
           function MovieCounter(){

             //example of usestate:
            //const [first , second]=['ABc','DER'];
            //console.log(first,second);


            const [ count , setCount]=useState(3);

            const handleClick = () => setCount(count + 1);
            

           // const Count = 5;
              return (

                <div>
                  <button onClick= {handleClick}> Add Movie</button>
                  <h5> Number Of Movies :{count} </h5>

                </div>
              )
            }

    function Friends(props){
     console.log(props);
      const design ={

        margin:'10px',
        border: '2px solid red'
        
        
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
