import React from "react";
import '../css/App.css';
import { useState } from "react";

const Tugas9 = () => {

    const [number, setNumber] = useState(1)
    const handleChangeNumber = () => {
        setNumber(number+1)
    }

    return(
        <div className="Container">
            <center><span>{number}</span></center>
            <button onClick={handleChangeNumber}>Tambah</button>
            <p>{number >= 10 ? "State count sudah lebih dari 10!!" : ""}</p>
        </div>
    );
}

export default Tugas9
