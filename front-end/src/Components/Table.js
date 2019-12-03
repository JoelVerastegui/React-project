import React, { Fragment } from 'react';
import Row from './Row';
const axios = require('axios');
/* const Row = require('./Row'); */

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokes: 0,
            rows: []
        }
    }

    async componentDidMount(){
        let res = await axios.get('http://localhost:4000/');
        let results = res.data["results"];

        this.setState({
            pokes: results.length
        })
        
        let rows = [];

        results.map(async (e) => {
            let res2 = await axios.get(e["url"]);

            let data = {
                id: res2.data["id"] + "",
                name: res2.data["name"] + "",
                height: res2.data["height"] + "",
                base_experience: res2.data["base_experience"] + ""
            };

            rows.push(data);

            this.setState({
                rows
            },() => {
                this.forceUpdate();
            })
        })
    }

    componentWillUnmount(){
        console.log('El componente TABLE se ha desmontado');
    }

    render() {
        return (
            <Fragment>
                {this.state.pokes == this.state.rows.length ? (
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
                        {this.state.pokes == this.state.rows.length && this.state.rows.sort((a,b) => {return a.id - b.id}).map((e) => { return (<Row key={e.id} {...e} />) })  }
                    </tbody>
                </table>) : (<img src="https://pixelpapa.com/wp-content/uploads/2018/11/11.gif" />)}
                
            </Fragment>
        )
    }
}

export default Table;