import React from "react";
class Histroy extends React.Component {
    render() {
        return (
            <>
                <h2>Histroy</h2>
                <div >
                    <div className="items">
                        <div className="expense">
                            <h4>Items</h4>
                        </div>
                        <div className="expense">
                            <h4>Amount</h4>
                        </div>
                    </div>
                    <div className="items">
                        <div className="expense">
                            {this.props.textList.map((e) => (<p>{e}</p>))}
                        </div>
                        <div className="expense">
                            {
                            this.props.Amountlist.map((e,i) =>{
                            return (
                            <div className="del" key={i}>
                                <p>{e}</p>
                            </div>
                            )
                            })
                            }
                        </div>
                    </div>
                </div>
                <h2>Add New Transaction</h2>
                
            </>
        )
    }
}
export default Histroy;