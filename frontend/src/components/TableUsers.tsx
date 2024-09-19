import '../App.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

import { useTableUsers } from '../hooks/useTableUsers';

import Logout from './Logout';
import ActionButtons from './ui/ActionButtons';

interface Column {
    id: number,
    label: string;
}

const columns: readonly Column[] = [
    { id: 0, label: '' }, 
    { id: 1, label: 'ID' },
    { id: 2, label: 'Name' },
    { id: 3, label: 'Email' },
    { id: 4, label: 'Last Login' },
    { id: 5, label: 'Registration Time' },
    { id: 6, label: 'Status' },
];

const TableUsers = () => {

    const { users, selectedUsers, handleStatusChange, handleDelete, handleSelect, handleSelectAll } = useTableUsers()

    return (
        <>
            <Logout />

            <ActionButtons selectedUsers={selectedUsers} onStatusChange={handleStatusChange} onDelete={handleDelete} />

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    <Checkbox
                                        indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length}
                                        checked={users.length > 0 && selectedUsers.length === users.length}
                                        onChange={(e) => handleSelectAll(e.target.checked) }
                                    />
                                </TableCell>
                                {columns.slice(1).map((column) => (
                                    <TableCell
                                        align="center"
                                        key={column.id}
                                        style={{ minWidth: 150 }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} hover role="checkbox">
                                    <TableCell padding="checkbox" align="center">
                                        <Checkbox
                                            checked={selectedUsers.includes(user.id)}
                                            onChange={() => handleSelect(user.id)}
                                        />
                                    </TableCell>
                                    <TableCell align="center">{user.id}</TableCell>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.email}</TableCell>
                                    <TableCell align="center">{user.last_login_time ? new Date(user.last_login_time).toLocaleString() : 'N/A'}</TableCell>
                                    <TableCell align="center">{user.registration_time ? new Date(user.registration_time).toLocaleString() : 'N/A'}</TableCell>
                                    <TableCell align="center">
                                        <span
                                            style={{
                                                textTransform: 'capitalize',
                                                padding: '5px',
                                                borderRadius: '10px',
                                                color: 'white',
                                                backgroundColor: user.status === 'blocked' ? 'red' : 'green',
                                            }}
                                        >
                                            {user.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

export default TableUsers;
