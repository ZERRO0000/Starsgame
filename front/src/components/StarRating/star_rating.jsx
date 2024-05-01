import { useState } from 'react';
import s from './star_rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRating({ 
    count = 5,
    icon = faStar,
    activeStyle = { color: 'gold' },
    currentItem,
    setCurrentItem
}) {

    const stars = Array(count).fill(0);

    
    const [hoverItem, setHoverItem] = useState();

    return (
        <div className={'stars ' + s.stars}>
            {
                stars.map((_, index) => {
                    const currentStyle = index <= currentItem ? activeStyle : {}
                    const hoverStyle = index <= hoverItem ? activeStyle : {}
                    return (
                        <div
                            key={index}
                            style={{ ...currentStyle, ...hoverStyle }}
                            onMouseMove={()=> setHoverItem(index)}
                            onMouseOut={()=>setHoverItem()}
                            onClick={()=>setCurrentItem(index)}
                        >
                            <FontAwesomeIcon icon={icon} style={{ width: 20, height: 20 }} />
                        </div>
                    )
                })
            }
        </div>
    )
}