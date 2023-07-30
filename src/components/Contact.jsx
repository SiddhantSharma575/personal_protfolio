import React, { useEffect } from 'react'
import { useState } from 'react'

const Contact = () => {
    const [userDetails,setUserDetails] = useState({
        name : "",
        email : "",
        message: ""                
    })
    const [isError,setIsError] = useState(true)
    useEffect(() => {
        if(userDetails.name === "" || userDetails.email === "" || userDetails.message === "") {
            setIsError(true)
        }
    }, [isError,userDetails.name,userDetails.email,userDetails.message])
    return (
        <div
            name="contact"
            className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8 pt-15 mt-64">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className=" flex justify-center items-center">
                    <form
                        action="https://getform.io/f/bcf71a5a-de13-4b08-bea6-47ed999a0bae"
                        method="POST"
                        className=" flex flex-col w-full md:w-1/2"
                    >
                        <input
                            value={userDetails.name}
                            onChange={(e) => {
                                if(e.target.value === "") {
                                    setIsError(true)
                                    setUserDetails({...userDetails, name : e.target.value})
                                }else{
                                    setIsError(false)
                                    setUserDetails({...userDetails, name : e.target.value})
                                }
                            }}
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            value={userDetails.email}
                            onChange={(e) => {
                                if(e.target.value === "") {
                                    setIsError(true)
                                    setUserDetails({...userDetails, email : e.target.value})
                                }else{
                                    setIsError(false)
                                    setUserDetails({...userDetails, email : e.target.value})
                                }
                            }}
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            value={userDetails.message}
                            onChange={(e) => {
                                if(e.target.value === "") {
                                    setUserDetails({...userDetails, message : e.target.value});
                                    setIsError(true)
                                }else{
                                    setIsError(false)
                                    setUserDetails({...userDetails, message : e.target.value})
                                }
                            }}
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>
                          {isError && <p className="text-red-600 self-center mt-5">Please fill all the details</p>}
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" disabled={isError}>
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact