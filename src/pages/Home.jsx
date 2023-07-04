import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserStart, loadUserStart } from "../redux/actions";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("are you sure that you wanted to delete user?")) {
      dispatch(deleteUserStart(id));
      toast.success("user deleted successfully");
    }
  };

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "250px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((item, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <th scope="row">{item.name}</th>
                <th scope="row">{item.email}</th>
                <th scope="row">{item.phone}</th>
                <th scope="row">{item.address}</th>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39", marginRight: "1rem" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </MDBBtn>

                  <Link to={`/editUser/${item.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{
                          color: "#55acee",
                          marginBottom: "1rem",
                          marginRight: "1rem",
                        }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>

                  <Link to={`/userInfo/${item.id}`}>
                    <MDBTooltip title="View" tag="a">
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{ color: "#3b5998 ", marginBottom: "1rem" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default Home;
