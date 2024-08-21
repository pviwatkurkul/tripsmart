import { createPortal} from 'react-dom';

const DropDownModal = ({open, children}) => {
    if(!open) return null;
    return createPortal(
        <>
        <div>
            {children}
        </div>
        </>,
        document.getElementById('dropdownPortal')
    );
}

export default DropDownModal;




