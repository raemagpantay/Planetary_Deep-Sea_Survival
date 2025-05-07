"use client";

import React from "react";
import { LayoutGrid } from "./layout-grid";

const cards = [
  {
    id: 1,
    content: <div>Forest Path</div>,
    className: "col-span-4 row-span-2", // Large image
    thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop",
  },
  {
    id: 2,
    content: <div>Misty Forest</div>,
    className: "col-span-2 row-span-2", // Medium image
    thumbnail: "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 3,
    content: <div>Wooden House</div>,
    className: "col-span-3 row-span-1", // Small image
    thumbnail: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 4,
    content: <div>Mountain River</div>,
    className: "col-span-3 row-span-1", // Small image
    thumbnail: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop",
  },
];

export default function LayoutGridDemo() {
  return (
    <section className="py-20 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Game Gallery
      </h2>
      <LayoutGrid cards={cards} />
    </section>
  );
}