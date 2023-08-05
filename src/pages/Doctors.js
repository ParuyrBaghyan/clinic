import React, { useState, useRef, useEffect } from "react";
import SweetPagination from "sweetpagination";
import { ListOfDoctors } from '../components/ListOfDoctors'
import { BiDownArrow } from 'react-icons/bi'
import { ListOfDep } from '../components/ListOfDep';

export default function Doctors() {
    const [dropBool, setDropBool] = useState(false)
    const [currentPageData, setCurrentPageData] = useState([]);
    const dropRef = useRef()
    const filterRef = useRef()
    const [show, setShow] = useState(true)
    const [filteredByDep, setFilteredByDep] = useState(currentPageData);
    const [chosedDep, setChosedDep] = useState('Ընտրել բաժանմունքը')
    const filterByDep = x => {
        let filtered = ListOfDoctors.filter(item => x === item.department)
        setFilteredByDep(filtered);
    }

    useEffect(() => {
        let handler = (e) => {
            if (!filterRef.current.contains(e.target)) {
                setDropBool(false)
                dropRef.current.style = '  transform: rotateX(90deg);'
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    },[])

    return (
        <div className='doctors-container'>
            <div className="doctors-filtration" >
                <span className="doctors-filter" ref={filterRef}>
                    <div className="chosed" onClick={() => {
                        setDropBool(!dropBool)
                        if (dropBool === false) {
                            dropRef.current.style = '  transform: rotateX(0deg);'
                        } else {
                            dropRef.current.style = '  transform: rotateX(90deg);'
                        }
                    }}
                    ><p
                        style={{
                            width: '95%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>{chosedDep}</p><BiDownArrow /></div>
                    <ul className="department-drop-down" ref={dropRef}>
                        {ListOfDep.map((dep, i) => {
                            return <li key={Math.random()} onClick={(e) => {
                                setChosedDep(dep)
                                filterByDep(ListOfDep[i])
                                setShow(false)
                            }}>{dep}</li>
                        })}
                    </ul>
                </span>
                <button className="show-all" onClick={() => {
                    setShow(true)
                    setChosedDep('Ընտրել բաժանմունքը')
                }}>Ցուցադրել բոլորին</button>
            </div>

            {
                currentPageData.map((doc) => (
                    <div key={Math.random()} className="doctor-box">
                        <img src={doc.photo} />
                        <div className="doctor-info-padding">
                            <div className="doctor-info">
                                <p>{doc.name}</p>
                                <p className="doc-dep">{doc.department}</p>
                            </div>
                            <p>{doc.number}</p>
                        </div>
                    </div>
                ))
            }

            <SweetPagination
                currentPageData={setCurrentPageData}
                dataPerPage={8}
                getData={show ? ListOfDoctors : filteredByDep}
                navigation={true}
            />
        </div >
    )
}
