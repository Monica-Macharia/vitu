import React from 'react';


function Home(){

    return(
        <div className= "phrase">
            
            
            <img className= "profile" src={window.location.origin + '/rect.png' }alt="no" />
            <div className='store'>
                <h2>VituVizuri</h2>
            </div>
            <div className='slant'>
                
            </div>
             <h3 className="slanth2">All Your Styles Are Here</h3>
            <div className='slant2'>
           
            </div> 
            <h3 className="slanth3">Explore An Extension of Your Closet</h3>
          
            <div className='slant3'>
             </div>
             
             <button className= "explore3">Discover Now</button>
          
            <div className='slant4'></div>
            
        </div>
    )
}
export default Home;