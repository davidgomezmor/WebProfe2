import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { MyCalendar } from "../../components/Calendar";
import { LogOut } from "../publicPages/logOut";
import Navbar from "../../components/Navbar";


export const HomeUser = () => {
    const navigate = useNavigate();
    const { firstName, surname, login, email, setEmail, password, setPassword, error, setError, currentUser, setCurrentUser } =
        useContext(AuthContext);
    console.log(currentUser)

    const [date, setDate] = useState()


    return (
        <>
          <Navbar />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-8">
                You are logged in
              </h1>
              <div className="mx-auto max-w-md">
                <h3 className="text-2xl font-bold leading-tight text-gray-900 mb-4">
                  Choose Date and time for next class:
                </h3>
                <MyCalendar />
              </div>
              <div className="mt-8">
                <LogOut />
              </div>
            </div>
          </div>
        </>
      );
    };