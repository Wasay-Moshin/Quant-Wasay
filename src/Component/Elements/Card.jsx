import React from "react";

function Card() {
  return (
    <div className="cd">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6">
          <div className="card">
            <div className="card-body">
              <p className="card-title">News</p>
              <p>2 September 2022</p>
              <p className="card-text">
                Martin Hargreaves on the benefits of CBDCs for consumers
              </p>
              <span class="badge rounded-pill text-bg-danger">CBDC</span> &nbsp;
              <span class="badge rounded-pill text-bg-danger">CITYAM</span>
              <br />
              <span class="badge rounded-pill text-bg-danger">Enterprices</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card">
            <div className="card-body">
              <p className="card-title">News</p>
              <p>2 September 2022</p>
              <p className="card-text">Gilbert Verdian explains The Merge</p>
              <br />
              <span class="badge rounded-pill text-bg-danger">
                Blockchain
              </span>{" "}
              &nbsp;
              <span class="badge rounded-pill text-bg-danger">Developers</span>
              <br />
              <span class="badge rounded-pill text-bg-danger">Enterprices</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Events</p>
              <p>2 September 2022</p>
              <p className="card-text">
                The multi-chain future: sidechains, layer 2s and The Merge
              </p>
              <span class="badge rounded-pill text-bg-danger">
                Architecture
              </span>{" "}
              &nbsp;
              <span class="badge rounded-pill text-bg-danger">Association</span>
              <br />
              <span class="badge rounded-pill text-bg-danger">Developers</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card">
            <div className="card-body">
              <p className="card-title">News</p>
              <p>2 September 2022</p>
              <p className="card-text">
                Overledger 2.2.14 is an engineering release
              </p>
              <br />
              <span class="badge rounded-pill text-bg-danger">
                Developers
              </span>{" "}
              &nbsp;
              <span class="badge rounded-pill text-bg-danger">OverLedger</span>
              <br />
              <span class="badge rounded-pill text-bg-danger">
                Product Release
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
