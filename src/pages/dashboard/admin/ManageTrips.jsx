import axios from "axios";
import DataTable, { defaultThemes } from "react-data-table-component";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useTrips from "../../../hooks/useTrips";

const ManageTrips = () => {
  const [trips] = useTrips();

  // Handle View Trip
  const handleViewTrip = (id) => {

  }

  // Handle View Trip
  const handleUpdateTrip = (id) => {

  }
  // Handle View Trip
  const handleTripDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Trip.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`http://localhost:5000/Trip/delete/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Trip removed successfully",
            icon: "success"
          });
          // refetch();
        }
      }
    });

  }

  const columns = [
    // picture, 
    // title,
    // hostEmail,
    // startDate, 
    // endDate,
    {
      name: "Image",
      cell: row => (
        <>
          <img className="w-20 h-14 rounded-md my-2 object-cover" src={row?.picture} alt="" />
        </>
      )
    },
    {
      name: "Title",
      selector: row => row.title,
    },
    {
      name: "Host Email",
      selector: row => row.hostEmail,
    },
    {
      name: "Start Date",
      selector: row => row.startDate,
    },
    {
      name: "Rating",
      selector: row => row.endDate,
    },
    {
      name: "View",
      cell: row => (
        <div>
          <Link to={`/Trip/${row._id}`} style={{ background: "green" }} className="btn btn-sm text-white">
            View
          </Link>
        </div>
      )
    },
    {
      name: "Update",
      cell: row => (
        <div>
          <button onClick={() => handleUpdateTrip(row._id)} className="btn btn-sm bg-sky-600 text-white" style={{ background: "oranged" }}>
            Edit
          </button>
        </div>
      )
    },
    {
      name: "Delete",
      cell: row => (
        <div>
          <button onClick={() => handleTripDelete(row._id)}>
            <AiOutlineDelete color="red" size={22} />
          </button>
        </div>
      )
    },
  ]
  // ------------- customStyles of table ---------------
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
      <div className="w-fit mx-auto mb-5">
        <Link to="/add-new-trip" className="btn bg-primary text-white px-5">Add New Trip</Link>
      </div>
      <DataTable
        columns={columns}
        data={trips}
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

export default ManageTrips;