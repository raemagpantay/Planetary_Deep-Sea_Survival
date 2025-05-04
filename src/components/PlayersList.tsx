"use client";

import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const PlayersList = () => {
    interface Player {
        name: string;
        [key: string]: any; // Optional: To allow additional properties
    }

    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const playersRef = ref(database, "players");
        const unsubscribe = onValue(playersRef, (snapshot) => {
            const data = snapshot.val();
            setPlayers(data ? Object.values(data) : []);
        });

        return () => unsubscribe();
    }, []);

    return (
        <ul>
            {players.map((player, index) => (
                <li key={index}>{player?.name || "Unknown Player"}</li>
            ))}
        </ul>
    );
};

export default PlayersList;