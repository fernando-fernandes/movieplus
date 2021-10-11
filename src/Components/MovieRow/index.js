import React, { useState } from 'react'
import './styles.scss'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'


export default function MovieRow({ title, items }) {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArea = () => {
        let x = scrollX + Math.round( window.innerWidth / 2 );

        if (x > 0) {
            x = 0
        }

        setScrollX(x)
    }

    const handleRightArea = () => {
        let x = scrollX - Math.round( window.innerWidth / 2 );
        let listW = items.results.length * 150;

        if ( (window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 64
        }
        
        setScrollX(x)
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArea}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--right" onClick={handleRightArea}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listArea">

                <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length  * 150}}>

                    {
                        items.results.length > 0 &&
                        items.results.map((item, key) => (

                            <div className="movieRow--item" key={key}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
