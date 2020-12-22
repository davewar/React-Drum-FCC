import React, {useState, useEffect} from 'react'

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]; 


const ButtonDrum = () =>{

   const [data,setData] = useState([])
   const [display,setDisplay] = useState("")
 
   useEffect(() => {
     setData(bankOne)
     
   }, [data, display])


   const handleClick = (e) =>{
  
                const children = e.currentTarget.children
           const text =  e.currentTarget.id       
             const id = children[0].id
     
         setDisplay(text) 
         // play sound    
        playMe(id)

   }

  const playMe = (id) => {

       const player  = document.getElementById(id)
       player.play()
   
  }

  window.document.onkeyup = function keytrigger(e){

        let val = e.key.toUpperCase()
        
        if(val === "Q" || val === "W" || val === "E"|| val === "A"|| val === "S"|| val === "D"|| val === "Z"|| val === "X"|| val === "C"){
         
          playMe(val)
            
        }
}


   return ( 
            <>
                  <div id="drum-machine"> 

                      <div id="display">{display}</div>

                      <div id="wrapper">

                              {
                                  data.map((item)=>{
                                      
                                      const {keyCode, keyTrigger: letter, id, url } = item
                                    
                                    return (
                                            <button key={letter} onClick={handleClick} className="drum-pad" id={id}>{letter}     
                                                  <audio className="clip" id={letter} src={url}></audio>
                                            </button>

                                          )

                                  })
                              }

                    </div>
                </div>   
           </>            
   )

}





const App = () => {


  return (
              <>
              <ButtonDrum />
               </>
        )
  
  

  
}




export default App
