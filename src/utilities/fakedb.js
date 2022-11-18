// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

        // console.log(`newqunatity: ${newQuantity}, ShoppingCart: ${shoppingCart[id]}`);
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const addCategoryToDb = a => {

    let category = {};
    const storedCategory = localStorage.getItem('category');
    if (storedCategory) {
        category = JSON.parse(storedCategory);
    }
    else if (storedCategory === null) {
        category = {};
    }


    console.log("category dekhtesi: ", category);
    if (a) {
        const selected = category[a];
        if (selected) {
            category[a] = 0;
        }
        else {
            category[a] = 1;
        }
        for (let x in category) {
            if (x !== a) {
                category[x] = 0;
            }
            else {
                category[x] = 1;
            }
        }
        localStorage.setItem('category', JSON.stringify(category));
    }
    else {
        console.log("category dekhtesina: ", category);
    }

}

const getItemFromLocalDb = () => {
    let shoppingCart = {}
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;

}

const QuantityHandlerFromLocalDb = (id, quantity) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        shoppingCart[id] = quantity;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getItemFromLocalDbByID = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (shoppingCart[id]) {
            return true;
        } else {
            return false;
        }

    }
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart, getItemFromLocalDb, getItemFromLocalDbByID, QuantityHandlerFromLocalDb, addCategoryToDb
}