import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import './AdminUserDetails.css';
import AdminHeaderNew from '../../../Components/AdminHeader/AdminHeaderNew';
import AdminFooter from '../../../Components/AdminFooter/AdminFooter';

const roles = ['User', 'Admin'];

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getAllUser');
      const data = response.data;
      if (data.status === 'ok') {
        // Map the fetched data and set it to the rows state
        const mappedData = data.data.map((user) => ({
          id: user._id,
          userName: user.userName,
          email: user.email,
          userType: user.userType,
          permission: user.permission,
        }));
        setRows(mappedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (id) => () => {
    setEditingRowId(id);
  };

  const handleSaveClick = async (id) => {
    setEditingRowId(null);

    // If id is present, it means it's an existing record being edited
    if (id) {
      const updatedRow = rows.find((row) => row.id === id);
      try {
        await axios.post('http://localhost:5000/updatePermission', {
          id,
          permission: updatedRow.permission,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      // If id is null, it means it's a new record being added
      const newRecord = rows.find((row) => row.id === null);
      try {
        await axios.post('http://localhost:5000/addUser', newRecord);
        fetchUsersData(); // Fetch data again to get the updated records from the server
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteClick = async (id) => {
    // Delete the user from the database
    try {
      await axios.delete(`http://localhost:5000/deleteUser/${id}`);
      fetchUsersData(); // Fetch data again to get the updated records from the server
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setEditingRowId(null);
  };

  const handleCellValueChange = (id, field) => (event) => {
    setRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          return { ...row, [field]: event.target.value };
        }
        return row;
      })
    );
  };

  const handleAddRecordClick = () => {
    const newRecord = {
      id: null, // Use null as the id for new records
      userName: '',
      email: '',
      userType: '',
      permission: false,
    };
    setRows([newRecord, ...rows]);
    setEditingRowId(newRecord.id);
  };

  return (
    <div>
      <AdminHeaderNew />
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <Box mt={2}>
          <Button
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddRecordClick}
          >
            Add record
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="header-cell">User Name</TableCell>
              <TableCell className="header-cell">Email</TableCell>
              <TableCell className="header-cell">User Type</TableCell>
              <TableCell className="header-cell">Permission</TableCell>
              <TableCell className="header-cell actions-cell">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                className={row.permission ? 'granted-row' : 'not-granted-row'}
              >
                <TableCell>
                  {editingRowId === row.id ? (
                    <TextField
                      value={row.userName}
                      onChange={handleCellValueChange(row.id, 'userName')}
                    />
                  ) : (
                    row.userName
                  )}
                </TableCell>
                <TableCell>
                  {editingRowId === row.id ? (
                    <TextField
                      value={row.email}
                      onChange={handleCellValueChange(row.id, 'email')}
                    />
                  ) : (
                    row.email
                  )}
                </TableCell>
                <TableCell>
                  {editingRowId === row.id ? (
                    <FormControl>
                      <InputLabel>User Type</InputLabel>
                      <Select
                        value={row.userType}
                        onChange={handleCellValueChange(row.id, 'userType')}
                      >
                        {roles.map((role) => (
                          <MenuItem key={role} value={role}>
                            {role}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    row.userType
                  )}
                </TableCell>
                <TableCell>
                  {editingRowId === row.id ? (
                    <FormControl>
                      <InputLabel>Permission</InputLabel>
                      <Select
                        value={row.permission}
                        onChange={handleCellValueChange(row.id, 'permission')}
                      >
                        <MenuItem value={false}>Not Granted</MenuItem>
                        <MenuItem value={true}>Granted</MenuItem>
                      </Select>
                    </FormControl>
                  ) : row.permission ? (
                    'Granted'
                  ) : (
                    'Not Granted'
                  )}
                </TableCell>
                <TableCell className="actions-cell">
                  {editingRowId === row.id ? (
                    <>
                      <Button
                        variant="outlined"
                        size="small"
                        className="save-button"
                        onClick={() => handleSaveClick(row.id)}
                      >
                        <SaveIcon />
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        className="cancel-button"
                        onClick={handleCancelClick}
                      >
                        <CancelIcon />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outlined"
                        size="small"
                        className="edit-button"
                        onClick={handleEditClick(row.id)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        className="delete-button"
                        onClick={() => handleDeleteClick(row.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <br />
      <AdminFooter />
    </div>
  );
}
