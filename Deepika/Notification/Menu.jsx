import React from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

const Menu = ({ onDownload }) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h5 className="p-5 font-semibold">Notification</h5>
            </div>
            <div className="flex items-center space-x-2 px-5 py-5">
                <button className="rounded-full bg-yellow-600 px-3 py-3 text-white">
                    <FaEnvelope />
                </button>
                <button
                    className="rounded-full bg-yellow-600 px-3 py-3 text-white"
                    onClick={onDownload}>
                    <FaDownload size={16} />
                </button>
            </div>
        </div>
    );
};

export default Menu;
