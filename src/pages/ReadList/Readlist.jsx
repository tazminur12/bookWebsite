import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredWishlist } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();

    useEffect(() => {
        const readIds = getStoredBook().map(id => parseInt(id));
        const wishIds = getStoredWishlist().map(id => parseInt(id));

        const readBooks = data.filter(book => readIds.includes(book.bookId));
        const wishedBooks = data.filter(book => wishIds.includes(book.bookId));

        setReadList(readBooks);
        setWishList(wishedBooks);
    }, [data]);

    const handleSort = (type) => {
        setSort(type);

        let sorted = [...readList];
        if (type === "pages") {
            sorted.sort((a, b) => a.totalPages - b.totalPages);
        }
        if (type === "ratings") {
            sorted.sort((a, b) => b.rating - a.rating); // Higher rating first
        }

        setReadList(sorted);
    };

    return (
        <div className="w-10/12 mx-auto my-10">
            <details className="dropdown mb-4">
                <summary className="btn m-1">Sort by: {sort ? sort : "Select"}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                </ul>
            </details>

            <Tabs>
                <TabList>
                    <Tab>Read Book list</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-xl font-semibold mb-4">Books I've Read: {readList.length}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {readList.map(book => (
                            <Book key={book.bookId} singleBook={book} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2 className="text-xl font-semibold mb-4">Wishlist Books: {wishList.length}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishList.map(book => (
                            <Book key={book.bookId} singleBook={book} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
