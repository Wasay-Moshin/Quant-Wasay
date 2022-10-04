import React from "react";

function Developers() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 img1">
            <div className="text-start">
              <p className="unlocking">
                Developers <br />
                unleashed
              </p>
              <div data-aos="fade-up" data-aos-duration="5000">
                <p>
                  Develop on Overledger without specialist <br />
                  blockchain knowledge.
                </p>
                <button type="button" class="btn btn-outline-danger">
                Find Out More
              </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 img1">
            <img className="img-fluid" src="Assests/laptop.svg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers;
