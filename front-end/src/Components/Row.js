const React = require('react');

function Row(props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.height}</td>
            <td>{props.base_experience}</td>
        </tr>
    )
}

export default Row;