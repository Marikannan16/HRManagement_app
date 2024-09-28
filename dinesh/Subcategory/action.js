import { useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";

const ActionMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative pe-40 me-5 ps-1 flex" ref={menuRef}>
            <button className="three-dot-icon" onClick={toggleMenu} aria-label="More options">
            <HiDotsVertical className="m-2"/>
            </button>

            {isOpen && (
                <div className="flex font-medium px-1  ">
                    <div className=" px-1 w-20 bg-gray-300 rounded-lg  ">
                        <div className="flex gap-2 py-1 hover:bg-gray-200 ">
                        <HiOutlinePencil size={15}/>  <button>Edit</button>
                        </div>
                        <div className="flex gap-2 py-1 hover:bg-gray-200">
                            <RiDeleteBinLine size={15} /><button>Delete</button> 
                        </div>
                        <div className="flex gap-2 py-1 hover:bg-gray-200">
                        <FiEye size={15} /> <button>View</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionMenu;