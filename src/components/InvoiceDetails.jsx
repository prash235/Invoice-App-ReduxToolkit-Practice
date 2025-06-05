import React from "react";

function InvoiceDetails() {
  return (
    <div className="bg-slate-800 rounded-lg p-8 ">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <span>Status</span>
        </div>
        <div className="flex  space-x-4">
          <button className="px-6 py-3 rounded-full bg-slate-700 hover:bg-slate-600 ">
            Edit
          </button>
          <button className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 ">
            Delete
          </button>
          <button className="px-6 py-3 rounded-full bg-violet-500 hover:bg-violet-600 ">
            Mark as Paid
          </button>
        </div>
      </div>

      <div className="bg-slate-900 rounded-lg p-8">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Invoice ID</h2>
            <p className="text-slate-400">Project Description</p>
          </div>
          <div className="text-right text-slate-400">
            <p>Address street</p>
            <p>City</p>
            <p>Pincode</p>
            <p>Country</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-3">
          <div>
            <p className="text-slate-400">Invoice Date</p>
            <p className="font-bold">Dynamic Invoice Date</p>
            <p className="text-slate-400 mb-2">Payment Due</p>
            <p className="font-bold">Invoice Due Date</p>
          </div>
          <div>
            <p className="text-slate-400 mb-2">Bill To</p>
            <p className="font-bold mb-2">Client Name</p>
            <p className="text-slate-400">Client Address</p>
            <p className="text-slate-400">City</p>
            <p className="text-slate-400">Pincode</p>
            <p className="text-slate-400">Country</p>
          </div>
          <div>
            <p className="text-slate-400 mb-2">Sent To</p>
            <p className="font-bold mb-2">Client Email</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg overflow-hidden ">
          <div className="p-8">
            <table className="w-full">
              <thead>
                <tr className="text-slate-400 ">
                  <th className="text-left">Item Name</th>
                  <th className="text-center">QTY</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white ">
                  <th className="text-left">Item Name</th>
                  <th className="text-center">QTY</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Total</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 p-8 flex justify-between items-center ">
            <span className="text-white ">Amount Due</span>
            <span className="text-3xl font-bold ">898</span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
