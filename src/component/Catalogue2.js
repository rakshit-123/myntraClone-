import onClickHandler from './Catalogue.js';
import {Link} from "react-router-dom";
import './Catalogue2.css';
// import  shirts from '../assets/shirts.avif';
// import  topper from '../assets/topper.jpg';
const Catalogue2 = (props)=>{
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

  <img src={props.pmgsrc} class="card-img-top z-26 sm-2 md-2 lg-2" alt="..."/>

  <div className=" c105">
    <p className="card-title g9">{props.title}</p>
    <h5 className="card-text x9">{props.head}</h5>
    <p className = "x9">{props.down}</p>

     {/* <Link to = "/onClickHandler" className ="btn btn-primary z9">View</Link>  */}
  
  </div>
</div>
    
  </div>
  
</div>


       );
}
export default Catalogue2;