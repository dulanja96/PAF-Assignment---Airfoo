import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {getAllUsers} from "../../util/APIUtils";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();
                setUsers(response);
            } catch (error) {
                toast("Oops! Something went wrong.", {type: "error"});
            }
        };

        fetchUsers();
    }, []);

    const validateImageUrl = (imageUrl) => {
        if (imageUrl != null) {
            return imageUrl;
        }
        return "https://imgtr.ee/images/2023/05/18/2onJR.th.png";
    }

    return (
        <div className="home-container  bg-blue-100">
            <div className="container">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-200 dark:text-gray-200">
                        <thead
                            className="text-xs text-gray-300 uppercase bg-gray-800 dark:border-gray-600 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                User name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr
                                key={user.id}
                                className="bg-gray-700 border-b dark:bg-gray-700 dark:border-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap dark:text-gray"
                                >
                                    <div className="flex m-0">
                                        <div className="flex-none w-7 h-7">
                                            <img
                                                alt={user.name}
                                                src={validateImageUrl(user.imageUrl)}
                                                className="h-7 w-7 mb-2 rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-initial w-64 ... bottom-4 m-1">
                                            {user.name}
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">{user.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
