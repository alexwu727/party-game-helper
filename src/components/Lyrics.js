import React from 'react'

function Lyrics({ l }) {
    return (
        <div>
            {
                l.map((line) => {
                    return (
                        <p>{line}</p>
                    );
                })
            }
        </div>
    )
}

export default Lyrics