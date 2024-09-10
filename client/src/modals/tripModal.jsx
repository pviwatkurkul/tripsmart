import {createPortal} from 'react-dom';

const TripModal = ({open, children}) => {
    if(!open) return null;
    return createPortal(
        <>
        <div>
            {children}
        </div>
        </>,
        document.getElementById('addTripPortal')
    );

}
export default TripModal;