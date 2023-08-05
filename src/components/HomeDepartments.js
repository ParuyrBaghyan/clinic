import React from 'react'
import { NavLink } from 'react-router-dom';
import { ListOfDep } from './ListOfDep';

export default function Departments() {
    return (
        <div className='departments-container'>
            <h2>Բաժանմունքներ</h2>
            <div className="department-items">
                {ListOfDep.map((dep, i) => {
                    if (i < 12) {
                        return <div className="dep-item" key={Math.random()}>
                            <NavLink to={`/${dep}`}>{dep}</NavLink>
                        </div>
                    }
                })}
                <NavLink className='see-more' to='/'>Տեսնել ավելին</NavLink>
            </div>
        </div>
    )
}
