// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ManageUser.css";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const ManageUser = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/users");
//         // Sort newest first
//         setUsers(res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
//       } catch (err) {
//         console.error("Error fetching users:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Checkbox handler
//   const handleCheckbox = (userId) => {
//     if (selectedUsers.includes(userId)) {
//       setSelectedUsers(selectedUsers.filter((id) => id !== userId));
//     } else {
//       setSelectedUsers([...selectedUsers, userId]);
//     }
//   };

//   // Delete selected users
//   const handleDelete = async () => {
//     if (selectedUsers.length === 0) return alert("Select users to delete");

//     if (!window.confirm("Are you sure you want to delete selected users?")) return;

//     try {
//       await Promise.all(
//         selectedUsers.map((id) => axios.delete(`http://localhost:5000/api/users/${id}`))
//       );
//       setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
//       setSelectedUsers([]);
//       alert("Selected users deleted successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting users");
//     }
//   };

//   // Export PDF
//   const exportPDF = () => {
//     if (selectedUsers.length === 0) return alert("Select users to export PDF");

//     const doc = new jsPDF();
//     const filtered = users.filter((user) => selectedUsers.includes(user._id));
//     const tableColumn = ["S.No", "Name", "Email", "Role", "Phone", "Permissions"];
//     const tableRows = [];

//     filtered.forEach((user, index) => {
//       const userData = [
//         index + 1,
//         user.name,
//         user.email,
//         user.role,
//         user.phone,
//         user.permissions.join(", "),
//       ];
//       tableRows.push(userData);
//     });

//     doc.autoTable(tableColumn, tableRows, { startY: 20 });
//     doc.text("Selected Users", 14, 15);
//     doc.save("users.pdf");
//   };

//   // Filter users based on search
//   const filteredUsers = users.filter((user) =>
//     [user.name, user.email, user.role, user.phone]
//       .join(" ")
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   if (loading) return <div className="text-center mt-5">Loading users...</div>;

//   return (
//     <div className="mt-5 manageparent">
//       <h2 className="mb-4 text-light text-center">Manage Users</h2>

//       <div className="d-flex justify-content-between mb-3">
//         <input
//           type="text"
//           placeholder="Search by name, email, role, phone"
//           className="form-control w-50"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div>
//           <button className="btn btn-danger me-2" onClick={handleDelete}>
//             Delete
//           </button>

//           <button className="btn btn-primary" onClick={exportPDF}>
//             Export PDF
//           </button>
//         </div>
//       </div>

//       <div className="table-responsive shadow-sm rounded bg-white p-3">
//         <table className="table table-hover table-bordered align-middle" id="userTable">
//           <thead className="table-dark">
//             <tr>
//               <th>
//                 <input
//                   type="checkbox"
//                   checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setSelectedUsers(filteredUsers.map((u) => u._id));
//                     } else {
//                       setSelectedUsers([]);
//                     }
//                   }}
//                 />
//               </th>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Phone</th>
//               <th>Permissions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center">
//                   No users found
//                 </td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={user._id}>
//                   <td>
//                     <input
//                       type="checkbox"
//                       checked={selectedUsers.includes(user._id)}
//                       onChange={() => handleCheckbox(user._id)}
//                     />
//                   </td>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.permissions.join(", ")}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUser;

//pdf not functioning

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ManageUser.css";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// const ManageUser = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/users");
//         // const res = axios.get("https://magizhmart-backend.onrender.com/api/users");
//         setUsers(res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
//       } catch (err) {
//         console.error("Error fetching users:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleCheckbox = (userId) => {
//     if (selectedUsers.includes(userId)) {
//       setSelectedUsers(selectedUsers.filter((id) => id !== userId));
//     } else {
//       setSelectedUsers([...selectedUsers, userId]);
//     }
//   };

//   const handleDelete = async () => {
//     if (selectedUsers.length === 0) return alert("Select users to delete");

//     if (!window.confirm("Are you sure you want to delete selected users?")) return;

//     try {
//       await Promise.all(
//         selectedUsers.map((id) => axios.delete(`http://localhost:5000/api/users/${id}`))
//       );
//       setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
//       setSelectedUsers([]);
//       alert("Selected users deleted successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting users");
//     }
//   };

//   const exportPDF = () => {
//     if (selectedUsers.length === 0) return alert("Select users to export PDF");

//     const doc = new jsPDF();
//     const filtered = users.filter((user) => selectedUsers.includes(user._id));
//     const tableColumn = ["S.No", "Name", "Email", "Role", "Phone", "Permissions"];
//     const tableRows = [];

//     filtered.forEach((user, index) => {
//       tableRows.push([
//         index + 1,
//         user.name,
//         user.email,
//         user.role,
//         user.phone,
//         user.permissions.join(", "),
//       ]);
//     });

//     doc.autoTable(tableColumn, tableRows, { startY: 20 });
//     doc.text("Selected Users", 14, 15);
//     doc.save("users.pdf");
//   };

//   const exportExcel = () => {
//     if (selectedUsers.length === 0) return alert("Select users to export Excel");

//     const filtered = users.filter((user) => selectedUsers.includes(user._id));
//     const data = filtered.map((user, index) => ({
//       "S.No": index + 1,
//       Name: user.name,
//       Email: user.email,
//       Role: user.role,
//       Phone: user.phone,
//       Permissions: user.permissions.join(", "),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const file = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(file, "users.xlsx");
//   };

//   const filteredUsers = users.filter((user) =>
//     [user.name, user.email, user.role, user.phone].join(" ").toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <div className="text-center mt-5">Loading users...</div>;

//   return (
//     <div className="mt-5 manageparent">
//       <h2 className="mb-4 text-center">Manage Users</h2>

//       <div className="d-flex justify-content-between mb-3">
//         <input
//           type="text"
//           name="text"
//           placeholder="Search by name, email, role, phone"
//           className="form-control w-50"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div className="d-flex ">
//           <button className="btn btn-danger me-2 icons" onClick={handleDelete}>
//             Delete
//           </button>

//           <button className="btn btn-primary me-2 icons" onClick={exportPDF}>
//             PDF
//           </button>

//           <button className="btn btn-success icons" onClick={exportExcel}>
//             Excel
//           </button>
//         </div>
//       </div>

//       <div className="table-responsive shadow-sm rounded bg-white p-3">
//         <table className="table table-hover table-bordered align-middle" id="userTable">
//           <thead className="table-dark">
//             <tr>
//               <th>
//                 <input
//                   type="checkbox"
//                   checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setSelectedUsers(filteredUsers.map((u) => u._id));
//                     } else {
//                       setSelectedUsers([]);
//                     }
//                   }}
//                 />
//               </th>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Phone</th>
//               <th>Permissions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center">
//                   No users found
//                 </td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={user._id}>
//                   <td>
//                     <input
//                       type="checkbox"
//                       checked={selectedUsers.includes(user._id)}
//                       onChange={() => handleCheckbox(user._id)}
//                     />
//                   </td>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.permissions.join(", ")}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUser;

//pdf functioning

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ManageUser.css";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable"; // <- Correct import
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// const ManageUser = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/users");
//         setUsers(
//           res.data.sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           )
//         );
//       } catch (err) {
//         console.error("Error fetching users:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleCheckbox = (userId) => {
//     if (selectedUsers.includes(userId)) {
//       setSelectedUsers(selectedUsers.filter((id) => id !== userId));
//     } else {
//       setSelectedUsers([...selectedUsers, userId]);
//     }
//   };

//   const handleDelete = async () => {
//     if (selectedUsers.length === 0) return alert("Select users to delete");

//     if (!window.confirm("Are you sure you want to delete selected users?"))
//       return;

//     try {
//       await Promise.all(
//         selectedUsers.map((id) =>
//           axios.delete(`http://localhost:5000/api/users/${id}`)
//         )
//       );
//       setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
//       setSelectedUsers([]);
//       alert("Selected users deleted successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting users");
//     }
//   };

//   const exportPDF = () => {
//     if (selectedUsers.length === 0) return alert("Select users to export PDF");

//     const doc = new jsPDF();
//     const filtered = users.filter((user) => selectedUsers.includes(user._id));

//     const tableColumn = ["S.No", "Name", "Email", "Role", "Phone", "Permissions"];
//     const tableRows = [];

//     filtered.forEach((user, index) => {
//       tableRows.push([
//         index + 1,
//         user.name,
//         user.email,
//         user.role,
//         user.phone,
//         user.permissions.join(", "),
//       ]);
//     });

//     doc.text("Selected Users", 14, 15);

//     // Use autoTable correctly
//     autoTable(doc, {
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//       styles: { fontSize: 10 },
//       headStyles: { fillColor: [0, 123, 255] },
//     });

//     doc.save("users.pdf");
//   };

//   const exportExcel = () => {
//     if (selectedUsers.length === 0) return alert("Select users to export Excel");

//     const filtered = users.filter((user) => selectedUsers.includes(user._id));
//     const data = filtered.map((user, index) => ({
//       "S.No": index + 1,
//       Name: user.name,
//       Email: user.email,
//       Role: user.role,
//       Phone: user.phone,
//       Permissions: user.permissions.join(", "),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const file = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(file, "users.xlsx");
//   };

//   const filteredUsers = users.filter((user) =>
//     [user.name, user.email, user.role, user.phone].join(" ").toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <div className="text-center mt-5">Loading users...</div>;

//   return (
//     <div className="mt-5 manageparent">
//       <h2 className="mb-4 text-center">Manage Users</h2>

//       <div className="d-flex justify-content-between mb-3">
//         <input
//           type="text"
//           placeholder="Search by name, email, role, phone"
//           className="form-control w-50"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div className="d-flex ">
//           <button className="btn btn-danger me-2" onClick={handleDelete}>
//             Delete
//           </button>
//           <button className="btn btn-primary me-2" onClick={exportPDF}>
//             PDF
//           </button>
//           <button className="btn btn-success" onClick={exportExcel}>
//             Excel
//           </button>
//         </div>
//       </div>

//       <div className="table-responsive shadow-sm rounded bg-white p-3">
//         <table className="table table-hover table-bordered align-middle">
//           <thead className="table-dark">
//             <tr>
//               <th>
//                 <input
//                   type="checkbox"
//                   checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setSelectedUsers(filteredUsers.map((u) => u._id));
//                     } else {
//                       setSelectedUsers([]);
//                     }
//                   }}
//                 />
//               </th>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Phone</th>
//               <th>Permissions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center">No users found</td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={user._id}>
//                   <td>
//                     <input
//                       type="checkbox"
//                       checked={selectedUsers.includes(user._id)}
//                       onChange={() => handleCheckbox(user._id)}
//                     />
//                   </td>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.permissions.join(", ")}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUser;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageUser.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setUsers(
          res.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleCheckbox = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleDelete = async () => {
    if (selectedUsers.length === 0) return alert("Select users to delete");

    if (!window.confirm("Are you sure you want to delete selected users?"))
      return;

    try {
      await Promise.all(
        selectedUsers.map((id) =>
          axios.delete(`http://localhost:5000/api/users/${id}`)
        )
      );
      setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
      setSelectedUsers([]);
      alert("Selected users deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error deleting users");
    }
  };

  const exportPDF = () => {
    if (selectedUsers.length === 0) return alert("Select users to export PDF");

    const doc = new jsPDF();
    const filtered = users.filter((user) => selectedUsers.includes(user._id));

    const tableColumn = ["S.No", "Name", "Email", "Role", "Phone", "Permissions"];
    const tableRows = [];

    filtered.forEach((user, index) => {
      tableRows.push([
        index + 1,
        user.name,
        user.email,
        user.role,
        user.phone,
        user.permissions.join(", "),
      ]);
    });

    doc.text("Selected Users", 14, 15);
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 123, 255] },
    });

    doc.save("users.pdf");
  };

  const exportExcel = () => {
    if (selectedUsers.length === 0) return alert("Select users to export Excel");

    const filtered = users.filter((user) => selectedUsers.includes(user._id));
    const data = filtered.map((user, index) => ({
      "S.No": index + 1,
      Name: user.name,
      Email: user.email,
      Role: user.role,
      Phone: user.phone,
      Permissions: user.permissions.join(", "),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "users.xlsx");
  };

  const filteredUsers = users.filter((user) =>
    [user.name, user.email, user.role, user.phone].join(" ").toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="text-center mt-5">Loading users...</div>;

  return (
    <div className="mt-5 manageparent">
      <h2 className="mb-4 text-light text-center">Manage Users</h2>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search by name, email, role, phone"
          className="form-control w-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="d-flex ">
          <button className="btn btn-danger me-2" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-primary me-2" onClick={exportPDF}>
            PDF
          </button>
          <button className="btn btn-success" onClick={exportExcel}>
            Excel
          </button>
        </div>
      </div>

      <div className="table-responsive shadow-sm rounded bg-white p-3">
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedUsers(filteredUsers.map((u) => u._id));
                    } else {
                      setSelectedUsers([]);
                    }
                  }}
                />
              </th>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">No users found</td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user._id)}
                      onChange={() => handleCheckbox(user._id)}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.phone}</td>
                  <td>
                    {user.permissions.map((perm, i) => (
                      <span
                        key={i}
                        className="badge me-1 mb-1 text-white"
                        style={{
                          backgroundColor:
                              perm.toLowerCase() === "inventory"
                              ? "#d74e4eff"
                              : perm.toLowerCase() === "sales"
                              ? "#e962e7ff"
                              : perm.toLowerCase() === "users"
                              ? "#3653baff"
                              : perm.toLowerCase() === "report"
                              ? "#9d0dfdff"
                              : "#6c757d",
                        }}
                      >
                        {perm}
                      </span>
                    ))}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
