import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { BsFillHospitalFill } from 'react-icons/bs'
import { TbTemperature } from 'react-icons/tb'
import { TbSearch } from 'react-icons/tb'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiDownArrow } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'


export default function Header() {

    const languageDropeRef = useRef()
    const [languageBool, setLanguageBool] = useState(false)
    const [language, setLanguage] = useState('Հայերեն')
    const [flag, setFlag] = useState('/img/armenia.png')
    const [burgerDrop, setBurgerDrop] = useState(false)
    const burgerDropRef = useRef()

    return (
        <div>
            <div className="burger-header">
                <div className="logo-box">
                    <Link to='/' className='logo'><BsFillHospitalFill /><span>Pro Cl<TbTemperature className='temp' />n<TbTemperature className='temp' />c</span></Link>
                </div>
                <GiHamburgerMenu onClick={() => {
                    if (burgerDrop === false) {
                        burgerDropRef.current.style = '  transform: rotateX(0deg);'
                        setBurgerDrop(true)
                    } else {
                        burgerDropRef.current.style = '  transform: rotateX(90deg);'
                        setBurgerDrop(false)
                    }
                }} />
            </div>
            <div className="burger-drop" ref={burgerDropRef}>
                <NavLink data = 'main' to='/'>Գլխավոր</NavLink>
                <NavLink data ='aboutAs' to='/Մեր մասին'>Մեր մասին</NavLink>
                <NavLink data ='departments' to='/Բաժանմունքներ'>Բաժանմունքներ</NavLink>
                <NavLink data ='doctors' to='/Բժիշկներ'>Բժիշկներ</NavLink>
                <NavLink data ='priceList' to='/Գնացանկ'>Գնացանկ</NavLink>
                <NavLink data ='conntacts' to='/Կապ մեզ հետ'>Կապ մեզ հետ</NavLink>
                <Link to='/Մուտք' className='login-word'>Մուտք</Link>
                <div className="phone-box">
                    <BsFillTelephoneFill />
                    <a href="tel:+374 44 20 04 13">+374 44 20 04 13</a>
                </div>
                <div className="burger-languages">
                    <div className="language">
                        <img src="/img/armenia.png" alt="" />
                        <p id='hay'>Հայ</p>
                    </div>
                    <div className="language">
                        <img src="/img/russia.png" alt="" />
                        <p id='rus'>Рус</p>
                    </div>
                    <div className="language">
                        <img src="/img/america.png" alt="" />
                        <p id='eng'>Eng</p>
                    </div>
                </div>
            </div>




            <header>

                <div className="main-header">
                    <div className="logo-box">
                        <Link to='/' className='logo'><BsFillHospitalFill /><span>Pro Cl<TbTemperature className='temp' />n<TbTemperature className='temp' />c</span></Link>
                    </div>

                    <div className="main-header-right">
                        <div className="search-box">
                            <input type="text" placeholder='Որոնում' />
                            <button><TbSearch /></button>
                        </div>
                        <div className="phone-box">
                            <BsFillTelephoneFill />
                            <a href="tel:+374 44 20 04 13">+374 44 20 04 13</a>
                        </div>
                        <Link to='/Մուտք' className='login-word'>Մուտք</Link>
                        <div className="language-box" onClick={() => {
                            if (languageBool === false) {
                                languageDropeRef.current.style = '  transform: rotateX(0deg);'
                                setLanguageBool(true)
                            } else {
                                languageDropeRef.current.style = '  transform: rotateX(90deg);'
                                setLanguageBool(false)
                            }
                        }}>
                            <img src={flag} alt="" />
                            <span>{language}<BiDownArrow /></span>
                        </div>
                    </div>
                </div>
                <ul className="language-drop" ref={languageDropeRef}>
                    <li onClick={() => {
                        setLanguage('English')
                        setFlag('/img/america.png')
                        languageDropeRef.current.style = '  transform: rotateX(90deg);'
                    }}>English</li>
                    <li onClick={() => {
                        setLanguage('Русский')
                        setFlag('/img/russia.png')
                        languageDropeRef.current.style = '  transform: rotateX(90deg);'
                    }}>Русский</li>
                    <li onClick={() => {
                        setLanguage('Հայերեն')
                        setFlag('/img/armenia.png')
                        languageDropeRef.current.style = '  transform: rotateX(90deg);'
                    }}>Հայերեն</li>
                </ul>

                <nav>
                    <NavLink to='/'>Գլխավոր</NavLink>
                    <NavLink to='/Մեր մասին'>Մեր մասին</NavLink>
                    <NavLink to='/Բաժանմունքներ'>Բաժանմունքներ</NavLink>
                    <NavLink to='/Բժիշկներ'>Բժիշկներ</NavLink>
                    <NavLink to='/Գնացանկ'>Գնացանկ</NavLink>
                    <NavLink to='/Կապ մեզ հետ'>Կապ մեզ հետ</NavLink>
                </nav>
            </header>
        </div>
    )
}
