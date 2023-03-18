import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export const About = () => {

    const handlePicture = () =>
{
    const navigate = useNavigate()
    navigate("/Contact")
}
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <img onClick={handlePicture} src="/src/assets/img/yo.png" className="max-w-sm mx-auto rounded-full shadow-2xl border-4 border-primary" alt="David" />
            <h2 className="text-3xl font-bold leading-tight text-gray-900 my-6">
              Hi! I'm David, your Spanish teacher.
            </h2>
            <p className="text-lg leading-7 text-gray-500 text-justify">
              Hi! My name is David and I was born in Olesa de Montserrat, a small town near Montserrat (a must-visit place!), but I live in Barcelona, where I have been teaching Spanish for more than 5 years. I love languages in general and I enjoy learning them while traveling! 😊
              <br />
              <br />
              The best thing about teaching: I love learning and teaching languages in an international and diverse environment. I believe that makes learning much more interesting and probably easier, as it increases students' motivation to practice. I think communication is the most important and natural skill to develop, and probably the most fun one too, so let's talk as much as we can!
              <br />
              <br />
              Favorite things: martial arts, learning and playing music, playing football, watching Youtube, learning languages.
              <br />
              <br />
              Favorite Spanish word: 'garbeo', which is a colloquial word that means taking a short walk around a city and intentionally getting lost to get to know it better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
