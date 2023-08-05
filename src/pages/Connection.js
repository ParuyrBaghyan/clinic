import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

export default function Connection() {
    return (
        <div className='conection-container'>
            <h2>Կապ մեզ հետ</h2>

            <div className="main-contacts">
                <div className="main-contacts-contact">
                    <div className="cont-icon"><MdLocationOn /></div>
                    <p>Հասցե</p>
                    <p>Մալատիա-Սեբաստիա Միքաելյան 3</p>
                </div>
                <div className="main-contacts-contact">
                    <div className="cont-icon"><BsFillTelephoneFill /></div>
                    <p>Հեռախոսահամար</p>
                    <p>+374 44 20 04 13</p>
                </div>
                <div className="main-contacts-contact">
                    <div className="cont-icon"><MdMail /></div>
                    <p>Էլ․ հասցե</p>
                    <p>pro-clinic@gmail.com</p>
                </div>
            </div>

            <div className="message-map">
            <div className="map-container">
                <iframe className='map-box' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d403.74113067232526!2d44.45542239671476!3d40.172407546496366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1688235321373!5m2!1sru!2sam" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="message-container">
                    <h2>Ուղարկել հաղորդագրություն</h2>
                    <input type="text" placeholder='Անուն'/>
                    <input type="text" placeholder='Ազգանուն'/>
                    <input type="text" placeholder='Հեռախոսահամար'/>
                    <input type="text" placeholder='էլ․ հասցե'/>
                    <input type="text" placeholder='Թեմա'/>
                    <textarea name="message" placeholder='Հաղորդագրություն' cols="30" rows="5"></textarea>
                    <button>ՈՒղարկել</button>
                </div>


            </div>
        </div>
    )
}
