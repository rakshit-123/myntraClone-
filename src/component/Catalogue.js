 import onClickHandler from './Catalogue.js';
import {Link} from "react-router-dom";
import './Catalogue.css';
// import  shirts from '../assets/shirts.avif';
// import  topper from '../assets/topper.jpg';
const Catalogue = (props)=>{
               const onClickHandler = async()=>{
                //  let response =  await axios.get("https://api.unsplash.com/photos/?client_id='AWIiaARhlqLNnHOANnIxiAAgpXADSbnaHWL1fRHwLwU'");
                       
                       console.log('done');  
                        
                  
               }
             
              
              
       return (
  //       <div className="container">
  // <div className="row row-cols-6">
  <div className = "row y25">
    <div className ="col-2 b25">
    <div className="card a15 sm-2 md-2 lg-2"  >

  <img src={props.pmgsrc} class="card-img-top z-25 sm-2 md-2 lg-2" alt="..."/>

  <div className="card-body c25">
    <p className="card-title g9">{props.title}</p>
    <h6 className="card-text x9">{props.head}</h6>

     <Link to = "/onClickHandler" className ="btn btn-primary z9">View</Link> 
  
  </div>
</div>
    
  </div>
  
</div>


       );
}
export default Catalogue;