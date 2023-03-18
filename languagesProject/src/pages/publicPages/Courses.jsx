import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export const Courses = () => {


  const navigate = useNavigate();
  const handleCourse = () => {
    navigate("/Login");
  }
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="card shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-lg text-justify font-bold mb-2">Beginner Spanish Course</h2>
            <p className="text-gray-600 mb-2">Learn the basics of Spanish with our beginner course.</p>
            <p className="text-gray-600 mb-2">Duration: 8 weeks</p>
            <p className="text-gray-600 mb-2">Price: 99 €</p>
            <button onClick={handleCourse} className="btn btn-accent">Enroll Now</button>
          </div>
        </div>

        <div className="card shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-lg text-justify font-bold mb-2">Intermediate Spanish Course</h2>
            <p className="text-gray-600 mb-2">Take your Spanish skills to the next level with our intermediate course.</p>
            <p className="text-gray-600 mb-2">Duration: 12 weeks</p>
            <p className="text-gray-600 mb-2">Price: 149 €</p>
            <button onClick={handleCourse} className="btn btn-accent">Enroll Now</button>
          </div>
        </div>

        <div className="card shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-lg text-justify font-bold mb-2">Advanced Spanish Course</h2>
            <p className="text-gray-600 mb-2">Become fluent in Spanish with our advanced course.</p>
            <p className="text-gray-600 mb-2">Duration: 16 weeks</p>
            <p className="text-gray-600 mb-2">Price: 199 €</p>
            <button onClick={handleCourse} className="btn btn-accent">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
