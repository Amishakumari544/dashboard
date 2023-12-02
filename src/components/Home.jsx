//O explanation needed, Home page it is where user lands on entering URL

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-gray-900 p-12 rounded-lg text-center w-4/6">
        <h2 className="text-5xl font-bold mb-4">
          Welcome to the <span className="text-purple-700 ">Dashboard</span>
        </h2>
        <p className="text-lg mb-6">
        Join our platform and enjoy secure, seamless transactions. Experience the latest in technology with our user-friendly interfaces, ensuring a hassle-free interaction.
        </p>

        <Link to="/transaction">
          <button className="bg-gray-700  text-white font-bold py-2 px-4 mr-4 transition duration-300">
            Go to Transaction Page
          </button>
        </Link>

        <Link to="/data">
          <button className="bg-purple-500 hover:bg-green-700 text-white font-bold py-2 px-4 transition duration-300">
           Check the fetch data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
