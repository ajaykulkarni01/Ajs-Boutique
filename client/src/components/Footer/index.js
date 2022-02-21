import React from 'react';


const Footer = () => <footer className="page-footer font-small blue pt-4 ">
    <div className="container-fluid text-center text-md-left my-20">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Our promise</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Special offer</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Black Friday</a></li>
                    <li><a href="#!">New Arrivals</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Follow us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright: 
        <a href="/"> ajs-boutique.com.au</a>
    </div>

</footer>

export default Footer