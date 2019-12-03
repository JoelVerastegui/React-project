import React, { Fragment } from 'react';

function Contact(){
    return(
        <Fragment>
            <div className="d-flex flex-column">
                <h2 className="h2">Haga las consultas que desee</h2>
                <span>Nuestros consultores lo atenderan en unos momentos...</span>
                <input className="form-control" placeholder="Ingrese su consulta" />
            </div>
        </Fragment>
    )
}

export default Contact;