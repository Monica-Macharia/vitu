import React from 'react';

function About(){
    return (
        <div>
            
            <p className= "us">
            <h2>About us</h2>
            Vitu Vizuri is a rapidly growing one-stop shop for creative designs. It showcases designs from stylists, artists, photographers, and accessory designers from East Africa and the rest of Africa. 
            This is where they can show off their skills, promote their ideas, and network with local and international clients. All of this is intended to demonstrate to the region that fashion is a money-making, creative business while also promoting the “Made in Africa” notion. 
        </p>
        <div  class="grid text-center" >
            {/* <h2>Our Products</h2> */}
            <div className= "image1">
                <img className= "shirt1" src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600" alt= "shirts"/>
                <h2>Branded Tshirts</h2>
            </div>
            <div  className= "image2">
                <img className= "mug1" src="https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&w=600" alt= "shirts"/>
                <h2>Branded Mugs</h2>
            </div>
            <div  className= "image3" >
                <img className= "hoodie1" src="https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&w=600" alt= "shirts"/>
                <h2>Branded Hoodies</h2>
            </div>
        </div>
        </div>
    )
}
export default About;
