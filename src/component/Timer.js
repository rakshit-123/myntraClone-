import './Timer.css';
import {useState,useEffect} from 'react';
const Timer = ()=>{
      const[hours,setHours] = useState(6);
      const[minutes,setMinutes] = useState(0);
      const[seconds,setSeconds] = useState(0); 
      var timer;
      useEffect(()=>{
        timer = setTimeout(()=>{
            setSeconds(seconds+1);
            if(seconds==59){
                 setMinutes(minutes+1);
                 setSeconds(0);

            }
            else if(minutes == 59){
                   setHours(hours-1);
                   setMinutes(0);
            }
       },1000);  
       return ()=>{
            clearInterval(timer);
       }
    }) ; 
        return (
            <div className='d-flex justify-content-center align-items-center  a90' >
            offer ends in {hours}:{minutes}:{seconds}
       </div> 
        );
}
export default Timer;