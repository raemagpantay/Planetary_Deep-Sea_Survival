"use client";

import React, { useEffect, useState } from "react";
import { database } from "@/firebaseConfig";
import { ref, onValue } from "firebase/database";

type Player = {
  id: string;
  name: string;
};

export default function PlayersList() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const playersRef = ref(database, "players");
    const unsubscribe = onValue(playersRef, (snapshot) => {
      const data = snapshot.val();
      const playersArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setPlayers(playersArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="players-list p-6 bg-gray-800 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id} className="mb-2">
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
}