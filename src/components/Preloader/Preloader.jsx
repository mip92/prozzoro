import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import preloader from "../../asets/svg/Double Ring-2.2s-200px.svg";

const Preloader = (props) => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
        /*<div>
            <img src={preloader}/>
        </div>*/
    )
}

export default Preloader;