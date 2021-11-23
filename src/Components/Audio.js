import React, { useState, useEffect } from "react";
import music from "./Video/backdrop.mp3";

const AudioP = () => {
    const [btn, setBtn] = useState("fa-pause");
    const [isPlaying, setState] = useState(true);
    const [audio] = useState(new Audio(music));

    useEffect(() => {
        isPlaying ? audio.play() : audio.pause();
    },
        [isPlaying, audio]
    );
    const togglePlay = () => {
        if (btn === "fa-pause") {
            setBtn("fa-play");
            setState(false);
        } else {
            setBtn("fa-pause");
            setState(true);
        }
    }
    
    return (
        <>
            <div className="float" type="button" onClick={togglePlay}>
                <i className={btn + ` fa my-float`}></i>
                <audio src={music} autoPlay={true} loop={true} />
            </div>
        </>
    );
};

export default AudioP;