import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-4/6 bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-4xl mb-4 font-bold text-gray-900">Data Table</h2>
        <table className="font-sans text-left w-full cursor-pointer bg-gradient-to-r from-blue-300 to-purple-30 cursor-pointer0 border border-gray-300 divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 border-b">ID</th>
              <th className="py-3 px-6 border-b">Title</th>
              <th className="py-3 px-6 border-b">Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id} className="transition-all duration-300 hover:bg-gray-100 transform hover:scale-105">
                <td className="py-3 px-6 border-b">{post.id}</td>
                <td className="py-3 px-6 border-b">{post.title}</td>
                <td className="py-3 px-6 border-b">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
