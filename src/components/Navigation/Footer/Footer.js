import React from 'react';
import "./Footer.css";
import FB from "../../../assets/img/fb.png";
import VK from "../../../assets/img/vk.png";
import INST from "../../../assets/img/inst.png";
import TWEET from "../../../assets/img/tweet.png";



const Footer = () => {
    return (
        <footer className="Footer">
           
            <div className="Navi">
                <h4 className="Navigation">WOO.COM</h4>
                <hr className="Line"/>
               <a href="/" className="Links">Главная</a>
               <hr className="Line"/>
               <a href="/news" className="Links">Новости</a>
               <hr className="Line"/>
               <a href="/add" className="Links">Добавить</a>
               <hr className="Line"/>
               <a href="/contacts" className="Links">Контакты</a>
           </div>
        
            <div className="Socials">
           <h4 className="SocialNav">Следи за нами:</h4>
               <a href="https://www.facebook.com" className="Social"><img className="Soc" src={FB} alt="2"/></a>
               <a href="https://vk.com" className="Social"><img className="Soc" src={VK} alt="2"/></a>
               <a href="https://www.Instagram.com" className="Social"><img className="Soc" src={INST} alt="2"/></a>
               <a href="https://twitter.com" className="Social"><img className="Soc" src={TWEET} alt="2"/></a>
           </div>

            
        </footer>
    );
};

export default Footer;