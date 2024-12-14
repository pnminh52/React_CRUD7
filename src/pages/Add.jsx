import React from "react";

const Add = (props) => {
  const { errors, onHandleSubmit, onHandleChange } = props;

  const errorDetails = errors.map((item) => {
    return { [item.context.label]: item.message };
  });

  const [errorname, errorprice, errordes] = errorDetails;

  return (
    <div className="p-4 max-w-md mx-auto">
      <form className="space-y-4" action="" onSubmit={onHandleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            onInput={onHandleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errorname?.name && (
            <span className="text-red-500 text-sm">{errorname.name}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            name="price"
            placeholder="Giá sản phẩm"
            onInput={onHandleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errorprice?.price && (
            <span className="text-red-500 text-sm">{errorprice.price}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            name="description"
            placeholder="Mô tả sản phẩm"
            onInput={onHandleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errordes?.description && (
            <span className="text-red-500 text-sm">{errordes.description}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default Add;
