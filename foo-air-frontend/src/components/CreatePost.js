import React, {} from "react";

const CreatePost = () => {

    return (
        <>
            <div
                className="editor mx-auto w-10/12 flex flex-col text-gray-800 border rounded-lg border-gray-700 p-4 shadow-lg max-w-2xl">
        <textarea
            className="description bg-blue-950 rounded-lg sec p-3 h-50 border text-white border-gray-700 outline-none"
            spellCheck="false"
            placeholder="Provide a comprehensive description of your recipe"
        />

                <input
                    id="attachments"
                    value=""
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                />

                <div className="flex">
                </div>

                <div className="icons flex text-gray-500 m-2">
                    <label htmlFor="attachments">
                        <div
                            type="button"
                            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Upload image</span>
                        </div>
                    </label>
                    <div className="count ml-auto">
                        <div className="buttons flex">
                            <div
                                className="rounded-md p-1 px-4 font-semibold cursor-pointer text-gray-100 bg-indigo-900 ml-auto"
                            >
                                Post
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
