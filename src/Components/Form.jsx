import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleSubmitInfo }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleSubmitInfo(data);
        reset();
      })}
      className="max-w-md h-[40vh]  gap-4 items-center mx-auto flex"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=" your name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=" your email"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="imageUrl"
          className="block text-gray-700 font-bold mb-2"
        >
          Image URL
        </label>
        <input
          {...register("img")}
          type="text"
          id="imageUrl"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="img URL"
        />
      </div>

      <div className="flex items-center justify-between">
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  );
}

export default Form;
