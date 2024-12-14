import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const { id } = useParams();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const crtprd = products.find((item) => item.id == id);

  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtprd, ...inputValue };
    onHandleUpdate(updateData);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form className="space-y-4" action="" onSubmit={onUpdate}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            onInput={onHandleChange}
            defaultValue={crtprd?.name}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Giá sản phẩm"
            onInput={onHandleChange}
            defaultValue={crtprd?.price}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            placeholder="Mô tả sản phẩm"
            onInput={onHandleChange}
            defaultValue={crtprd?.description}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
};

export default Update;
