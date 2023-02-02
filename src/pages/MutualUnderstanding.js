import React, { useState } from 'react'
import questions from '../data/默契Data'

function MutualUnderstanding() {
    const [q, setQ] = useState("")
    const [showQuestions, setShowQuestions] = useState(false)
    const showAllQuestions = () => {
        setShowQuestions(!showQuestions)
    }
    const getRandom = () => {
        var item = questions[Math.floor(Math.random() * questions.length)];
        setQ(item)
    }
    return (
        <div className='mutualUnderstanding'>
            <h1>默契大考驗</h1>
            <h2>隊內兩人出來，抽一個名詞或動詞，然後倒數五秒後後同時做一個Pose，動作一樣的可以加分。
            </h2>
            <button onClick={showAllQuestions}>顯示題庫</button>
            <div className='questions'>
                {questions.map((question) => {
                    return (
                        <div>
                            {showQuestions ? question : null}
                        </div>
                    );
                })}
            </div>
            <button onClick={getRandom}>抽一題</button>
            <div className='question'>{q}</div>
        </div>
    )
}

export default MutualUnderstanding