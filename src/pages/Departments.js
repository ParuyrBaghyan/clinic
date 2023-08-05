import React from 'react'
import { NavLink } from 'react-router-dom';
import { ListOfDep } from '../components/ListOfDep';
export default function Departments() {
  return (
    <div className='Dep'>
      <h2>Բաժանմունքներ</h2>
    <div className='Departments'>
        {ListOfDep.map(dep => {
             return <div className="dep-item">                 
                    <NavLink to={`/${dep}`}>{dep}</NavLink>
                </div>
        })}
    </div>
    </div>
  )
}
