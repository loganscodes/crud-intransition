import { useEffect, useState } from "react";
import { Users } from "../interfaces/users-interface";
import axios from "axios";
import { URL_ENDPOINT } from "../api/api";

export const useTableUsers = () => {

    const [users, setUsers] = useState<Users[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]); 

    const getUsers = async () => {
        const res = await axios.get(`${URL_ENDPOINT}`);
        const users = res.data.map((user: Users) => ({
            ...user,
            last_login_time: new Date(user.last_login_time),
            registration_time: new Date(user.registration_time),
        }));
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleStatusChange = async (ids: number[], newStatus: string) => {
        try {
            await Promise.all(
                ids.map(id =>
                    axios.put(`${URL_ENDPOINT}/${id}`, { status: newStatus })
                )
            );
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    ids.includes(user.id) ? { ...user, status: newStatus } : user
                )
            );
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleDelete = async (ids: number[]) => {
        await Promise.all(
            ids.map(id => axios.delete(`${URL_ENDPOINT}/${id}`))
        );
        getUsers();
    };

    const handleSelect = (id: number) => {
        setSelectedUsers((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((userId) => userId !== id)
                : [...prevSelected, id]
        );
    };

    const handleSelectAll = (checked: boolean) => {
        setSelectedUsers(
            checked ? users.map((user) => user.id) : []
        );
    };


    return{
        users,
        selectedUsers,
        handleStatusChange,
        handleDelete,
        handleSelect,
        handleSelectAll
    }










}