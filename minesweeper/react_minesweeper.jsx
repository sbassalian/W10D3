import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx';
import Tile from './components/tile.jsx';


function Root() {
    return(
        <div>
            <Game/>
        </div>
    )
}
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('main'))
})