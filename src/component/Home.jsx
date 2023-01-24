import React, { useEffect, useState } from "react";
import { userListService } from "../services/userService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUserDetails } from "../redux/slices/userDetailsSlice";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchUserList = async () => {
    try {
      let response = await userListService();
      console.log(response?.data?.data);
      setUserList(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userList);
  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <>
      <Grid>
        <Table stickyHeader aria-label="caption tableasd">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>User ID</TableCell>

              <TableCell sx={{ fontWeight: 700 }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Email ID</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userList.length > 0 &&
              userList.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => {
                    navigate("/users");
                    dispatch(storeUserDetails(row));
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row?.id}
                  </TableCell>
                  <TableCell>{row?.first_name}</TableCell>
                  <TableCell>{row?.last_name}</TableCell>
                  <TableCell>{row?.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default Home;
