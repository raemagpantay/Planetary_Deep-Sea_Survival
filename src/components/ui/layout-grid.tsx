"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 max-w-7xl mx-auto">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={cn(
            card.className,
            "relative overflow-hidden rounded-lg shadow-md"
          )}
        >
          <motion.img
            src={card.thumbnail}
            alt={`Card ${card.id}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-white text-lg font-bold">{card.content}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

