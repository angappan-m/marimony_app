import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <footer class="py-5 mt-5 footer-backgound-color">
      <div class="container">
        <div className="row">
          <div className="col  text-center">
            <p class="m-0 text-center text-white">Copyright &copy; Chettiyars Community 2021 | All rights received.</p>
          </div>
          <div className="col text-center">
            <a href="#" className="p-t">Privacy Policy</a><br/>
            <a href="#" className="p-t">Ters and Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  )
};
export default Footer;