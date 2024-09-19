import React from 'react';
import { Box, Button } from '@mui/material';
import { LockOpen, DeleteForever } from '@mui/icons-material';

interface ActionButtonsProps {
    selectedUsers: number[];
    onStatusChange: (ids: number[], newStatus: string) => void;
    onDelete: (ids: number[]) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ selectedUsers, onStatusChange, onDelete }) => {
    return (
        <Box component='div' style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '50px' }}>
            <Button
                variant="contained"
                color="error"
                size="small"
                style={{ fontSize: '10px' }}
                onClick={() => onStatusChange(selectedUsers, 'blocked')}
                disabled={selectedUsers.length === 0}
            >
                Block
            </Button>

            <Button
                variant="contained"
                color="success"
                onClick={() => onStatusChange(selectedUsers, 'active')}
                disabled={selectedUsers.length === 0}
            >
                <LockOpen fontSize="small" />
            </Button>

            <Button
                variant="contained"
                color="secondary"
                onClick={() => onDelete(selectedUsers)}
                disabled={selectedUsers.length === 0}
            >
                <DeleteForever fontSize="small" />
            </Button>
        </Box>
    );
};

export default ActionButtons;
