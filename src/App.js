import axios from 'axios';
import {BrowserRouter,Route,Routes,link} from "react-router-dom";
import Footer from './component/Footer';
import './App.css';

import Navbar from './component/Navbar';
import Carousel from  './component/Carousel';
import Timer from './component/Timer';
import Omg from './component/Omg';
// import ImgCard from './component/ImgCard';
import Catalogue from './component/Catalogue';
// import  topper from './assets/topper.jpg';

import  shirts from './assets/shirts.avif';
import  topper from './assets/topper.jpg';
import  kurta from './assets/kurta.avif';
import  kurti from './assets/kurti.jpg';
import hoodies  from './assets/hoodies.webp';
import OnClickHandler from "./component/OnClickHandler";
// import Home from './component/Home';


function App() {
  return (
    <>
     <BrowserRouter>
          <Routes>   
       <Route path = "/OnClickHandler" element = {<OnClickHandler />} />
      </Routes> 
      <div className = "complete">
        <Navbar />
        <Timer />
        <Carousel />
        <Omg />
        <div class="container-fluid l-25">
  <div class="row row-cols-5 m25">
        <Catalogue pmgsrc ={topper}  title = "Trendy casuals" head = "Flat 60% Off"/>
        <Catalogue pmgsrc = {shirts} title = "elevated classics" head = "40-70 Off" />
        <Catalogue pmgsrc ={kurti} title = "Timeless Couture" head = "Min 60% Off"/>
        <Catalogue pmgsrc = {kurta} title = "Elegance Redefined" head = "Min 50% Off"/>
        <Catalogue pmgsrc ={hoodies}  title = "Popular Styles" head = "Min 70% Off"/>
   </div>
   <div class="row row-cols-5 m25">
        <Catalogue pmgsrc ="https://m.media-amazon.com/images/I/41IVgLeu15L._SX300_SY300_QL70_FMwebp_.jpg"  title = "Trendy casuals" head = "Flat 60% Off"/>
        <Catalogue pmgsrc = "https://www.pngall.com/wp-content/uploads/13/Earphone-Bluetooth.png" title = "elevated classics" head = "40-70 Off" />
        <Catalogue pmgsrc ="https://atlas-content-cdn.pixelsquid.com/stock-images/apple-airpods-3-earbuds-earphones-RB1766C-600.jpg" title = "Timeless Couture" head = "Min 60% Off"/>
        <Catalogue pmgsrc = "https://m.media-amazon.com/images/I/41zG4GHpQUL._SX300_SY300_QL70_FMwebp_.jpg" title = "Elegance Redefined" head = "Min 50% Off"/>
        <Catalogue pmgsrc ="https://rukminim1.flixcart.com/image/850/1000/xif0q/television/u/d/t/-original-imaghgphymnvxnaf.jpeg?q=20"  title = "Popular Styles" head = "Min 70% Off"/>
   </div>
   <h1 className="text-center text-success">Diwali sale live on!</h1>
   <div class="row row-cols-5 m25">
        <Catalogue pmgsrc ="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg "  title = "Trendy casuals" head = "Flat 60% Off"/>
        <Catalogue pmgsrc ="https://media.gettyimages.com/id/173239968/photo/skinny-tight-blue-jeans-on-white-background.jpg?s=612x612&w=gi&k=20&c=QqoFe-m6N_FQKu6KyDVrHUwmKUyh3nkFK8QbDrl3OVM= "  title = "elevated classics" head = "40-70 Off" />
        <Catalogue pmgsrc = "https://img2.ogaanindia.com/pub/media/catalog/product/cache/8e2c2a9d4851ee802ebff3c1680adbd5/j/r/jreum0101.jpg" title = "Timeless Couture" head = "Min 60% Off"/>
        <Catalogue pmgsrc ="https://www.lg.com/in/images/washing-machines/md07540887/gallery/FHM1408BDL-Washing-Machines-Right-View-MZ-04-v1.jpg"  title = "Elegance Redefined" head = "Min 50% Off"/>
        <Catalogue pmgsrc ="https://m.media-amazon.com/images/I/41e6oqY5-ZL._SX679_.jpg"   title = "Popular Styles" head = "Min 70% Off"/>
   </div>
       
         <Footer />   
     </div>  
     
  </div>    
      
      {/* </Routes>  */}
       </BrowserRouter>       

    </>
  );
}

export default App;
