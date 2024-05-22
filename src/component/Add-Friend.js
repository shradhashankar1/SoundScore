import React from 'react';

function AddFriend() {
    return (
      <div>
        <header>
          <div className="container">
            <h1>SoundScore</h1>
            <p className="motto">Find Friends</p>
          </div>
        </header>
        <main>
          <section id="Friend">
            <div className="container">
              <div className="row">
                <div className="container mt-3">
                  <form className="form-inline">
                      <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                      ></input>
                  </form>
                </div>
                <h2>1 Result Found</h2>        
                <div className="d-flex col-md-6 col-lg-6 col-xl-3">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-auto col-xl-12">
                          <img className="pb-3" src="img/Stock profile image.jpeg" alt="Profile image"></img>
                        </div>
                        <div className="col-sm">
                          <h3 className="card-title">Username</h3>
                          <a className="btn btn-success" href="#">Add</a>
                          <p className="card-text">Online 3 Hours Ago</p>
                        </div>
                      </div>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">University of Oregon</li>
                    </ul>
                  </div>          
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>         
    );
  }

export default AddFriend;