import React from "react";

function Card({ users, removeCard, i }) {
  return (
    <>
      <div className=" w-[20vw] h-[65vh] flex flex-col justify-center rounded-lg shadow-lg overflow-hidden">
        <div className=" flex items-center justify-center">
          <img
            className="object-cover rounded-full h-32 w-32"
            src={users.img}
            alt="Placeholder"
          />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2">
            <span className="block text-gray-700 font-bold mb-1">
              {users.name}
            </span>
            <span className="text-gray-700"></span>
          </div>
          <div className="mb-4">
            <span className="block text-gray-700 font-bold mb-1"></span>
            <span className="text-gray-700">{users.email}</span>
          </div>
          <p className="text-gray-700 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            magna at fringilla bibendum, ipsum tellus facilisis mauris, vel
          </p>
          <button
            onClick={() => removeCard(i)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            remove it
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
