import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/siddhant-sharma-9588611a9/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/SiddhantSharma575",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:siddhantsharma909@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
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
                    LeetCode <SiLeetcode size={30} />
                </>
            ),
            href: "https://leetcode.com/siddhant_sha/",
            style: "rounded-br-md",
        }
    ]
    return (
        <div className="hidden lg:flex flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map((link) => (
                        <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + link.style}>
                            <a href={link.href} className="flex justify-between items-center w-full text-white" download={link.download} target="_blank" rel="noreferrer">
                                {link.child}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks