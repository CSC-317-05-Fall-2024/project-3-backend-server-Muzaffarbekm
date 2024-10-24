const restaurantData = [
    {
        name: "The Fish Express",
        phone: "(808) 245-9918",
        address: "3343 Kuhio Hwy, Lihue, HI 96766",
        photo: "/images/fish-express.png"
    },
    {
        name: "Hanalei Dolphin Restaurant",
        phone: "(808) 826-6113",
        address: "5-5016 Kuhio Hwy, Hanalei, HI 96714",
        photo: "/images/hanalei-market.jpg"
    },
    {
        name: "Keoki's Paradise",
        phone: "(808) 742-7534",
        address: "2360 Kiahuna Plantation Dr, Koloa, HI 96756",
        photo: "/images/keokis-paradise-exterior.jpg"
    },
    {
        name: "Beach House Restaurant",
        phone: "(808) 742-1424",
        address: "5022 Lawai Rd, Koloa, HI 96756",
        photo: "/images/beach-house.jpg"
    },
    {
        name: "Hukilau Lanai",
        phone: "(808) 822-0600",
        address: "520 Aleka Loop, Kapaa, HI 96746",
        photo: "/images/hukilau-lanai.jpg"
    },
    {
        name: "Kalypso Island Bar & Grill",
        phone: "(808) 826-9700",
        address: "5-5156 Kuhio Hwy, Hanalei, HI 96714",
        photo: "/images/kalypso.jpeg"
    }
];


let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
};


// Get a restaurant by id
const getRestaurant = (id) => {
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
export default { restaurantData };