import React from "react";
import Tile from "./tile.jsx"

export default class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.board);
        return(
            <div className="board">
                {this.props.board.grid.map((row, idx) => {
                    return (
                        <div className="row" key={idx}>
                        {row.map((tile, jdx) => {
                            return (
                                <Tile tile = {tile} updateGame={this.props.updateGame} key={jdx}></Tile>
                            )
                        })}
                        </div>
                    )
                })}
            </div>
        )
    }
}
