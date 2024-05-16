import { useEffect, useState, useCallback } from 'react';
import './ratinglist.css';
import config from '../../params/config';

export default function RatingList({collectionName, limit, paginator = false}) {
    const [ratinglist, setRatingList] = useState([]);

    const fetchNews = useCallback(async () => {
        const response = await fetch(config.fullApi + collectionName +'/');
        const answer = await response.json();
        setRatingList(answer.data);
    }, []);

    useEffect(
        () => {fetchNews()}, [fetchNews]
    );

    return (
        <>
        <div className='news-list'> 
            {
                ratinglist && ratinglist.map(el => (
                    <div className='news-card'>
                        <h2>{el.TITLE}</h2>
                        <span>{el.PUBLISHER}</span>
                    </div>
                ))
            }
        </div>
        </>
    )
}