import React from 'react'
import HomeSlider from '../components/HomeSlider'
import { FaAmbulance } from 'react-icons/fa'
import { TbHomeHeart } from 'react-icons/tb'
import { GiArchiveRegister } from 'react-icons/gi'
import HomeDepartments from '../components/HomeDepartments'
export default function Home() {
    return (
        <div className='home-container'>

            <HomeSlider />

            <div className="ambulance">
                <div className="ambulance-box">
                    <div className="icon-box">
                        <FaAmbulance />
                    </div>
                    <div className="telephone">
                        <p>Շտապ օգնություն</p>
                        <p>010-77-46-38</p>
                    </div>
                </div>
                <div className="ambulance-box">
                    <div className="icon-box">
                        <TbHomeHeart />
                    </div>
                    <div className="telephone">
                        <p>Տնային կանչ</p>
                        <p>010-20-04-13</p>
                    </div>
                </div>
                <div className="ambulance-box">
                    <div className="icon-box">
                        <GiArchiveRegister />
                    </div>
                    <div className="telephone">
                        <p>Առցանց գրանցում</p>
                    </div>
                </div>
            </div>

            <div className="headmaster">
                <span className="headmaster-article">«Պրո-կլինիկ» բժշկական կենտրոնը հանրապետության խոշորագույն բժշկական հաստատությունն է, որտեղ բնակչությանը ցուցաբերվում է համաշխարհային չափանիշներին համապատասխան բազմապրոֆիլ և բարձր որակավորված բժշկական օգնություն։ Մասնագետների գիտական, կլինիկական և կրթական գործունեության, առաջատար բժշկական հաստատությունների հետ համագործակցության, («Սիմենս», «Դրեգեր», «Շտորց», «Ռոշ», «Օլիմպուս») առաջատար ընկերությունների կողմից ժամանակակից տեխնոլոգիաների մշտական ներդրման շնորհիվ «Աստղիկ» բժշկական կենտրոնը լայն ճանաչում է ձեռք բերել ինչպես մեր երկրի տարածքում, այնպես էլ նրա սահմաններից դուրս։</span>
                <button className='read-more'>Կարդալ ավելին</button>
                <img src='./img/headmaster.webp' className="headmaster-img"></img>
            </div>

            <HomeDepartments />

            <div className="about-clinic-container">
            <div className="about-clinic">
                    <h2>Բժշկական կենտրոնի մասին</h2>
                    <span>«Պրո-կլինիկ» բժշկական կենտրոնը, հանդիսանալով «Մալաթիա» հիվանդանոցի իրավահաջորդը, չնայած իր կեսդարյա պատկառելի տարիքին՝ այսօր արդեն ներկայանում է նորովի և փորձում քայլել ժամանակին համընթաց։ Ներկայում «Մալաթիա» հիվանդանոցը ներկայանում է որպես գերժամանակակից, բազմապրոֆիլ, եվրոպական չափանիշներին համապատասխանող բժշկական կենտրոն՝ արդեն նոր՝ «Աստղիկ» անվանումով։ 2010թ .-ին «Նատալի ֆարմ» ՍՊԸ-ն ձեռքբերեց «Մալաթիա» հիվանդանոցը բավական անմխիթար վիճակում, հիվանդանոց, որտեղ աշխատում էր շուրջ 400 հոգի։ Կենտրոնի ղեկավարության առջև դրվեց գերխնդիր՝ ստեղծել գերժամանակակից, բազմապրոֆիլ բժշկական կենտրոն՝ միաժամանակ չընդհատելով կենտրոնի աշխատանքներն ու պահպանելով արդեն եղած աշխատատեղերը։</span>
                    <button className='read-more-clinic'>Տեսնել ավելին</button>
                </div>
                <div className="clinic-img">
                    <img src="img/hospital1.jpg" alt="" />
                    <img src="img/hospital2.jpg" alt="" />
                </div>

            </div>

        </div>
    )
}
