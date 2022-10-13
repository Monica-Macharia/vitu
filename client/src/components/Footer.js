import React from 'react';
import './Footer.css'

const Footer = () =>{
    return (
        <div id='footer'>
            <div className="address-details">
                <h4>Visit Our Company Offices</h4>
                <ul>
                    <li>Location: 24th Street Ngong-Lane</li>
                    <li>Address: 02000-265 Nairobi</li>
                    <li>View Map</li>
                </ul>
            </div>

            <div className="contacts">
                <h4>Contact Our Offices</h4>
                <ul>
                    <li>Phone: +254700034567 or +254734768903</li>
                    <li>Email: vituvizuri.shop@gmail.com</li>
                    <li>Twitter: @vituvizuri</li>
                    <li>Linkedin: @vituvizuri254</li>
                </ul>
            </div>
            <div className="newslatter">
                <form>
                    <h4>Subscribe to our monthly newletter</h4>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='enter your email' />
                    <input type="submit" value="Get Newsletter" />
                </form>
            </div>
        </div>
    )
}
export default Footer