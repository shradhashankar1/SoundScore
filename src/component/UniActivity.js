import React from 'react';
import Card from './card.js';
import { useNavigate } from 'react-router-dom';

function UniActivity({ topFourUW, cuBoulder, waState, updateActive }) {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div className="container">
          <h1>University Activity</h1>
          <p className="motto">University of Washington</p>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <h2>YOUR UNIVERSITY:</h2>
            <h3 className="white">Top FOUR at UW!</h3>
            <Card songs={topFourUW} showBanner={false} updateActive={updateActive} showScore={false} />
            <button onClick={() => navigate("/TopTen")} className="btn btn-success">
              TOP TEN!
            </button>
            <h2>EXPLORE:</h2>
            <h3 className="white">Cu Boulder:</h3>
            <Card songs={cuBoulder} showBanner={false} updateActive={updateActive} showScore={false} />
            <button onClick={() => navigate("/TopTen")} className="btn btn-success">
              TOP TEN!
            </button>
            <h3 className="white">Washington State:</h3>
            <Card songs={waState} showBanner={false} updateActive={updateActive} showScore={false} />
            <button onClick={() => navigate("/TopTen")} className="btn btn-success">
              TOP TEN!
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UniActivity;

