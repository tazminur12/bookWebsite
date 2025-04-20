// For Reading List
const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readingList");
    if (storedBookSTR) {
        return JSON.parse(storedBookSTR);
    } else {
        return [];
    }
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("This book is already in your Reading List.");
    } else {
        storedBookData.push(id);
        localStorage.setItem("readingList", JSON.stringify(storedBookData));
    }
};

// For Wishlist
const getStoredWishlist = () => {
    const storedWishSTR = localStorage.getItem("wishlist");
    if (storedWishSTR) {
        return JSON.parse(storedWishSTR);
    } else {
        return [];
    }
};

const addToWishlistDB = (id) => {
    const storedWishlist = getStoredWishlist();
    if (storedWishlist.includes(id)) {
        alert("This book is already in your Wishlist.");
    } else {
        storedWishlist.push(id);
        localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    }
};

export {
    addToStoredDB,
    getStoredBook,
    addToWishlistDB,
    getStoredWishlist
};
