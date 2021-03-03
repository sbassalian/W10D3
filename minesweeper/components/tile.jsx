import React from "react"

export default class Tile extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let isFlagging = false;
        if(e.altKey){
            isFlagging = true;
        }
        this.props.updateGame(this.props.tile, isFlagging)
    }
    render() {
        let response = ""
        if (this.props.tile.flagged) {
            response = "🚩";
        }
        else if (this.props.tile.bombed && this.props.tile.explored) {
            response = "💣";
        }
        else if (this.props.tile.explored) {
            response = this.props.tile.adjacentBombCount();
        }
        return(
            <div className="tile" onClick={this.handleClick}>
                <p>{response}</p>
            </div>
        )
    }
}