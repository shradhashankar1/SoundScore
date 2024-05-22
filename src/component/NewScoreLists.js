import React from 'react'; 
import TableRowMini from './TableRowMini';


function NewScoreLists({ scorelist, updateScorelist }) {

  return (
    <div>
      <header>
          <div className="container">
            <h1>Soundscore</h1>
            <p className="motto">Welcome Back!</p>
        </div>
      </header>
      <section>
        <div className='container'>
          <h2>Which Scorelist Would You Like to Add to?</h2>
          <table>
            <tbody className="addTo">
              {scorelist.map((scorelist, index) =>(
                <TableRowMini key={index} scorelist={scorelist} updateScorelist={updateScorelist} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>

  );
}

export default NewScoreLists;