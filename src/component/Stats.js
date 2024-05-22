import React from 'react';
import Card from './card.js';
import { useNavigate } from 'react-router-dom';

function Stats({ songs, active_song, updateActive }) {
  const navigate = useNavigate();
  const { title, artist, img, score } = active_song.length ? active_song[0] : active_song;
  
  const newSongs = songs;
  const total = newSongs.length;

  return (
    <div>
      <header>
        <div className="container">
          <h1>Soundscore</h1>
          <p className="motto">Statistics</p>
        </div>
      </header>
      <main>
        <div className="container">
          <section id="accoverview">
            <div className="container">
              <div className="row">
                <h2>Your Account at a Glance:</h2>
                <div className="d-flex col-sm-6 col-md-6 col-lg-6 col-xl-6" onClick={() => navigate("/SongScreen")}>
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm">
                          <h3 className="card-title">Your Last Viewed Song:</h3>
                          <h4 className="card-title">{title} - {artist}</h4>
                        </div>
                        <div className="col-sm-auto col-xl-12">
                          <img className="pb-3" src={img} alt="Album Cover" />
                        </div>
                        <div className="col-sm-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-sm-6 col-md-6 col-lg-6 col-xl-6" onClick={() => navigate("/Library")}>
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm">
                          <h3 className="card-title">Total Songs Scored</h3>
                          <div className="col-sm-auto">
                            <div className="card-text">
                              <ul>
                                <li className="large">{total}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='container'>
          <h2 className="header" onClick={() => navigate('/Library')}>Recently Scored</h2>
          <Card songs={songs} showBanner={false} updateActive={updateActive} showScore={true} />
        </div>

        <div className="container">
          <section>
            <form>
              <h2 className="text-small">Please Leave Feedback!</h2>
              <div>
                <label htmlFor="first_input">First Name:</label>
                <input
                  id="first_input"
                  name="fname"
                />
              </div>
              <div>
                <label htmlFor="last_input">Last Name:</label>
                <input
                  id="last_input"
                  name="lname"
                />
              </div>
              <div>
                <label htmlFor="email_input">Email: </label>
                <input
                  id="email_input"
                  placeholder="email@domain.com"
                  type="email"
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="comment_field">Comment: </label>
                <textarea className="form-control" id="comment_field" name="comment" type="comment"></textarea>
              </div>
              <a href="index.html" className="btn btn-success">Submit</a>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Stats;
