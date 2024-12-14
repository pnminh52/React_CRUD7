import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { products, onHandleRemove } = props;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Danh sách sản phẩm</h1>
        <a
          href="/products/add"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Thêm sản phẩm
        </a>
      </div>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Tên sản phẩm
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Giá</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Mô tả
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price} VNĐ
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.description}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => onHandleRemove(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Xóa
                </button>
                <Link to={`/products/${product.id}/update`}>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                    Sửa
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
