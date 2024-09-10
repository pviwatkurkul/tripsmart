import './addTrip.css';
import placeholder from '../../assets/placeholder.jpg';
import {useState} from 'react';
import{ReactComponent as AddTripSVG} from '../../assets/addTrip.svg';
import TripModal from '../../modals/tripModal.jsx'
import{ReactComponent as Cancel} from '../../assets/cancel.svg'


const AddTrip = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggleModal = () =>{
        setIsOpen(state => !state);
    }
    return (
    <>  
        <div className='trip-container'>
            <div id='img-box'>
                <button id='btn-add-trip' onClick={toggleModal}>
                    <img
                    className="placeholderImg"
                    src={placeholder}
                    alt="placeHolder"
                    loading="lazy"
                    width="300"
                    height="330"
                    />
                    <AddTripSVG id='add-button1'/>
                </button>
            </div>
            <div id='trip-name'>
                Trip Name
            </div>
            <div id='trip-date'>
                Trip Date
            </div>
            <TripModal open={isOpen}>
                <div className="addTripContainer">
                    <button id="cancel-button">
                    <Cancel/>
                    </button>
                    <form id="form-content">
                        <div id="form-header">Create a New Trip</div>
                        <div className="subHeaders">Trip Name</div>
                        <input className="addTripInput" type="text" id='trip-name-input'></input>
                        <div className='subHeaders'>Location</div>
                        <input className="addTripInput" id='location-input' type="text" placeholder="Where are we going?"></input>
                        <div className="date-selector">
                            <div className="dateHeaders">
                                <div className="subHeaders" id="start-date">Start Date</div>
                                <div className="subHeaders" id="end-date">End Date</div>
                            </div>
                            <div className="dateButtons">
                                <input type="date" id="select-start-date" placeholder="YYYY-MM-DD"></input>
                                <input type="date" id="select-end-date" placeholder="MM-DD-YYYY"></input>
                            </div>
                        </div>
                        <div className="subHeaders" >Travelers</div>
                        <input className="addTripInput" id='traveler-input' type="text" placeholder="Add Your Friends">
                        </input>
                        <div className="subHeaders">Budget Amount</div>
                        <input className="addTripInput" id="budget-input" type="text" placeholder="$"></input>
                        <div className="formInput">
                            <button className="formButtons" id="cancel-form">Cancel</button>
                            <button className="formButtons" id="save-form">Save Trip</button>
                        </div>
                        
                    </form>

                </div>

                </TripModal>
        </div>

    </>

    );



}

export default AddTrip;