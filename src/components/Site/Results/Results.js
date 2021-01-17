import React from 'react';
import s from './Results.module.css';
import Result from "../Result/Result";

const Results = (props) => {
    return (<div>

            <div className={s.res}>
                {props.searchResults.map((u) => <div><Result key={u.name}
                                                        name={u.name}
                                                        description={u.description}
                                                        hashtegs={u.hashtegs}
                                                        cost={u.cost}
                                                        time={u.time}
                />
                <div className={s.marg}></div></div>)}
            </div>
        </div>
    )
}

export default Results;