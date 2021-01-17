import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const Preloader = (props) => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )
}

export default Preloader;