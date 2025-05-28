import { ChevronRight } from "lucide-react";
import React from "react";

function InvoiceList() {
  return (
    <div className="space-y-4">
      <div
        className="bg-slate-800 rounded-lg flex items-center justify-between p-6 hover:bg-slate-700
        transition-colors duration-200 cursor-pointer"
      >
        <div className="flex items-center space-x-6">
          <span className="text-slate-400">Invoice ID</span>
          <span className="text-slate-400">Due Date</span>
          <span className="text-slate-300">Prashant S</span>
        </div>

        <div className="flex items-center space-x-6">
          <span className="text-2xl font-bold">4450</span>
          <div>
            <span className="capitalize">Invoice Status</span>
          </div>
          <ChevronRight className="text-violet-500 " />
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;
