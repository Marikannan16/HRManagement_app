import React from "react";
import { GoUpload } from "react-icons/go";

const PhotoUploader = ({ formState, handleImageChange }) => {
  return (
    <label htmlFor="profilePhoto" className="relative cursor-pointer">
      <div className="w-40 h-40 bg-gray-100 shadow-md rounded-full overflow-hidden flex items-center justify-center">
        {formState.profilePhoto ? (
          <img
            src={formState.profilePhoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500 text-6xl ">
            <GoUpload />
          </span>
        )}
      </div>
      <input
        id="profilePhoto"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </label>
  );
};

export default PhotoUploader;
