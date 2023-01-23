import React from "react";
import "./ContactForm.css";

export const ContactForm = () => {
    return (
        <>
     
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="form">
                <form>
                    <label htmlFor="email">
                   Email:
                        <input type="text"  name="email"/>
                    </label>
                    <label htmlFor="subject">
                        Subject:
                        <input type="text"  name="subject"/>
                    </label>
                    <label htmlFor="message">
                        Message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>

        </div>
                <div className="footer">
                    <p className="p">© 2021 - All rights reserved</p>
                    <p>Adrian Diaz Manzanares</p>

                </div>
        </>
    );
};