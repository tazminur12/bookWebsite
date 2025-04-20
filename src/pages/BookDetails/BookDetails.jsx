import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB, getStoredBook, addToWishlistDB, getStoredWishlist } from '../../utility/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === parseInt(id));

    if (!singleBook) {
        return <div>Book not found.</div>;
    }

    const {
        bookName,
        author,
        image,
        genre,
        review,
        tags,
        pageCount,
        publisher,
        yearOfPublishing,
        rating
    } = singleBook;

    const handMarkedAsRead = () => {
        const numericId = parseInt(id);
        const alreadyRead = getStoredBook().includes(numericId);

        if (alreadyRead) {
            MySwal.fire({
                icon: 'warning',
                title: 'Already Marked',
                text: 'You have already marked this book as read!',
            });
        } else {
            addToStoredDB(numericId);
            MySwal.fire({
                icon: 'success',
                title: 'Marked as Read',
                text: `"${bookName}" has been added to your read list.`,
            });
        }
    };

    const handleAddToWishlist = () => {
        const numericId = parseInt(id);
        const alreadyInWishlist = getStoredWishlist().includes(numericId);

        if (alreadyInWishlist) {
            MySwal.fire({
                icon: 'info',
                title: 'Already in Wishlist',
                text: 'This book is already in your wishlist.',
            });
        } else {
            addToWishlistDB(numericId);
            MySwal.fire({
                icon: 'success',
                title: 'Added to Wishlist',
                text: `"${bookName}" has been added to your wishlist.`,
            });
        }
    };

    return (
        <div className="w-11/12 mx-auto my-10 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex justify-center items-center">
                <img className="w-72 shadow-lg" src={image} alt={bookName} />
            </div>
            <div className="md:w-1/2 space-y-4">
                <h1 className="text-3xl font-bold underline">{bookName}</h1>
                <p className="text-gray-700 font-medium">By: {author}</p>
                <p className="font-semibold">{genre}</p>

                <div>
                    <p><strong>Review :</strong> {review}</p>
                </div>

                <div className="flex gap-2 flex-wrap">
                    <span className="font-semibold">Tag</span>:
                    {tags.map((tag, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="space-y-1">
                    <p><strong>Number of Pages:</strong> {pageCount}</p>
                    <p><strong>Publisher:</strong> <span className="font-bold">{publisher}</span></p>
                    <p><strong>Year of Publishing:</strong> {yearOfPublishing}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                </div>

                <div className="flex gap-4 pt-4">
                    <button onClick={handMarkedAsRead} className="btn btn-accent">Mark as Read</button>
                    <button onClick={handleAddToWishlist} className="btn btn-info">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
