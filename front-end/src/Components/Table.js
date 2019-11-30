import React, { Fragment } from 'react';
import Row from './Row';
const axios = require('axios');
/* const Row = require('./Row'); */

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: []
        }

        /* Bind functions */
        this.getPokemons = this.getPokemons.bind(this);

        /* Init functions */
        this.getPokemons();
    }

    getPokemons() {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((res) => {
                let results = res.data["results"];
                let rows = [];

                results.map(async (e) => {
                    await axios.get(e["url"])
                        .then((res2) => {
                            let data = {
                                order: res2.data["order"] + "",
                                name: res2.data["name"] + "",
                                height: res2.data["height"] + "",
                                base_experience: res2.data["base_experience"] + ""
                            };

                            rows.push(data);
                        })
                })

                this.setState((state) => {
                    state.rows.push(...rows)
                })
            })
    }

    render() {
        let ez = [<td>RUBIUH NO SEAS MALO</td>, <td>RUBIUH NO SEAS MALO</td>, <td>RUBIUH NO SEAS MALO</td>, "ANOS"]
        /* let ez = []; */

        return (
            <Fragment>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Height</th>
                            <th scope="col">BaseExperience</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>{this.state.rows.length}</td></tr>
                        {this.state.rows.length > 0 && this.state.rows.map((e, i) => { return <Row {...e} /> })}
                        {/* ez.length ? ez.map((e,i) => {return <tr key={i}>{e}</tr>}) : (<img src="https://pixelpapa.com/wp-content/uploads/2018/11/11.gif" />)*/}
                    </tbody>
                </table>

                {/* <h1>{this.state.results[0] && this.state.order ? this.state.order + ": " + this.state.results[0]["name"] : (<img src="https://pixelpapa.com/wp-content/uploads/2018/11/11.gif" />)}</h1> */}
            </Fragment>
        )
    }
}

export default Table;