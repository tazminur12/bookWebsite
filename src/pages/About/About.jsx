import React from 'react';

const About = () => {
    return (
        <div className="w-10/12 mx-auto my-10 space-y-4">
            <h1 className="text-3xl font-bold text-center">About Boi Library 📚</h1>
            <p className="text-lg text-gray-700">
                Boi Library is a modern web application that helps book lovers manage their personal reading journey.
                Whether you're an avid reader or just getting started, this platform allows you to browse books, add them to your wishlist,
                and keep track of what you’ve read.
            </p>
            <p className="text-lg text-gray-700">
                Our goal is to make reading more organized and enjoyable. With features like sorting by rating or page count,
                tagging books by genre, and detailed book reviews, Boi Library helps you stay motivated and make smarter reading choices.
            </p>
            <p className="text-lg text-gray-700">
                Built using React, Tailwind CSS, and DaisyUI — this project is designed with performance and simplicity in mind.
            </p>
        </div>
    );
};

export default About;
