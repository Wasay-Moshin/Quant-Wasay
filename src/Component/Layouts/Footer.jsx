import React from "react";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <div className="footer">
      <div class="container text-center">
        <hr />
        <div class="row">
          <div class="col-md-6 text-start">
            <img src="Assests/Quant-network.jpg" alt="" width={"150px"}></img>
            <p className="last-p">
              © 2022 Quant Network Limited. All rights reserved.
            </p>
          </div>
          <div class="col-md-6">
            <div className="mt-3 text-end">
              <b>Privacy policy</b> &nbsp; &nbsp;&nbsp;
              <b>Terms of use</b>&nbsp; &nbsp;&nbsp;&nbsp;
              <AiFillTwitterCircle size='20px'/>&nbsp;&nbsp;
              <AiFillLinkedin size='20px'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
