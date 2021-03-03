import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board.jsx";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(10, 2),
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }
    restartGame() {
        this.setState({
            board: new Minesweeper.Board(10, 2)
        })
    }
    updateGame(tile, isFlagging) {
        if(!isFlagging){
            tile.explore();
        }else{
            tile.toggleFlag();
        }
        this.setState({ board: this.state.board })
    }

    render() {
        let message;
        let gameOver = false;
        if (this.state.board.won()){
            message="You Won!"
            gameOver = true;
        }else if(this.state.board.lost()){
            message="You Lost :("
            gameOver = true;
        }
       
        return (
            <div>
                <h1 className="title">MineSweeper!</h1>
            <Board board={this.state.board} updateGame={this.updateGame}/>
                {gameOver ? <div className="modal">
                    <div className="modal-box">{message}
                    <button onClick={this.restartGame}>Restart Game</button>
                    </div>
                    </div> : <div></div>}
            </div>
        )
    }
}