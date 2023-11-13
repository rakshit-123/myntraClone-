import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.webp';
import './Carousel.css';
const Carousel = ()=>{
    return (
       <>
        
        <div className = "n1">

          <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
  <div class="carousel-inner l10">
    <div class="carousel-item active">
      <img class="d-block  car" src={offer1} alt="First slide"/>
    </div>
    {/* <div class="carousel-item">
      <img class="d-block w-100  car" src={offer2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100  car" src={offer3} alt="Third slide"/>
    </div> */}
  </div>
</div>  
        </div>
     </>  
    )
}
export default Carousel;