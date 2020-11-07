import React, { useState, useEffect } from 'react';
import music from '../music/music.mp3';

const SingleColor = ({ rgb, weight, hex, index }) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',');
    const hexValue = `#${hex}`;

    const sound = new Audio(music);
    const playSound = (audio) => {
        audio.play();
    }

    useEffect(() => {
        let timeout = setTimeout(() => {
            setAlert(false);
        }, 1000)
        return () => clearTimeout(timeout);
    }, [alert])

    const handleCopy = () => {
        setAlert(true);
        playSound(sound);
        navigator.clipboard.writeText(hexValue);
    }
    return (
        <div>
            <article
                style={{ backgroundColor: `rgb(${bcg})`, cursor: 'pointer' }}
                onClick={handleCopy}
                className={`color ${index >= 8 && 'color-light'}`} >
                <p>{weight}%</p>
                <p>{hexValue}</p>
                {alert && <span>copyed to clipboard</span>}
            </article>
        </div>
    )
}

export default SingleColor
