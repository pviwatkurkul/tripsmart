import {Link} from 'react-router-dom';
import {useState,createRef} from 'react';
import{ReactComponent as DropSVG} from '../assets/ProfileDropdown.svg';
import{ReactComponent as StackSVG} from '../assets/Stack.svg';
import{ReactComponent as Circle} from '../assets/Circle.svg';
import DropDownModal from '../modals/dropDownModal';
import "./navbar.css"
const Navbar = () =>{
    const[isOpen, setIsOpen] = useState(false);
    const toggleModal = () =>{
        setIsOpen(state => !state);
    }
    return(
        <>
        <div id='Logo'>tripsmart</div>
        <div className ='navContainer'>
            <div>Home</div>
            <div>Trips </div> 
            <div>Flights </div>
        </div>
        <button onClick={toggleModal} id={isOpen ? 'dropdown-btn-active' : 'dropdown-btn'}>
                <DropSVG id='dropdown-Box'/>
                <StackSVG id='stack'/>
                <Circle id='profile-pic'/>
        </button>
        <hr id='divider' />
        <DropDownModal open={isOpen}>
            <div id='dropdown-box'>
                <div className='dropDownLinks'>
                    <div>
                    Edit Profile
                    </div>
                    <div>
                    Friends
                    </div>
                    <div>
                    Log Out
                    </div>
                </div>
            </div>
        </DropDownModal>
        </>
    );

}

export default Navbar;