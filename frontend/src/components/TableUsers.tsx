import { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { Users } from '../interfaces/users-interface';
import '../App.css'
import Logout from './Logout';
import { Link } from 'react-router-dom';

interface Column {
    id: number,
    label: string;
    minWidth?: number;
    format?: (value: number) => string;
}

const columns: readonly Column[] = [

    { id: 1, label: 'Name', },
    { id: 2, label: 'Email', },
    { id: 3, label: 'Last Login' },
    { id: 4, label: 'Registration Time' },
    { id: 5, label: 'Status' },
    { id: 6, label: 'Actions' }

];

const TableUsers = () => {

    const [users, setUsers] = useState<Users[]>([])

    const getUsers = async () => {
        const res = await axios.get('http://localhost:8000/')
        const users = res.data.map((user: Users) => ({
            ...user,
            last_login_time: new Date(user.last_login_time),
            registration_time: new Date(user.registration_time)
        }))
        setUsers(users)
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <>  
            <Logout/>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                {
                                    columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align="center"
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map((user) => (
                                    <TableRow key={user.id} hover role='checkbox'>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.last_login_time ? new Date(user.last_login_time).toLocaleString() : 'N/A'}</TableCell>
                                        <TableCell>{user.registration_time ? new Date(user.registration_time).toLocaleString() : 'N/A'}</TableCell>
                                        <TableCell>{user.status}</TableCell>
                                        <TableCell style={{ display: 'flex', gap: '10px' }}>
                                            <Link to={`/edit/${user.id}`}>Editar</Link>
                                            <button>Eliminar</button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>

    )
}

export default TableUsers