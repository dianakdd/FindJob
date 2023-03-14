import React from "react"
import '../css/App.css';

const Tugas8 = (props) => {
    return(
        <div className="Container">
            <div className="Title">Data diri peseta kelas Reactjs</div>
            <br />
            <hr />
            <ul>
                <li><b>Nama Lengkap :</b> {props.name}</li>
                <li><b>Email :</b> {props.email}</li>
                <li><b>Batch Pelatihan :</b> {props.batch}</li>
            </ul>
        </div>
    );
    
}

export default Tugas8
