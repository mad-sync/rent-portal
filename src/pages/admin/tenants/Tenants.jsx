import Breadcrumb from "../../../components/Breadcrumb";
import PrimaryButton from "../../../components/PrimaryButton";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Tenants = () => {
  const navigate = useNavigate();

  // Column definitions for the AG Grid
  const [columnDefs] = useState([
    {
      flex: 1,
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: false,
    },
    {
      flex: 1,
      headerName: "Phone",
      field: "phone",
      sortable: true,
      filter: false,
    },
    {
      flex: 1,
      headerName: "Email",
      field: "email",
      sortable: true,
      filter: false,
    },
    {
      flex: 1,
      headerName: "Previous Address",
      field: "previous_address",
      sortable: true,
      filter: false,
    },
    {
      flex: 1,
      headerName: "Aadhaar",
      field: "adhaar",
      sortable: true,
      filter: false,
    },
    { flex: 1, headerName: "PAN", field: "pan", sortable: true, filter: false },
  ]);

  // Dummy row data
  const [rowData] = useState([
    {
      name: "John Doe",
      phone: "9876543210",
      email: "john@example.com",
      previous_address: "123 Main St",
      adhaar: "1234-5678-9101",
      pan: "ABCDE1234F",
    },
    {
      name: "Jane Smith",
      phone: "9123456780",
      email: "jane@example.com",
      previous_address: "456 Elm St",
      adhaar: "5678-1234-0987",
      pan: "WXYZ5678P",
    },
    {
      name: "Robert Johnson",
      phone: "9988776655",
      email: "robert@example.com",
      previous_address: "789 Oak St",
      adhaar: "7890-2345-6789",
      pan: "LMNOP2345H",
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
    <div className="">
      <Breadcrumb
        links={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "All Tenants Listing", link: "#" },
        ]}
      />

      <div className="w-full flex flex-col lg:p-5 p-4">
        <div className="flex items-center justify-end w-full mb-4 bg-white p-4 gap-4">
          <PrimaryButton
            onClick={toggleFilters}
            variant="outlined"
            label={`${showFilters ? "Hide" : "Show"} Filters`}
          />
          <PrimaryButton
            onClick={() => navigate("/admin/tenants/add")}
            label="Create Tenant"
          />
        </div>

        {showFilters && (
          <div className="flex items-center w-full mb-4 gap-4 bg-white p-4">
            <div>
              <Input
                name="search"
                value={params.search}
                handleChange={handleChange}
                label="Search "
              />
            </div>
            <div className="flex items-center gap-4">
              <PrimaryButton label="Search" />
              <PrimaryButton variant="outlined" label="Clear All" />
            </div>
          </div>
        )}

        <div className="flex flex-col bg-white w-full lg:p-5 p-4">
          {/* AG Grid for Tenants Listing */}
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

export default Tenants;
