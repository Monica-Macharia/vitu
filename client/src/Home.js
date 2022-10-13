import React from 'react';


function Home(){
    return(
        <div className= "phrase">
            <div className= "intro">
        
           <h2 className= "catch">VituVizuri is a one-stop-shop <br/>for creative pieces.</h2>
            <p className= "peek">Displaying a collection of branded mugs, hoodies<br/> and T-shirts from 
            different artists across the country</p>
            <button className= "explore">DISCOVER NOW</button>
             </div>
            
            <img className= "profile" src={window.location.origin + '/cover.jpg' }alt="no" />
        </div>
    )
}
export default Home;