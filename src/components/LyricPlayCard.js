import React, { useState } from 'react';
import Lyrics from './Lyrics';

function LyricPlayCard({ question }) {
    const [showLyrics, setShowLyrics] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    var audio = new Audio();
    const play = (e) => {
        audio.src = require(`../data/audios/${question.ans}.mp3`)
        e.preventDefault();
        audio.play();
    }
    const pause = (e) => {
        e.preventDefault();
        audio.pause();
    }
    const toggleLyrics = (e) => {
        setShowLyrics((showLyrics) => !showLyrics)
    }
    const toggleAns = (e) => {
        setShowAnswer((showAnswer) => !showAnswer)
    }

    return (
        <div className='lyricPlayCard'>
            <p>{question.id}</p>
            <div className='btns'>
                <button onClick={play}>
                    <img src='play-button.png' alt='play'></img>
                </button>
                <button onClick={pause}>
                    <img src='pause.png' alt='pause'></img>
                </button>
                <button onClick={toggleLyrics}>
                    <img src='show.png' alt='show'></img>
                </button>
                <button onClick={toggleAns} className="ansBtn">
                    Ans
                </button>
            </div>
            <p>
                {showLyrics ? <Lyrics l={question.lyrics} /> : null}
            </p>
            <div className='ans'>
                {showAnswer ? `${question.ans} - ${question.artist}` : null}
            </div>
        </div>
    )
}

export default LyricPlayCard