import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import image from 'src/images/a84a73d1-56c0-4214-8252-344691835400.jpg';
import kovalan_kannagi from '../images/kovalan_kannagi.jpeg'
import muthaiah from '../images/muthaiah.jpeg';
import avvaiyar from '../images/avvaiyar.jpeg'
import '../assets/css/home.css'

const Home = () => {
  return (
    <div class="container text-center my-4">
    <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
        <div class="carousel-inner w-100" role="listbox">

            <div class="carousel-item row no-gutters active">
                <div class="col-12 test float-left"><img class="image img-fluid"
                        src={avvaiyar} />
                        <div className="text">Avvaiyar</div></div>
            </div>

            <div class="carousel-item row no-gutters">
                <div class="col-12 test float-left"><img class="image img-fluid" src={muthaiah} />
                <div className="text">M.A Muthaiah Chettiyar</div>
                </div>
            </div>
            
        </div>
        <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    
</div>
   
  )
};
export default Home;
