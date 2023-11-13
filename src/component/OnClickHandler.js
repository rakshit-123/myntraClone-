// import {Link} from "react-router-dom";
// import OnClickHandler from "./OnClickHandler";
import axios from  'axios';
const OnClickHandler = async()=>{
         const response = await axios.get(' https://api.unsplash.com/photos/?client_id=AWIiaARhlqLNnHOANnIxiAAgpXADSbnaHWL1fRHwLwU ') ;
         console.log(response.data);
         const data =  await response.data;

};
export default OnClickHandler;

