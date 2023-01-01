import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"

const PersonalLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/siddhant-sharma-9588611a9/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/SiddhantSharma575",
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:siddhantsharma909@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: "rounded-br-md",
            download: true
        },
        {
            id: 5,
            child: (
                <>
                    <SiLeetcode size={30} />
                </>
            ),
            href: "https://leetcode.com/siddhant_sha/",
            style: "rounded-br-md",
        }
    ]
    return (
        <div name="links" className="bg-gradient-to-b from-gray-800 to-black">
            <div className="lg:ml-48">
                <p className="text-4xl font-bold border-b-4 p-2 inline text-white">
                    Personal Links
                </p>
            </div>
            <div>
                <ul className="flex justify-center p-6">
                    {
                        links.map((link) => (
                            <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4" + link.style}>
                                <a href={link.href} className="flex justify-between items-center w-full text-white" download={link.download} target="_blank" rel="noreferrer">
                                    {link.child}
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default PersonalLinks