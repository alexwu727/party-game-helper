import React, { useState } from 'react'
import questions from '../data/LipsData';

function Lips() {
    const [q, setQ] = useState(0)
    const [score, setScore] = useState(0)
    const getNext = () => {
        setQ(q + 1)
    }
    const correct = () => {
        setScore(score + 1)
        getNext()
    }
    const reset = () => {
        setScore(0)
        // setQ(0)
    }
    return (
        <div className='lips'>
            <h1>讀唇語</h1>
            <h2>隊伍派出兩人，一個為猜題的人，此人必須戴上降噪耳機並且聽音樂大過外界聲音。另一個是要利用嘴形讓猜題者知道題目。限時兩分鐘。</h2>
            <div className='score'>{score}</div>
            <div className='btns'>
                <button onClick={correct}>Correct</button>
                <button onClick={getNext}>Skip</button>
                <button onClick={reset}>Reset Score</button>
            </div>
            <div className='question'>{questions[q]}</div>
        </div>
    )
}

export default Lips