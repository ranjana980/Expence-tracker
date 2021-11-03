import React from 'react';
class Balance extends React.Component {
    render() {
        return (
            <>
                <p>Your Balance</p>
                <h2 key={this.props.main}>${this.props.main}</h2>
                <tr>
                    <td>Income</td>
                    <td>Expence</td>
                </tr>
                <tr>
                    <td className="td" key={this.props.total}>{this.props.total}</td>
                    {this.props.expense1 < 0 ? (<td key={this.props.expense1} className="td_expense">{this.props.expense1}</td>) : (<td key={this.props.expense} className="p1">0</td>)}
                </tr>
            </>
        )
    }
}
export default Balance;