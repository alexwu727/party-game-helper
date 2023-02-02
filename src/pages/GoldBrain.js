import React, { useState } from 'react'
import questions from '../data/GoldBrainData'

function GoldBrain() {
    const [c, setC] = useState(0)
    const [q, setQ] = useState("")
    const categories = ["動物", "歌曲", "地名", "人名(虛擬也可)", "水果"]
    const getRandom = () => {
        var item = questions[Math.floor(Math.random() * questions.length)];
        setQ(item)
    }
    const nextCategory = () => {
        setC(c + 1 <= 4 ? c + 1 : 0)
    }
    return (
        <div className='goldBrain'>
            <h1>金頭腦</h1>
            <h2>主持人提供一個類別然後抽一個注音或英文字母，參加隊伍搶答以該注音或英文字母開頭且為該類別的字詞。</h2>
            <div onClick={nextCategory} className='category'>{categories[c]}</div>
            <button onClick={getRandom}>抽一題</button>
            <div className='question'>{q}</div>
        </div>
    )
}

export default GoldBrain