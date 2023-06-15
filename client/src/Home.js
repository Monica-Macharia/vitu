import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'


function Home(){
    const [buttonColor, setButtonColor] = useState("black");
    const navigate = useNavigate();

    function handleClick(){
        setButtonColor('white');
        navigate('./Products')
       
    }
    function handleColor(){
      
        setButtonColor('white');
           
       
    }
    function handleColorOut(){
        setButtonColor('black');
    }
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
             
             <button className= "explore3" onMouseLeave={handleColorOut} onMouseEnter={handleColor} style={{ color: buttonColor }} onClick={handleClick}>Discover Now</button>
          
            <div className='slant4'></div>
            
        </div>
    )
}
export default Home;