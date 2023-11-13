import bag from '../assets/bag.png';
import profile from '../assets/profile.png';
import wishlist from '../assets/wishlist.png';
import Search from '../assets/Search.png';
import logo from '../assets/logo.png';
import  './Navbar.css';
const Navbar = ()=>{
      return(
        <div className="container-fluid c1">
  <div className="row row-cols-auto j1">
    <div className="col-1   text-end p-0" ><img src = {logo} className = "img-fluid l1" /></div>
    <div className='col-11 n80'  mt-5> 
       <div className='row d-flex justify-content-center align-items-start g1'>
       {/* 2nd div  */}
    <div className="col-4 a1 ">
         
    <div class="container text-center p3">
  <div class="row row-cols-auto t1 ">
    <div class="col-sm-3 md-2 z1">Mens</div>
    <div class="col-sm-3 md-2  z1">Women</div> 
    <div class="col-sm-3 md-2 z1">kids</div>
    <div class="col-sm-3 md-2 z1">sports</div>
  </div>
</div>
    </div>
    {/* input  */}
    <div className="col-2  s1">
       <span class = "search"><img className='i2' src = {Search}></img></span>
       <span><input type = "text" placeholder='serach for products' className = 'a5'></input></span>      
                 

       
    </div> 
    <div className="col-3 a1" id = "hello">
    <div class="container text-center p3">
  <div class="row row-cols-auto t1 ">
    <div class="col-sm-3 md-2 q1">
    <img  className = "i5" src = {profile}/>
    <p className='z25'> profile</p>
    
    </div>
    <div class="col-sm-3 md-2  q1">
    <img className = "i5" src = {wishlist}/>
    <p className='z25'> Wishlist</p>
    
     {/* className = "i5" */}
    </div> 
    <div class="col-sm-3 md-2 q1">
    <img  className = "i5"src = {bag}/>
    <p className='z25'>Bag</p>
    </div>
    
  </div>
</div>
    
    </div>
   </div> 
    </div>
  </div>
</div>

      ); 
}
    export default Navbar;