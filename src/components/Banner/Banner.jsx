import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
          <img
            src={bookimage}
            alt="Library Books"
            className="max-w-sm rounded-2xl shadow-2xl"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Discover Your Next Great Read
            </h1>
            <p className="py-6 text-gray-700 text-lg">
              Welcome to our online library — a world of stories, knowledge, and discovery.
              Browse thousands of books, explore categories, and build your personal reading journey.
            </p>
            <button className="btn btn-primary btn-lg">Browse Library</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
