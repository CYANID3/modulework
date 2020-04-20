import React from 'react'
import "./ContactList.css";



const ContactList  = () => {
   
        return (
            <div className="container">
                <h1 className="ourContacts">Наши контакты:</h1>
                <span className="row d-flex w-50 mt-5 mx-auto">
                <div className="contactSocials text-right">
                    <div className="SLinks"> <h3>INSTAGRAM:</h3></div>
                    <div className="SLinks"> <h3>VK:</h3></div>
                    <div className="SLinks"> <h3>TWITTER:</h3></div>
                    <div className="SLinks"> <h3>FACEBOOK:</h3></div>
                    <div className="SLinks"> <h3>GMAIL:</h3></div>
                    <div className="SLinks"> <h3>PHONE:</h3></div>
                </div>     
                <div className="contactLinks ml-4 text-left">
                    <div className="SLinks"> <h3>@testinstagramname</h3></div>
                    <div className="SLinks"> <h3>Test VKontakte Name</h3></div>
                    <div className="SLinks"> <h3>@TestTwitterName</h3></div>
                    <div className="SLinks"> <h3>Test Facebook Name</h3></div>
                    <div className="SLinks"> <h3>test.name@gmail.com</h3></div>
                    <div className="SLinks"> <h3>+996555555555</h3></div>
                </div>
                </span>   
            </div>
        )
    }


export default ContactList
