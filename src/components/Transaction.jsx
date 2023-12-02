import React, { useState } from "react";
import { postTransactionData } from "../services/api";
import { toast } from 'react-toastify';

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
   /* The code block is handling the submission of a transaction form. */
    try {
      if (!walletAddress.trim() || !amount.trim()) {
        throw new Error("Wallet address and amount cannot be empty");
      }

      await postTransactionData({ walletAddress, amount });

      setWalletAddress('');
      setAmount('');
      setError('');
      toast.success("Transaction Successful!"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black ">
      <div className="p-8 rounded-lg text-center w-4/6">
        <h1 className="text-4xl mb-8 text-gray-500 font-bold">Transaction Page</h1>

        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm text-left mb-2"
              htmlFor="walletAddress"
            >
              Wallet Address:
            </label>
            <input
              className="shadow outline-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="walletAddress"
              type="text"
              placeholder="Add your wallet address"
              value={walletAddress}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9.]/g, "");
              }}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-gray-700 text-sm mb-2"
              htmlFor="amount"
            >
              Amount:
            </label>
            <input
              className="shadow outline-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="amount"
              placeholder="Add a specific amount"
              type="text"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9.]/g, "");
              }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="bg-gray-900 w-full text-white font-bold py-2 px-4  transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Transaction;
