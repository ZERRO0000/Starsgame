import { useEffect, useState, useCallback } from 'react';
import './ratingnewslist.css';
import config from '../../params/config';

export default function RatingNewsList({collectionName, limit, paginator = false}) {
    const [ratingnews, setRatingNews] = useState([]);

    const fetchNews = useCallback(async () => {
        const response = await fetch(config.fullApi + collectionName +'/');
        const answer = await response.json();
        setRatingNews(answer.data);
    }, []);

    useEffect(
        () => {fetchNews()}, [fetchNews]
    );

    return (
        <>
        <div className='rating-news-list'>   
            {
                ratingnews && ratingnews.map(el => (
                    <div className='rating-news-card'>
                        <h2>{el.TITLE}</h2>
                        <span>{el.PUBLISHER}</span>
                    </div>
                ))
            }
        </div>
        </>
    )
}