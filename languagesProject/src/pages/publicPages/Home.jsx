import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
export function Home() {
    const navigate = useNavigate();

    const handleAbout = () => {
        navigate("/About");
    }

    const handleCourse = () => {
        navigate("/Courses");
    }

    return (
        <div>
            <Navbar />
            <div>
                <button className="bg-gradient-to-r from-red-320 to-yellow-320 text-white py-2 px-4 rounded-lg">
                    Tailwindcss
                </button>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row text-justify">
                    <img src="\src\assets\img\clase1.jpg" className="max-w-sm h-auto rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Experienced Spanish Tutor</h1>
                        <p className="py-3 max-w-sm h-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button onClick={handleAbout} className="btn btn-primary">More About Me</button>
                    </div>
                </div>

            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="\src\assets\img\clase2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="max-w-sm">
                        <h1 className="text-2xl font-bold">For All levels and Ages!</h1>
                        <p className="py-3 max-w-sm h-auto text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button onClick={handleCourse} className="btn btn-primary">Courses</button>
                    </div>


                </div>
            </div>
        </div>
    );
} 