"use client";

import React, { useState } from "react";

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(review?.likes || []);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes.filter((email) => email !== "you@mail.com"));
      setLiked(false);
    } else {
      setLikes([...likes, "you@mail.com"]);
      setLiked(true);
    }
  };

  if (!review) return null;

  // Format date
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-3">
      {/* User info */}
      <div className="flex items-center gap-3">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{review.user}</h4>
          <p className="text-sm text-gray-500">{review.email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.955c.3.922-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.196-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118l-3.36-2.44c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.287-3.955z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-sm">{review.review}</p>

      {/* Likes & Date */}
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition ${
            liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          ❤️ {likes.length}
        </button>

        <span className="text-gray-400 text-xs">{formattedDate}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
