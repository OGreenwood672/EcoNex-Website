import { useState } from "react"

import "./contact.scss"

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit() {

    }


    return (
        <div id="contact">
            <div id="contact-left">
                <h2>Yoooo wagwan</h2>
            </div>
            <div id="contact-right">
                <p className="labelForm">Name:</p>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <p className="labelForm">Email:</p>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <div className="submitButton" onClick={handleSubmit}><p>SUBMIT</p></div>
            </div>
        </div>
    )

}