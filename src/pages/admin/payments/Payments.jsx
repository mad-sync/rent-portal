import React, { useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import PrimaryButton from "../../../components/PrimaryButton";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Input from "../../../components/Input";

const Payments = () => {
  // Column definitions for the AG Grid
  const [columnDefs] = useState([
    {
      flex: 1,
      headerName: "Payment ID",
      field: "paymentId",
      sortable: true,
      filter: false,
    },
    {
      flex: 1,
      headerName: "Amount",
      field: "amount",
      sortable: true,
      filter: false,
    },
    {
      flex: 1,
      headerName: "Status",
      field: "status",
      sortable: true,
      filter: false,
    },
    {
      flex: 1,
      headerName: "Date",
      field: "date",
      sortable: true,
      filter: false,
    },
  ]);

  // Dummy row data
  const [rowData] = useState([
    {
      paymentId: "P001",
      amount: "$150.00",
      status: "Paid",
      date: "2024-09-01",
    },
    {
      paymentId: "P002",
      amount: "$200.00",
      status: "Pending",
      date: "2024-09-05",
    },
    {
      paymentId: "P003",
      amount: "$300.00",
      status: "Failed",
      date: "2024-09-07",
    },
  ]);

  const [params, setParams] = useState({
    search: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setParams({
      ...params,
      [name]: value,
    });
  };

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <Breadcrumb
        links={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Payments", link: "#" },
        ]}
      />

      <div className="w-full flex flex-col lg:p-5 p-4">
        <div className="flex items-center justify-end w-full mb-4 bg-white p-4 gap-4">
          <PrimaryButton
            onClick={toggleFilters}
            variant="outlined"
            label={`${showFilters ? "Hide" : "Show"} Filters`}
          />
        </div>

        {showFilters && (
          <div className="flex items-center w-full mb-4 gap-4 bg-white p-4">
            <div>
              <Input
                name="search"
                value={params.search}
                handleChange={handleChange}
                label="search"
              />
            </div>
            <div className="flex items-center gap-4">
              <PrimaryButton label="search" />
              <PrimaryButton variant="outlined" label="Clear All" />
            </div>
          </div>
        )}

        <div className="flex flex-col bg-white w-full lg:p-5 p-4">
          {/* AG Grid */}
          <div
            className="ag-theme-alpine"
            style={{ height: 400, width: "100%" }}
          >
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              pagination={true}
              paginationPageSize={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
