import React from "react";

import { useState } from "react";

export default function Modal( ) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
      if (!modal) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };
  return (
    <div>
      {modal && (
        <div className="w-full h-[100vh] fixed inset-0 z-10">
          <div
            onClick={toggleModal}
            className="w-full h-full bg-black opacity-50"
          ></div>
          <div className="absolute w-11/12 h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-8 rounded">
            <h2>Hello Modal</h2>
            <button
              className="absolute bottom-2 right-4 px-3 py-2 border-[1px] border-black text-black hover:bg-blue-gray-600 rounded-lg"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
