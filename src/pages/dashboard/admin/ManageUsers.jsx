// import DashboardHeading from "../../../components/dashboardHeading";
import axios from "axios";
import DataTable, { defaultThemes } from "react-data-table-component";
import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {
  const [users] = useUsers();

  // handle Make_Admin
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you confirm?",
      text: "You want to make admin.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.patch(`http://localhost:5000/user-make-admin/${id}`);
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Your user converted to admin successfully",
            // text: "Your meal deliverd on serving..",
            icon: "success"
          });
        }
      }
    });
  }
  // handle Make_user
  const handleMakeUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to demotion admin to user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.patch(`http://localhost:5000/admin-make-user/${id}`);
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Your admin converted to user successfully",
            // text: "Your meal deliverd on serving..",
            icon: "success"
          });
        }
      }
    });
  }


  const columns = [
    {
      name: "SL",
      selector: (row, index) => index + 1,
    },
    {
      name: "Username",
      // selector: row => row.name,
      cell: row => (
        <>
          <div>
            <h4 className="font-semibold text-base">{row.name}</h4>
            <span className="badge bg-blue-600 text-white font-semibold">{row.role}</span>
          </div>
        </>
      )
    },
    {
      name: "Email",
      selector: row => row.email,
    },
    {
      name: "Action",
      cell: row => (
        <div>
          {
            row.role === "admin" ? <>
              <button
                onClick={() => handleMakeUser(row._id)}
                className="btn btn-xs bg-orange-600 text-white">
                Make User
              </button>
            </> : <>
              <button onClick={() => handleMakeAdmin(row._id)} className="btn btn-xs bg-blue-600 text-white">
                Make Admin
              </button>
            </>
          }
        </div>
      )
    },
  ]
  // customStyles of table
  const customStyles = {
    header: {
      style: {
        minHeight: '56px',
      },
    },
    headRow: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  return (
    <div>
      {/* <DashboardHeading title="Manage Users" /> */}
      <DataTable
        columns={columns}
        data={users}
        highlightOnHover
        theme="solarized"
        customStyles={customStyles}
        selectableRows
        pagination
      >

      </DataTable>
    </div>
  );
};

export default ManageUsers;