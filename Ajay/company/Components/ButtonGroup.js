import React from "react";
import Button from "./Button";

const ButtonGroup = ({ handleCancel }) => {
  return (
    <div className="flex justify-center gap-5 my-6">
      <Button
        onClick={handleCancel}
        className="bg-transparent text-gray-800 border border-gray-800"
      >
        Cancel
      </Button>
      <Button
        type="submit"
        className="bg-yellow-700 text-white"
      >
        Save
      </Button>
    </div>
  );
};

export default ButtonGroup;
