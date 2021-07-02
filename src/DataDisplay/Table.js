import './Table.css'

function Table(props){
    //Accepts data from Form/Input.js as props and displays BitCoin History Data in table form
    //if statements make it so table appends when there is bpi data
    if (props.data.bpi !== undefined){
        return <div>
                    <h2 className="table-header" > Showing data from {props.start} to {props.end} </h2>
                    <table className="datable">
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Value</th>
                            </tr>
                            {Object.entries(props.data.bpi).map(([key, value]) => {
                                return(
                                <tr>
                                    <td>{key}</td>
                                    <td>$ {value}</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
    } else {
        return null
    }
}

export default Table;