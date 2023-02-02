import React from 'react'
import LyricPlayCard from '../components/LyricPlayCard'
import questions from '../data/LyricsData'
function Lyric() {
    return (
        <div>
            <h1>這首我知道</h1>
            <h2>主持人準備數首歌曲，使用google翻譯唸歌詞，各隊伍搶答，答對歌名加兩分，再答對歌手加一分，若歌手答錯其他隊伍可以搶答。
            </h2>
            <div>
                {questions.map((question) => {
                    return (
                        <LyricPlayCard key={question.ans} question={question} />
                    );
                })}
            </div>
        </div>
    )
}

export default Lyric