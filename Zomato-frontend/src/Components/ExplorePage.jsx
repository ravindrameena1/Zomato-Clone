import React from "react";
import { useNavigate } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Spicy Treat",
    image: "/SpicyTreat.jpg",
    cuisine: "Indian, Chinese",
    location: "Jaipur",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Burger Hub",
    image: "/Burger.avif",
    cuisine: "American",
    location: "Delhi",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Pizza Villa",
    image: "/pizzza.avif",
    cuisine: "Italian",
    location: "Mumbai",
    rating: 4.4,
  },
];

const ExplorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        Explore Restaurants 🍽️
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {restaurants.map((res) => (
          <div
            key={res.id}
            onClick={() => navigate(`/restaurant/${res.id}`)}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-full h-48 object-cover "
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{res.name}</h2>
              <p className="text-gray-600">{res.cuisine}</p>
              <p className="text-sm text-gray-500">{res.location}</p>
              <p className="text-yellow-500 font-bold mt-2">⭐ {res.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
