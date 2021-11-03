import React from "react";
class Input extends React.Component {
    render() {
        return (
            <>
                <p>Text</p> <input onChange={this.props.text} />
                <p>Amout</p> <input onChange={this.props.Amount} />
                <div>
                    <button onClick={this.props.buttonClick}>Add transaction</button>
                    <button className="button" onClick={this.props.Histroy}>Delete Histroy</button>
                </div>
            </>
        )
    }
}
export default Input;