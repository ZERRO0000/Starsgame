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
            <img src="https://ixbt.com/img/r30/00/02/27/76/shot12.jpg"></img>
        </>
    );
}