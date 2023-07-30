import React from 'react'
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
// import installNode from "../assets/portfolio/installNode.jpg"
// import navbar from "../assets/portfolio/navbar.jpg"
// import reactParallax from "../assets/portfolio/reactParallax.jpg"
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import medicines from "../assets/medicine.png"
import bid from "../assets/bid.png"
import crypt from "../assets/crypt.png"
import cros from "../assets/cros.png"
import foodOrder from "../assets/FoodOrder.jpg"


const PortFolio = () => {

    const portfollios = [
        {
            id: 1,
            src: medicines,
            title: "Online Medicines Buying App",
            code: "https://github.com/SiddhantSharma575/mediCall",
            demo: "https://medi-call-ta5c.vercel.app/"
        },
        {
            id: 2,
            src: bid,
            title: "Online Bidding App",
            code: "https://github.com/SiddhantSharma575/online_bidding_system",
            demo: "https://github.com/SiddhantSharma575/online_bidding_system"
        },
        {
            id: 3,
            src: foodOrder,
            title : "Online Food Ordering Mobile App",
            code : "https://github.com/SiddhantSharma575/food_app_native",
            demo : "https://github.com/SiddhantSharma575/food_app_native"
        },
        {
            id: 4,
            src: crypt,
            title: "Crypto Currency Tracker App",
            code: "https://github.com/SiddhantSharma575/crypto-tracker-app",
            demo: "https://cryptoadda.netlify.app/"
        },
        {
            id: 5,
            src: cros,
            title: "Cross-Share App",
            code: "https://github.com/SiddhantSharma575/cross_share",
            demo: "https://github.com/SiddhantSharma575/cross_share",

        },
        {
            id: 6,
            src: reactWeather,
            title: "Weather App",
            code: "https://github.com/SiddhantSharma575/weather_type",
            demo: "https://github.com/SiddhantSharma575/weather_type",
        }
    ]
    return (
        <div
            name="projects"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfollios.map(({ id, src, title, code, demo }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <p className="text-center mt-3 p-4">{title}</p>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(demo, "_blank")}>
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(code, "_blank")}>
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortFolio