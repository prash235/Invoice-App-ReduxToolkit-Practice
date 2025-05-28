import { Plus, Trash2, X } from "lucide-react";
import React from "react";

function InvoiceForm() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center overflow-y-auto px-4 py-8">
      <div className="bg-slate-800 p-8 rounded-lg w-full max-w-2xl my-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">New Invoice</h2>
          <button>
            <X size={24} />
          </button>
        </div>

        <form className="space-y-6">
          {/* Bill From */}
          <div className="space-y-4">
            <h3 className="text-violet-500 font-bold">Bill From</h3>
            <input
              type="text"
              placeholder="Street address"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="City"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Post Code"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Country"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white placeholder-gray-400"
            />
          </div>

          {/* Bill To */}
          <div className="space-y-4">
            <h3 className="text-violet-500 font-bold">Bill to</h3>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Client Email"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Street address"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white placeholder-gray-400"
            />
          </div>

          {/* Dates and Project */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="bg-slate-900 rounded-lg p-3 text-white"
              />
              <select
                className="bg-slate-900 rounded-lg p-3 text-white"
                required
              >
                <option>Net 30 Days</option>
                <option>Net 60 Days</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Project description"
              required
              className="w-full bg-slate-900 rounded-lg p-3 text-white"
            />
          </div>

          {/* Item List */}
          <div className="space-y-4">
            <h3>Item List</h3>
            <div className="grid grid-cols-12 gap-4 items-center">
              <input
                type="text"
                placeholder="Item Name"
                className="bg-slate-900 rounded-lg p-3 col-span-5 text-white"
              />
              <input
                type="number"
                placeholder="Quantity"
                className="bg-slate-900 rounded-lg p-3 col-span-2 text-white"
                min="1"
                required
              />
              <input
                type="number"
                placeholder="Price"
                className="bg-slate-900 rounded-lg p-3 col-span-2 text-white"
                min="0"
                step="0.01"
                required
              />
              <div className="col-span-2  text-right ">Total Amount</div>
              <button
                type="button"
                className="text-slate-400 hover:text-red-500"
              >
                <Trash2 size={20} className="text-white hover:text-red-500" />
              </button>
            </div>

            <button
              type="button"
              className="w-full bg-slate-700 hover:bg-slate-600 rounded-lg p-3 flex 
              items-center justify-center space-x-2 text-white"
            >
              <Plus size={20} />
              <span>Add New Item</span>
            </button>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className=" bg-violet-500 hover:bg-violet-600 rounded-lg p-3 text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              className=" bg-violet-500 hover:bg-violet-600 rounded-lg p-3 text-white"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvoiceForm;
