import React from 'react'
import { TbTemperature } from 'react-icons/tb'
import { BsFillHospitalFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md'
import { MdMail } from 'react-icons/md'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'



export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-top">
                <div className="logo-foot">
                    <div className="logo-box">
                        <Link to='/' className='logo'><BsFillHospitalFill /><span>Pro Cl<TbTemperature className='temp' />n<TbTemperature className='temp' />c</span></Link>
                    </div>
                    <span>Պրո-կլինիկ բժշկական կենտրոնը Հայաստանի Հանրապետության ժամանակակից, բարձր տեխնոլոգիաներով հագեցած, հարմարավետ, եվրոպական չափորոշիչներին համապատասխանող բժշկական կենտրոն է,որտեղ բնակչությանը ցուցաբերվում է եվրոպական չափորոշիչներին համապատասխան, բարձրակարգ, բազմապրոֆիլ բժշկական օգնություն:</span>
                </div>
                <div className="references">
                    <h3>Հղումներ</h3>
                    <NavLink data = 'main' to='/'>Գլխավոր</NavLink>
                <NavLink data ='aboutAs' to='/Մեր մասին'>Մեր մասին</NavLink>
                <NavLink data ='departments' to='/Բաժանմունքներ'>Բաժանմունքներ</NavLink>
                <NavLink data ='doctors' to='/Բժիշկներ'>Բժիշկներ</NavLink>
                <NavLink data ='priceList' to='/Գնացանկ'>Գնացանկ</NavLink>
                <NavLink data ='conntacts' to='/Կապ մեզ հետ'>Կապ մեզ հետ</NavLink>
                </div>
                <div className="contact">
                    <h3>Կապ մեզ հետ</h3>
                    <div className="phone">
                        <BsFillTelephoneFill />
                        <span>+374 44 20 04 13</span>
                    </div>
                    <div className="phone">
                        <MdLocationOn />
                        <span>Մալատիա-Սեբաստիա Միքաելյան 3</span>
                    </div>
                    <div className="phone">
                        <MdMail />
                        <span>pro-clinic@gmail.com</span>
                    </div>

                    <div className="social-media">
                        <div className="app"><BiLogoFacebook /></div>
                        <div className="app"><AiFillInstagram /></div>
                        <div className="app"><BsTwitter /></div>
                        <div className="app"><FaLinkedinIn /></div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <img src="img/iso_logo.webp" alt="" />
                <p>© 2023 Բոլոր իրավունքները պաշտպանված են</p>
                <p>Կայքը պատրաստված է Pro-code ընկերության կողմից</p>
            </div>
        </div>
    )
}
