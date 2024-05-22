import React from 'react';
import Table from './Table.js';



const EXAMPLE_SONGS = [
  { title: 'Dashstar', artist: "Knock2", img: "dashstar.jpeg", score: "10/10"},
  { title: 'Down Low', artist: 'Dombresky', img: 'down-low.jpeg', score: '6/10'},
  { title: 'Make Me Feel', artist: 'John Summit', img: 'make-me-feel.jpeg', score: '7/10'},
  { title: 'Temptation', artist: 'Sidepiece', img: 'temptation.jpeg', score: '8/10'},
  { title: 'Forget It', artist: 'Matroda', img: 'forget-it.jpeg', score: '9/10'},
  { title: 'Pepas', artist: 'Farruko', img: 'pepas.jpeg', score: '8/10'},
  { title: 'San Francisco', artist: 'Dom Dolla', img: 'san-francisco.jpeg', score: '8/10'},
  { title: 'Losing It', artist: 'Fisher', img: 'losing-it.jpeg', score: '9.5/10'}

];

function UW({updateActive}) {


    return (

      
      <body>

        <header>
          <div className="container">
            <h1>University of Washington</h1>
            <p className="motto">SEATTLE'S TOP HITS!</p>
          </div>
        </header>

        <main>
           
          <div className="container">
            <div className="row">
                <Table songs={EXAMPLE_SONGS} className="" updateActive={updateActive}/>
            </div>
          </div> 

        
        </main>
    
      </body>
    )
}

export default UW;