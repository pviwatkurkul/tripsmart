import {Link} from 'react-router-dom'
import{ReactComponent as DropSVG} from '../assets/ProfileDropdown.svg';
import{ReactComponent as StackSVG} from '../assets/Stack.svg';
import{ReactComponent as Circle} from '../assets/Circle.svg';
import "./navbar.css"
const Navbar = () =>{
    return(
        <>
        <div id='Logo'>tripsmart</div>
        <div className ='navContainer'>
            <div>Home</div>
            <div>Trips </div> 
            <div>Flights </div>
        </div>
        <button id='dropdown-btn'><DropSVG id='dropdown-Box'/></button>
        <StackSVG id='stack'/>
        <Circle id='profile-pic'/>
        <hr id='divider' />
        </>
    );

}

export default Navbar;