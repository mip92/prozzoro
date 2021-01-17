import React from 'react';
import s from './Result.module.css';

const Result = (props) => {
    return (<div className={s.gridContainer}>
            <div className={s.post1}><h3>{props.name}</h3></div>
            <div className={s.post3}><h4>{props.description}</h4></div>
            <div className={s.post4}><h5>{props.hashtegs}</h5></div>
            <div className={s.post2}><h4>{props.cost}</h4></div>
            <div className={s.post5}><h4>{props.time}</h4></div>

        </div>
    )
}

export default Result;