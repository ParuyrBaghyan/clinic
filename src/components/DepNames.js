import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import { ListOfDep } from '../components/ListOfDep';

export default function DepNames() {
  return (
    <ul className="DepNames">
        {ListOfDep.map(dep => {
           return <NavLink key={Math.random()} to={`/${dep}`}>{dep}</NavLink>
        })}
    </ul>
  )
}
