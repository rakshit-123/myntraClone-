import axios from "axios";
import { BrowserRouter, Route, Routes, link } from "react-router-dom";
import Footer from "./component/Footer";
import "./App.css";
import Catalogue2 from "./component/Catalogue2";
import Navbar from "./component/Navbar";
import Carousel from "./component/Carousel";
import Timer from "./component/Timer";
import Omg from "./component/Omg";
// import ImgCard from './component/ImgCard';
import Catalogue from "./component/Catalogue";
// import  topper from './assets/topper.jpg';
import Global from "./component/Global";

import shirts from "./assets/shirts.avif";
import topper from "./assets/topper.jpg";
import kurta from "./assets/kurta.avif";
import kurti from "./assets/kurti.jpg";
// import hoodies  from './assets/hoodies.webp';
// import OnClickHandler from "./component/OnClickHandler";
//import{FaFacebook,FaInstagram,FaLinkedin} from Fa/react-icons;
// import Home from './component/Home';
// import pic from './assets/pic.svg';

function App() {
  return (
    <>
      {/* <BrowserRouter>
          <Routes>   
       <Route path = "/OnClickHandler" element = {<OnClickHandler />} />
      </Routes>  */}
      <div className="complete">
        <Navbar />
        <Timer />
        <Carousel />
        <Omg />
        <div class="container-fluid l-25">
          <div class="row row-cols-5 m25">
            <Catalogue
              pmgsrc="https://4.imimg.com/data4/LN/IU/GLADMIN-3079657/6-500x500.jpg"
              title="laid-Back Picks"
              head="Flat 60% Off"
            />
            <Catalogue
              pmgsrc="https://www.shutterstock.com/image-photo/portrait-nice-attractive-pretty-cool-260nw-1523767853.jpg"
              title="vibrant chic lingerie"
              head="40-70 Off"
            />
            <Catalogue
              pmgsrc="https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/195508s.jpg"
              title="Gant Next"
              head="Min 60% Off"
            />
            <Catalogue
              pmgsrc="https://5.imimg.com/data5/ANDROID/Default/2021/3/KY/XV/QO/42692862/product-jpeg.jpg"
              title="Allen Solly shoes"
              head="Min 50% Off"
            />
            <Catalogue
              pmgsrc="https://sturdykicks.com/wp-content/uploads/2023/02/Hfdad86bef30f42a9a1c51adbdc5dae86x.jpg"
              title="Sturdy Kicks "
              head="Min 70% Off"
            />
            <Catalogue
              pmgsrc="https://raimentz-bucket.s3.us-east-2.amazonaws.com/product-images/1691588726_64d398765c9a8.webp"
              title=" Elegant Ethnic Styles"
              head=" FLAT.50% OFF"
            />
          </div>
          <Global />

          <div class="row row-cols-5 m25">
            <Catalogue
              pmgsrc="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_21/1998804/220626-summer-sandals-bd-2x1.jpg"
              title="Hottest Pairs"
              head="Flat 60% Off"
            />
            <Catalogue
              pmgsrc="https://i.pinimg.com/564x/c5/db/51/c5db5166712b004d2439f6da80b8d33d.jpg"
              title="Stunning Footwear"
              head="40-70 Off"
            />
            <Catalogue
              pmgsrc="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10331501/2023/8/31/68a5eb99-210a-4196-a52e-da62edd669551693465469757-US-Polo-Assn-Men-White--Grey-Colourblocked-Sneakers-48916934-11.jpg"
              title="Sneakers & More"
              head="Min 60% Off"
            />
            <Catalogue
              pmgsrc="https://m.media-amazon.com/images/I/61M2YRv3NCL._AC_UY1100_.jpg"
              title="Must Have Collection"
              head="Min 50% Off"
            />

            <Catalogue
              pmgsrc="https://media.gq.com/photos/58b4874f219f884dcb00bce3/master/w_1600%2Cc_limit/170119_PMFWFW17_DR07-6414.jpg"
              title="Popular Styles"
              head="Min 70% Off"
            />
            <Catalogue
              pmgsrc="https://www.outfittrends.com/wp-content/uploads/2015/02/10966670_10152981087873971_1492331454_n.jpg"
              title="Trendiest Fits "
              head="Min.30% OFF "
            />
          </div>
          <div className="a11">
            <h4 className=" text-Dark h101">SHOP BY CATEGORY</h4>
          </div>
          <div class="row row-cols-5 m25">
            <Catalogue2
              pmgsrc="https://5.imimg.com/data5/SELLER/Default/2023/7/323164902/OR/VL/VP/15389059/whatsapp-image-2023-07-07-at-10-24-58-500x500.jpeg "
              title="Ethnic wear"
              head="Flat 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyskAQMRTWGhoOk8KSjrDW3xyGEPgW2Ap0nw&usqp=CAU"
              title="Wfh Casual Wear"
              head="40-70 Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://m.media-amazon.com/images/I/61zsldI1SRL._AC_UY1100_.jpg"
              title="ActiveWear"
              head="Min 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqgaiV5C2PQO4z-zHzFy7dN58IN6B8DGywie5e4nbTbO1ibjGFql7tvkCeW56LlcIvrA&usqp=CAU"
              title="ActiveWear"
              head="Min 50% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKibo1GEwVc-ZbC6cnOZC28Ty3XxZBPyP_QOWczDJ78RJTFP_dq-ajqpRWPUz4Srfkqyk&usqp=CAU"
              title="WesternWear"
              head="Min 70% Off"
              down="Shop Now"
            />
            <Catalogue2 pmgsrc="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " title="Eyewear " head=" 80% OFF  " down="Shop Now" />
          </div>
          <div class="row row-cols-5 m25">
            <Catalogue2
              pmgsrc="https://media.glamour.com/photos/61b851588d0c8919039bb21a/3:2/w_3000,h_2000,c_limit/cozy%20loungewear%20sets.jpg "
              title="LoungeWear"
              head="Flat 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://img.freepik.com/free-photo/portrait-sporty-handsome-strong-man-healthy-smiling-athletic-fitness-model-posing-near-gray-wall-white-underwear_158538-17455.jpg"
              title="Innerwear"
              head="40-70 Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN83XUbpR2OBXFIUQ-8HU32VNWF5W1lIbpHg&usqp=CAU"
              title="Lingerie"
              head="Min 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="data:image/jpeg;base64,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"
              title="Watches"
              head="Min 50% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://m.media-amazon.com/images/I/61jd5lleEgL.jpg"
              title="Trimmer"
              head="50% OFF"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="data:image/jpeg;base64,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 "
              title="Beauty & Makeup "
              head=" 60% OFF "
              down="Shop Now"
            />
          </div>
          <div class="row row-cols-5 m25">
            <Catalogue2
              pmgsrc="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?cs=srgb&dl=pexels-files-1620760.jpg&fm=jpg "
              title="Kids Wear"
              head="Flat 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_UY1000_.jpg"
              title="FootWear"
              head="40-70 Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
              title="Footwear"
              head="Min 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://images.freekaamaal.com/featured_images/bags-belts-wallets.jpg"
              title="Bags,Belts & Wallets"
              head="Min 50% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mYuwIpxxOsg9rNpEq0JO_pZ_lRoI125DfMio6KZeKKOLGdUiimWeYyrAwjcjgZ0V9ts&usqp=CAU"
              title="Office Wear"
              head="Min 70% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://cdn.linenclub.com/media/wysiwyg/ethnic/LC_Mobile_Banner-Ethnicwear.jpg "
              title="Ethnic Wear "
              head="70% OFF "
              down="Shop Now"
            />
          </div>
          <div class="row row-cols-5 m25">
            <Catalogue2
              pmgsrc="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGRlY29yfGVufDB8fDB8fHww"
              title="Home Decor"
              head="Flat 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://www.shutterstock.com/image-photo/pastel-colored-womens-hand-bag-260nw-2316939619.jpg"
              title="HandBags"
              head="40-70 Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://helpdeskgeek.com/wp-content/pictures/2020/10/1.jpg"
              title="Headphones & Speakers"
              head="Min 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUSGBgYGBwYGhgYGBoZGBgcGBgaGRgYGBgcIS4lHB4rHxgaJjgnKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHxISHzQrJSs0NDQ0NDQ0NDQ0MT80NzY0NDQ1NDQ0NjE0NDE0NDQ2NDQ0NDQxNDQ0NzE0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADgQAAIBAwMCBAUCBQQCAwEAAAECEQADIQQSMQVBEyJRYQYycYGRQrEUI6HB0RVSYvBy4aLC8Qf/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgICAQIEBgMAAAAAAAAAAQIRAyESMUEEIhNRYXEjQlKB4fChscH/2gAMAwEAAhEDEQA/ANHZWjba0LZoy3XMjpLlqYqC1KaYme1BqlNVu1Aim5Q71e5qhjUlFTVGvWNQpATWpCoA1IUATFWJVQq23QAQgohFqu2tFItWkSz1VqaiuAqxVpoRwFTAryotcp3QEyKiQKrNyvFealzSKUWTivClTAqW2hTTBxZQUqDJRMVxSq7JA2SoMtGm3VTpRQWAutDOKYPboW4lIYBcFB3BR95aDuCkOgK5Q7iiboodxTEVRXVKK8oA0NlqMRqWWnotHqCg1WqW6hg9S307AvL1U71Uz1AvSsD12ql2r1mqomkBxNeTUSa4UATBqQNQFSFAExRFoVSgouytCAJtLRSrVFuiVrQhk0WpGvVqu61NukCIXHigb2przV34pJqtVnmubJlo3x47G66iaKsPSbRknmnmkt1ySlOT0b8VFBqVaBXiJVgWtYOS7OeTRArUAKI21HbXVBsydMpKVFlojbVbrWxIG60JeSmLpQ1xKTQ0K7qUvuim15aX6lKljQtuihnFF3BQzigCmuqUV1MA609FI9K0eiUuVNFDAXKl4lArdqfi0gCi9RL0MbldvoAvLVWzVUXrt1ArLJr0VWpqYoGWCpCoqKktIC+2KLtULbolKaAKQ0TboRDRKGqRLLyaEvvV5agtQ3NKbpDirYq193mlVpC7Uw1a5Nd0+z3ry8kuU6PQhUY2MdHp+Kd2FEUFpkpjbWu3HBNHJOeyxakWqt3iqmuZomqJS5BSmpGhUerg9XjkTKNEiKiRUxXjCuhGRQ4oe4KKah3oGAX1pdfWmd6l9+oZSFN4UI9F36FagCqurq6gAZHq5LlDrVi0FBS3alvocV6DQAT4ld4lDg1KaBMvDVNTVCmrENDEEKaGfqqidg3xEnj6waq6hcVlCIx3frice01bobCWj51BYCR6fea8vP6ht1HpHdhwpK5dj0Xx4Sue48ogSxyZngGBz70ObwdvlKEkgBzl9pyfb6+1T019VsK/m+Xy7RLCSNxA4Iwv0pcvUS92wXFsqr5iQVBWN2w5AJgZAqsU2tomcbdD9enMBI2n7xNeG2y/MCKGXVjaxcuWC57+ZnKKqj9MGCSP2oy/qNq7TLN5QWVSY9Q0CCfv3rojn3syljfg9Q0QrUGrTxJExwfxV6tXSnZi0EE0Leq3dVVw1GToqHYs1KURpEwKo119UEsaW3OqOy7rcADE9/xXlTkoytnfGLlGka/TUahrCaA3WhjcJEw0nIJ4NbjTMrKomGZSwB9AeT/Su/02aM0cmfG4Mjeeg7jxVmoJUkGl9y5VZ3onEi9NTmmFl6zKXzup1pbmKywSbZplVIbo1esaGtPV816CORlbmhrtXM1DXmoYIFutQGoNF3TQV41DKFl/mhXFGX6EagCqur2uoAEC1NRV9tJohNLRRQGBXsUxTSVcuiooVimvVpm+i9qFu6YiihFa1G9dABVSd7DEZ2+9W6a1JM4CiWPsKh0e+jOXIhJIOPxXJ6vI1HjHs6fTwTfJ+CfSf5Us/mBggHJJ7mhOr9Qa45EAKPTn6E006/qF2psWBwD2OKA6fpV8RSxDKAGP5wPyRXmvezuj+pjLU6kKhQFA4ChYg7QMNvJdIA8w5zI5GKlodcbl1Sy28x8o3Z+aC0D0PqAao3WMm4f0IzMJlidxmJ3oCSRBwdojAiu6I4Rt4RSrFkCgQ7TkMMnzCACZ7Gt26VWc9XboYLftXGbaylgNrFFZlwwYSYgRAPPbmjbZbcNrcG6wg+UswGwnEnvn1BoHWaC44I2sqbThLptsGBBBKqsAwYJ54oXRNetsVdb52g7RcKsSIOFuKADgsBvAMxMxjSKrbTM5b0inTvetts3F1Zi+9mJglioVZG4AmYn64rQW7hcbiu3MQTJPqT2Jz2rMXGRb+MrBO3YYO8GGSNskRBk/U8UztdQhgHctCxhCu0GJzEE4MwfQCauM3GV+BSjyVDeaW6nqaSQrrI5PYUB1LXvctstsGSMAf3rNdD6BeZi8sc5E4/FTl9UpJ8X/ACaY8HHbD31LsrMyztPJ4ZfaremW/OWGFYRBE8+nvTm5aNm35lDGcDmfapqoZC3lSMHEgOQIkjsJz+/p57Vv7nVzpFWi6ayqzeX1knygAz25PsPcSJou3qblt9qkN4o2l1O5rbHiBMbYPA4IzNKujdaYMbN5pAJAc7O2chPlEA/gfY/Suj3QylNgKsrLJMqfLIEQMMO4x+epReOS40/3MpxdtS2O9Gytbe25Fy4qkEkFSwMlZB+U1lLOscWwHJLAlc/Ngxn3p9qdert5dou7WCo5C7mQyQD3G1pkSIiknV9MyhHYQSSrRkbx3B7gium3L2+P9nMoqL5Pss0UnJrQ6YYpB0w4rRadq3xY0jPJKw2yKsZq8TivGNdRzspd6oZqtaqLppMaA7z0Hcaavu0K5xUsaBLxoRqvvNQ7GgCNdXldQBZpjTjTIKTWhFNNJdqgGluwDVo01dprgo5KdCF7aehL2lp8bYoHU3UU7Sc1M5RgrYRTk6RmesJCeGkS3mf/AMR2pvptIgshpXIBGOMUm0Wla7cdpbzE57QDVvWLvhpsJYsRAXsPevEnNZJNnqRhxSimJdXqt94clEPHE5zFONMgCs6RbDkKrMVAQYkktjLFQB3pH05S91VVZzE081GsCsUQ7ig2lRIJJaYBQyVxkd59qIreysjpUgC9o3SFZ3RWkoSHIJjsDO0+Y8iMmnfQdGq+Zsw/h8geXYjGJ7sX/pQGgFxrhuM7sqAqN2ASBwvsDn6RM0x0+tFi81sgMjEFWIlVIHf1lcY7qPWtsco8tmGRNxpEPivXai2zGy6IFVWO8A7wSFCycSB39SBV3R+sLqlllCsGBc557BCPQio/FPSf4pVZd3lwGMCSxmFAHA/+tB9B6S2mDEmB8xO4K0RM7iIYY9K62rVf5HeH4K/V4F1xwt5iSu0So8yhUYNMGWAVsCGMjkQcUbqdUzFidnyFUCDazDzwXBztO2YzzyO6Wzqrb3rl1w6qzsSyLJglgk44bGc5VhGKY27QQEou0OQxSPMGIMZIGIzEcnk1y5LS/YIL3IK6TqfDRoRWMZzkf0pZ0/V6gXWYiFY4T096Z2NKwIcHJMREkz2gcmnd3ojC0WJ23MwAZAH6dw4J7xx+9c0I/EjpV82aSlGEtvsVm4CV8UhFZgNx9CCYQR3iJ98etG9J1AuJcggrv2jGIVEGB9qS3bM3GfW31YIu8IFKBifKoGeBBJGe3Hd7p7XhWwxXYr+ZVjbsmAAV9SNuPrVuCjHStEN332Keo2FtSTYRwwEAkgA5JkZ3Aj9qWdNu2gHcretK7Lty6A4aQrHlJk/X2pnqOsIzeGyMxncAwhWUZ5iQCPbuKhZY3WuXdQiqlpAqAH5SZaATz5VCz/yqoQajUi5NrsA1F8C6jkyivKoS0gP5S0g5Bbac+h9BT3WjxNK7hhCuXAP/ABbaYP0BpP1jpFtD4tpmdSu/aW3cQVIPMEGQO0EeleL1a6ykKnka2bfGSxIJIPfkzPtWuN1NIia5RtEtHqOKfaPVRzWZ0tlxypH1pmjHg16ClFeTjcZPwaVNaPWrl1ANI9ObYUs75E+UHI7SYmvdNcDYW5bJ9JqY54SbSfQnikvA9L0PcoJ7jIQG79+xqS6qteSZHE51oK+KNa5NUOoNA6FVxKHdaZ3LVB3EoCgSuqzZXUhUEPYNVbitPPAmqrmintTQAOm15HNOdNrwe9I9T08jig97oe9VYUbq3qZrJfEwKPuQli/6fSfSp6LqmQDS5rjPqVcOdkleODXH6yftUTp9LHbkd069ftKzKAoWJVu/0qvXC5cdHfbD+h4A5FaPqyW2tsAw3AY9SfSk/S7aXLe1mKuj7pGTAMERXmQjd3rR2c/zIYWillBsGexiQT6E9gT5fbNKOo6+yUBV13ncFQYAG92DKUbaMvhh820cVf1kM4AV1KKzTbJMFlOxRuXO6SCFGIEyYyB0y2HQ6i5blPNh9sIynaABy2BwQAIGDAraMaRm3bsf9Ot3GtIbbliyLuDkHIElTInnv7d67UadmUqwC5yj5U/T/aJ70NY62U8j6faowpJM8TyAcxGAMUO3XUYsNz7sFQVh0MgxBkMNs+9TLG7tBGRRcs6mzmxduIedpAdTz8pOI+vrS7qF7UOoS7fd2cEIigoJ2yCZVQPpngZFMx1e4NrKoZTiQDsYjJhD5gYIbE8iqtf1Xc6Mggp84B+ZSJ8p5WJH5NaY5SXtZMop7RRptG9s7jCkFiWAlVf5XYYgNkiRmJ9Jpn07TM9wBTJgHiFA+UD6KBEAUlu6tmYQ7lFB2IZG0sWJI3rMAssHmQ3bk/R9RZDZ1AkJdUiJyrBiSjDscTTyK+xx112bv/SlskXtxbaCWEdiMkZ7c0Rr9QCkhgR69qWDryFctyOPrSHrHXyFa2ilyEDNtgwBMNlh+8mMDmBu/ZBdmHFr3zfXkb6Xplu6TedQdghAQCMn5v8A4/saUfEJYW2VHMHsSTHuM4NV6HrrXrO2wj7gQpDALtMYHPp9aUdT0uqYNKjETB3GCYJAWZjJj2qFpqL1XZvB8vcnafRRpbKo5OC55JB9Z9eOOIH4irkQXHMmScbZwSSFGDgnMe01aeoWICKt26xwNyAHESxhQVUTJI4qu5orAaF1BaOWUAL6rtJ7yPXtRLk9s2u3tlz21F86ezuZ9ql2/QhaSQB2CiPzFPLXTmCAbojGeT7n3NJ9CFRn2bA7kl3LFmYqu9pKggYMx70Z/rO0sjuoIHoAJ2hgsyTJnHl5x2NRKMm/b/JDkhknT1jzMce8VYNHaaCSsjjNJdZ1JAomSDO0iSGkhAwMrgPKkET+RSu/151+RUKnjJBALMIO0LkFCO+GpRwyfbJc/ka86ayhBGxSZVpxuB7CefXHpSzV3tNadH8sgSgAxLDBP19TArM29Xediqi46NB2Rt3AASGCjBkuBPYeuav6b8PXWYpc3JbJB43MxUzgdidzcx3raOKMXsht0aCzrXvAlv0n5Rnae4nv6/evDcIpnobVpUAto23/AHNiMwSzH5m9hXl7TK0gESMEd1MAwfeCK78TVUc0+7Fo1dSGsqrU6Ijill5XWtjOx0NUK8a4DWafXleZqy31MetOgsewK9pN/qIr2igs2to0UluaX2zFH2HqkQ2ePppoHU9PB7U9QA149qigsxWo0Qt7nOIU0f8AC+nUKRlifNuMET6V78VpCACBuIE/UxxXmi0ypZO1yyht0ny/aRXj+rl+J9j0MMfw/uLOrXGNyFYMqnyxwG7j3qOpcWkPhoxcupLJO1SW8xcj5YEx9zVWrbYrtu2jaXQRu2ngd/mM4PAmfSQE6vbVDv8AG3htqBdxQNtI8oDsMhowQTzzkxji2tmknWjyxqdQyeCWtBHYy7Esq7UPld3csvyjETnAxB5tKWFtCwLIGLb12p5zPijsoGyPNBypzOY9NRyzC4gI3IWWQArAnbb3loSGYMQGPA4zRrdTW0rFUY7kHLFwA9uAgY5c7mxPatr3rsgs6dq9PtbxJubFAC79yM+4gbGJ2hVEDd/ilvUbqlEYbUt7zIR1uG2+6G3K43rkRuUxnIg1HUW7S+Et6IdLgIQw9t0LsJAiQc96UOEfwdq7Ds2uMnewwXKnhpBn1n2pqK7F5oNudT2I1vdJdwBIlVAAJMnvkkD2HoIbnT2UQlmtlxAywdyWUiF2kn5vN5SrZVewpXoNCbqNcC/y8ht/LbSY2AKSOB/yJOAYFW3rO59l1ipRgsMpJADQdgIiJgyRJ9aGkv8Ao+ym955t70TcxZCykGQcDfg/7cEczNe6CyRfCXX/AJatvKCCrM2CQZwCTP5oTUaoJAYQAYEwQAJjPrj80fpUS8XFtSHFtrm4kmQqhognBM/mpbddaZso8Vs3YTRqsrbAIEEhjiPWSRXz7rmkV9RNhjtcbSufNtknjkfaKhqDqyFti23mbasEHcZjmcfeKttXRZQoR/MyrEggrnzLB4yP6ULlF8k99HPkxRyRcZXT+oV8Pa1NPcdWDhtggtG1pgyB7QB+eKZ634nBESDWSuaoXGVGblxB7iSJjFXt0aLm3ezmA23YVJXuZyMDn+xxTkk3cux44RhFRj0hkvxAyK6KkM7Ai5yzAgBUWfQyfQTPel9u5edgEVldVIhRhVJ2gCPm8sgz+0Vpul/D+50d0ZRtBQkLMDJAzI7/AOa1HS+nXFtlnuTHaFKmO0MDg+0EjIOapRbdJePIpZIpdmIsdK1DnKMB8xdpG8s2C26BKqCv0j7MF6AzsSzJtUGIMsCzhyCVmYZQRn9R+7u5piwYWg+1maSVVpBY5LXDkCex4ERxQd3cu7xW3HbOX8u1QADcC7UQe89qxfJ7saroEToNtQS7uQySo+UKCQTBMkS2Y/HFG9P6bZVGZUDbpJBzJBCxLQudoOPQUBodWm64tpGCIhbfuGzaJO5p3MOZGP3qFrrU3PlHhlXcBl3XTsWYliQpYniP70qlux38hr46osIiwRkAblGRu8qD/kOTmqbmpDMyHO0MNkEogRS0sts7d0gCGcGSKQL1XeXd2BY2z4azuto8oEZFPlDCCZgSTQ6dQZFuK6lEa8HLsCx3hYLOB6llz2JrSMEhOw8dSbZutOUV5KyFY2yCysqyPKZzx+o+lN/huw4Du8DfkCSe5zJyZnv61ki/8xVXY+xZw/kZ3fczNHIkEACMAHvR+n+JNrkMzNnLERJiDjsK6cMfdroxyy0bO7b+9LdTpgap0nX0b9Qpgt9HHIrso5rMxrdD7Ui1Ohjit5qNJPymk+q0vqIpgY7wX9TXVojpBXUAbHRapHWQRR1vFfMNFrLthpUkrW36L123dAEgN6UCNNZeiVNAW2/FFoapEiT4p0wfaCxG4QD6EGcT3ikb6m2lsWmckgSwBmAMztGOxweYrYdU0S3rT22/UpAMwVMYYEZBBr5hrejahHXxQX2jzKQ+xUBJxeAjPBEA5jvXn58Fz5eGdmHL7ePyIabWMbjeNcu21DNtgBpefKCAIbEMRnhY4oRrDtccqkqykMyszGHIUNALHeQPqJkgV6+lL2zfS0qInyoXMKwiSk/TA4kGodGsPcI/lu5bziH2gK2dwh1Mnvg1n9vsbL5sb6Ww0NlTyFtlzCAjbBUAsTHc5nNeG1qCSqA7lG3KbESQJ8PdJYxjecjgCo6nrNssqgq5SfK5NxV/SVL7FKn2dWBxBoJuuIHdgiKMKS9tigIwAoG0SfXcPpURhIbkiWu0hQhrrKGAIhokzguY5POB/uM8CaUu7h5CJQmQFL3HlTLllwqg7DnHJ5pdf1vi3AqpZG4wSibTkjMhmIPMCfSnHQNba04YvKyWYMFL53YBXscDPsJHprTS2RdstfWPYVkTw7gCbQzTC+aZXEgwe8x2ikmt6g6gJABdVLeXYAu4lRAmJJ3GBPfvTTTdXR3YuDtb/wA+42gsS2cLnOZ470s6jpGBcsfHe55lZAdydlnuvJ9s04w1bQ1JN0nsss31dAu5CQe0x9yR71doNXdstdZV3HYQZIxuK5n8UvbXLZZVu2trqFB2EJviSzOTyxJpk+nu6lWOmtOS/l2lQAiRk+JO0yY94qfhy5a6Zq5JRt9jv+KvWbL2mdN/hrctsQDDbQGX+0+1Da029a9tnS7adkLM+1lDqqHIkedgRiBxIotfgu9cRTfvJvVAqqq7gI/3OefsBWG6ql5LoVnffbO3A27B6qRgA/1prA1tum/Jn8SMujXdH0On01zczW7kz596kqrYlFB8sd5z9AcF6T4gT+KKCFRQN1xtpCg5+X9QPt2rFWtSyuibRJIEsNxkkQdx9zOPSi+sWUNwby6um1GYQd4X5SSOGjBgHgULFbuezPLNpL4Z9SudRcMGPjOrLA2J8xmQAThVA7xmO3ezXdWuMoXatpdhhXkSQSAC+FUH15pd0HQ371nb4u5PSVEYzAJlTJPpQiag+N/D3XuJ+kTOxgD6iNsfgxScJ1t6f9oScb62jLdU6nfANu5ZdXJgltyiBgLaVYAWIhhMimQ117wktajBYL5WADwbieHO4gSIDEMR5WBMYorW22s6jw0uXlUZ8NbuyNxAxBAE7p98+9cdCQ5Xy/zQNhd3uPPLv5QVYRjLRGTSyTTXGuvkdLmpRSSS+oDp76EOfEfc6bNqoSxyMuqyNsTiTIjPpRprTF/MjKCsqCxRNqjczhm3PuIH2mmVpAHKqFKMh8ybUQj9aufMZ4XEHmpsyqrKiFGjd5wSVjYQsPJjz9vSRWfzIsS2rLuHYguXQgMqhpOdiHdiOeBOMmoDprjyFT5QqhWktbkgk7Zj0mK1epvI6gbMKD57Wd21mna5AEmF5yRNLglx2LAByVJYou91CqTu3cLJJ7mYqk29IVpEekac2yHcBCIbaYkhlXC/U5+1KvifRbbm9RAfzbO69vMOxPMVrehdEFxfGZzsdcJIZ9uI3P8Ap44WKZ67oyMIj/P3PeuvBCSfJ9HNmlF68nyIuR6iidP1O4nyua1XUvhUZKisvrujunANdNHONNL8WOvzrP0p1pfiiw+GMfWvnz715FQLqfagLPqG/THO5c+9dXy/eez/ANa6gdj7TasHB5ry5pCDvtMVYfg0Rr+lcsn/ALoKxqiph/z/AJoDo0/QPi8iLd/yniTwa2+l1G4brZ3jkr3+q18pvWUcZ+x9Kj0/quo0jAHzpOMnH/iex9qBH2Oxq1bg8YIOCD6EdqsdQwIIBBEEHgg1lNJ1izqENwMUdV+ZBnA+V170X0v4htuAGYBjgHgE+hB+U+1F+GFeUZX4r6emmYqrXEt3pISZQn9eD8rd8GfasRaG1wwCOVOZXxMKJ8qHy7dor7rq9Ml1CtxEdD+lgGB+xpW/w5pIgae0MEYWMemKxeLbcTZZtUz50nXHQt4TFRGzzMm2CNwRraiABJjaRG496Sq7BLiq7KCArqIG9i2FAP6RB9/r2+r2vh/SW5K2LazMkjdzz83HavluqSwj3SXG5LhIQDcjgnzDcePp/Wo+Hx6LWSxh02yiOHfaiNKRbCsy9y23BnJEkcDHap/6iHuAhHcKdpdlJJAJMQWiDPAAAGIivNLcv68yhtooAV4MA7eGZAcnEQQcDmtZa6OqA/qdo3MeWIAGPQY4pLG27kOWRJaMnZ1KnDADntxmYFQ1OkaN1p2U+xj7fT2pr1Po4yQIP9KShnRoz/3962SSVeDC3dkdH1h7JZruntXW3T51AYAcFGg/itx0L41sXhtcG03vx/8An4rJC8jrtcCD/wB+1L9T07bDIAfbuP8ANS3x6NIpS7Pr7dStKVDOg3iUbcNjD2P+axn/APRkTdb+VTtLFhjcOwJHNZfRaoAFH3BSIK9gfUA/2olNI7KoDsyK2BO4CR+kHge1RLJaouOKnZE6a4zrcDI5TaSMbAqsCQTIk8cU9uaVtTqBcuOBbSVUKERiV2gbQo483JH96Qfw11VZCsrO47VUGZBn+n9TTK11GCj7AhUEAAYyZ+SDx2HaueTklSNUk2aPpult2i6r4gbcoUq5BgsUhisZlWMHtFXaayl2Dcl33xLMx2wrEW2J4KmAe0j3pIvVXZyxJE8wADgR6egiec040Oq0zHczXNxMmWIk47DB+Ufis1CTVWOVLZ5/DKihioV7VxvOQA4LW2Le7KrOqqfTb6UM2p2qdzbFViokliQLe1trxjc53CeB6dnbXNM07fDnk7ge2RzyQaQ9a6ZbcFhtmJEET+Jq1jX5mRb8IFbqllEfzIXJ/Rt83lCKTsnhVBPEmg7PVUKtALkk5blRwAGMkGAFmOJ5mkl7pLSeB6dpqgaV0yDn8E/fg/erWOLWmHKSe0NbfU2YlJYIrHavbE/NOPeO0/enK9duKjWlc7GEH/cvecZz7dqx66iG84I9eR94ohhwy9hg/wCKpLixWpI+h/DHWLCDazncRHA2Y+mR961HiKw3KQR6gzXxGSSDw0cj98VqOidfZAFeXXiRhx9/1D2NbY5qKrwZTg5PkfQHSaX6rSK3YVLR9RS4JRw3qOGH1FTuP9Qffj81ummYU0ZbqXRUafKJ9qzGt6HBMcV9C1Bz2n8ftSvUKpOfxAB/waBnzz/Tm966tidKvoa6iwoZXNOQZXj0pNr+nbpYCG7j1rSI4Of6dvcVG7ZEZE/uKRRhBbZCdvHdTyPpPIouzdVxGDPY061mhDcA/WkOp0bKZEg/vRYqIGw6NvtMVI7ev19aIF9LuGGx+8YB+lU2tSflbn1qV/Ths9/WpcU0EZNMfab4iu2IVgXTgEnI+/cUYvxgds7CSZ7gD896yFvVMnlfI9aKBVhiKi5R+ppxjL6DXUfFoe3eVlCkoQsEnJB9awiPhgQDuIkxkCnOp0XcUA9siZAyKTnyKUeJLSq+muK6YMTg9j2PqK+ldK6gLqAn5oEgZzXzy3Jge4FNelaprb+xOaUZPpilHyjcXLCtNZ/rPTBBOPWmY1gjcCIpB1XrG7yitG6IUbEHiCSriDMbhz/g/eptvQSPOo7jt9R2qq8oYCDmast2nUbsx6ipb0aKOwVtQG5AP7irbDsnysY+tWvplczG1vUd6EvaZ0+lRKCfRSm12PdHrN5EnzUTb03n3GPr6VmLVw/enGi6iRhvzWMotGikmaF+nKx8voMdv+/4qkaCWPbOPYcZP2n717pNWBkUc98ESKmiroBu6TDlWOCInvj/ADNVi44UgGfb+tGXzt+XIMT9aGePT/ooUWg5EFuSrSBxyKG8NWUgjIq5B83sKgFMMfaKqMaFKVie9o+RhhPBGP8A19qF/hts7DH/ABbI+xp9txHrQj6ea2i70zGSraE7SDkFT/Si7bY5/FXG0eCJqh9IRkSKbhYKVHJedG3IzA+oNabpfxR+m8J/5D+9ZNrjLhhNUPdHanG4ilUj6gt63cWUYR/3tQOpsN9R/WsJpuoOhlWNP9B8RzCv+a1UkzJxoKNs+prqJ/1FD3FdVCCLD5imdhp5ryupASu6ccig9T00MOBXV1SMznUem7c0q3FTFdXU0SyZIbmq1UqcV1dQwQZbuyINV3tMrV1dWMkk9G8W6BxpypEVYkyBXV1Sy0XrdIBWTSzUnNdXUCRUnaneneU211dQh+DrlgCCKruLjORXV1KL2NpUCXdIDkVR4ZFeV1asxXYRp9SRTOzrTXtdWbSLTYbZ1QPNEhxXV1VFA2wJ3Ab61ENyK9rqbSEmyqqwK6uoiDOVab6XQq6+9dXVaM2Ca/occRWe1fT4rq6qELLlkiqxcIrq6oZSJ/xJ9TXV1dVCP//Z"
              title="Jewellery"
              head="Min 50% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://www.byrdie.com/thmb/d0UGKtmhYKiiDmcUzZsh0Qkhckg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuperFitHero-1e1dbc691e8f4d399132c58dbe6e233e.jpeg"
              title="Size-inclusive Styles"
              head="Min 70% Off"
              down="Shop Now"
            />
            <Catalogue2 pmgsrc="https://www.uniformsarees.in/cdn/shop/products/Gray_Stripes_Formal_Wear_for_Corporate_Office_D-98104.jpg?v=1579880695 " title="WorkWear " head="40-80% OFF "
            down="Shop Now"  />
          </div>
          <div className="last">
            <Catalogue2
              pmgsrc="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?cs=srgb&dl=pexels-files-1620760.jpg&fm=jpg "
              title="Kids Wear"
              head="Flat 60% Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_UY1000_.jpg"
              title="FootWear"
              head="40-70 Off"
              down="Shop Now"
            />
            <Catalogue2
              pmgsrc="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
              title="Footwear"
              head="Min 60% Off"
              down="Shop Now"
            />
          </div>
        </div>

        <Footer />
      </div>

      {/*       
      </Routes> 
       </BrowserRouter>        */}
    </>
  );
}

export default App;
