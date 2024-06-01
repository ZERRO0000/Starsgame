import React, { useState } from "react";
import './style.css';


export default function ChooseGame({
    collectionName = "game",
    limit,
    paginator = false,
}) {

    const [chooseGame, setChooseGame] = useState({
        header: [],
        body: [],
        footer: [],
        sim: [],
    });



    return (
        <>
            <img src=''></img>
        </>
    );
}