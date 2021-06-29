import React from 'react';
import './Inputs.css';
import { Currencies } from './Currencies'

class Inputs extends React.Component {

    submitHandler(e){
        e.preventDefault()
        console.log("hi")
    }

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.submitHandler}>
                    <label className="start-label">Start Date: </label>
                    <input className="start" type="date"></input>
                    <label className="end-label" >End Date: </label>
                    <input className="end" type="date"></input>
                    <label className="currency-label" >Currency: </label>
                    <select className="currency" name="currency">
                        {Currencies.map((item, index) => {
                            return(
                                <option key={index} value={item.currency}>{item.currency} - {item.country}</option>
                            )
                        })}
                    </select>
                    <button className="inputbutton">Pull Data</button>
                </form>
            </div>
        )
    }
}

export default Inputs;