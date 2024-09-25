import React, { useState, useRef } from 'react';
import { faEdit, faEye, faTrash, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './list.css';

const ActionCell = ({ row }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (action) => {
        console.log(`Action: ${action} for row:`, row);
        setIsOpen(false); // Close the menu after clicking
    };

    return (
        <div className="relative pe-5 me-5 ps-1" ref={menuRef}>
            {/* Three-dot icon button */}
            <button className="three-dot-icon" onClick={toggleMenu} aria-label="More options">
                <FontAwesomeIcon icon={faEllipsisV} size="lg" />
            </button>

            {/* Menu popup */}
            {isOpen && (
                <div className="menu-popup">
                    <div className="menu">
                        <div>
                            {/* Pass the row.sno dynamically in the Link */}
                            <Link to={`editcompliance/${row.sno}`} onClick={() => handleOptionClick('Edit')}>
                                <FontAwesomeIcon icon={faEdit} /> Edit
                            </Link>
                        </div>
                        <div>
                            {/* Pass the row.sno dynamically in the Link */}
                            <Link to={`viewcompliance/${row.sno}`} onClick={() => handleOptionClick('Details')}>
                                <FontAwesomeIcon icon={faEye} /> View
                            </Link>
                        </div>
                        <div onClick={() => handleOptionClick('Delete')}>
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionCell;
