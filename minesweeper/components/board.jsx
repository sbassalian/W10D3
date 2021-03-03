import React from "react";
import Tile from "./tile.jsx"

export default class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.board.map((row, idx) => {
                    return (
                        <div>
                        {row.map((col, jdx) => {
                            return (
                                <Tile update={this.props.update} key={[idx,jdx]}></Tile>
                            )
                        })}
                        </div>
                    )
                })}
            </div>
        )
    }
}
