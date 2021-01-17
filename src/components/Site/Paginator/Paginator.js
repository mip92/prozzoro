import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';


const Paginator = (props) => {
    return (<ul className="pagination">
            <li className="disabled"><a href="#!"><i>Назад</i></a></li>
            <li className="active"><a href="#!">1</a></li>
            <li className="waves-effect"><a href="#!">2</a></li>
            <li className="waves-effect"><a href="#!">3</a></li>
            <li className="waves-effect"><a href="#!">4</a></li>
            <li className="waves-effect"><a href="#!">5</a></li>
            <li className="waves-effect"><a href="#!"><i>Вперед</i></a></li>
        </ul>
    )
}

export default Paginator;