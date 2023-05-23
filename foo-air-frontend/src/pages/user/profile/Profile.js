/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import "./Profile.css";
import CreatePost from "../../../components/CreatePost";
import {deleteProfileById, getCurrentUser} from "../../../util/APIUtils";
import {toast} from "react-toastify";
import {ACCESS_TOKEN} from "../../../constants";
import EditUserModal from "../../../components/EditUserModal";

const Profile = ({currentUser}) => {
    const [user, setUser] = useState(currentUser);
    const [open, setOpen] = useState(false);

    const refetchUser = async () => {
        try {
            const response = await getCurrentUser();
            if (!response) return;

            setUser(response);
        } catch (error) {
            toast("Oops something went wrong!", {type: "error"});
        }
    };

    const editProfile = async () => {
        setOpen(true);
    };

    const deleteProfile = async () => {
        try {
            const response = await deleteProfileById(user.id);
            if (response != null) {
                toast("profile remove successfully", {type: "success"});
                localStorage.removeItem(ACCESS_TOKEN);
                window.location.href = "/login";
            }
        } catch (error) {
            toast("Oops something went wrong!", {type: "error"});
        }
    };
    const validateImageUrl = (imageUrl) =>{
        if(imageUrl != null){
            return imageUrl;
        }
        return  "https://imgtr.ee/images/2023/05/18/2onJR.th.png";
    }

    return (
        <>
            <header aria-label="Page Header" className="bg-gray-700">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <a href="#" className="block shrink-0">
                            <span className="sr-only">Profile</span>
                            <img
                                alt={user.name}
                                src={validateImageUrl(user.imageUrl)}
                                className="h-100 w-100 mb-2 rounded-full object-cover"
                            />
                        </a>
                        <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
                            Welcome Back, {user.name}
                        </h1>

                        <p className="mt-1.5 text-sm text-gray-200">{user.email}</p>
                    </div>

                    <div className="flex mt-4 selection:items-center justify-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div
                                    onClick={editProfile}
                                    className="rounded-md p-1 px-4 font-semibold cursor-pointer text-gray-100 bg-orange-600 ml-auto"
                                >
                                    Edit Profile
                                </div>
                            </div>

                            <div
                                onClick={deleteProfile}
                                className="rounded-md p-1 px-4 font-semibold cursor-pointer text-gray-100 bg-red-700 ml-auto"
                            >
                                Delete Profile
                            </div>
                        </div>
                    </div>
                </div>
                <div className="count ml-auto">
                    <div className="buttons flex"/>
                </div>
            </header>

            <div className="home-container bg-blue-100">
                <div className="container">
                    <CreatePost/>
                </div>
            </div>

            <EditUserModal
                open={open}
                setOpen={setOpen}
                currentUser={user}
                refetchUser={refetchUser}
            />
        </>
    );
};

export default Profile;
