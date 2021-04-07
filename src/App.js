      import React from 'react';

      import './App.css';
      import {useState} from 'react';



      function App(){

        const info =['KALAM','TINA','FRIDA','MONI','NILU'];

        return(
          <div style={{textAlign:"center"}}>

            <MovieCounter></MovieCounter>
            
            {

            info.map(nk => <li>{nk}</li>)         // " Map " Function 

            }



            
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

              const handledecrase =()=> setCount(count-1);




            // const Count = 5;
                return (

                  <div>
                    <button onClick= {handleClick}> Add_Movie</button>

                      <button onClick={handledecrase}> Decrase</button>
                      
                    <h5> Number Of Movies :{count} </h5>
                    <MovieDisplay movieinfo = {count}></MovieDisplay>
                    <MovieDisplay movieinfo = {count}></MovieDisplay>
                    <MovieDisplay movieinfo = {count}></MovieDisplay>
                    <MovieDisplay movieinfo = {count}></MovieDisplay>
                  
                  </div>
                );
              }
              
              function MovieDisplay(props){

                return <h3>I Have Done :{props.movieinfo} </h3>
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
