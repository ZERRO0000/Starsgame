import { useEffect, useState, useCallback } from 'react';
import './newslist.css';
import config from '../../params/config';

export default function NewsList({collectionName, limit, paginator = false}) {
    const [news, setNews] = useState([]);

    const fetchNews = useCallback(async () => {
        const response = await fetch(config.fullApi + collectionName +'/');
        const answer = await response.json();
        console.log(answer)
        setNews(answer.data);
    }, []);

    useEffect(
        () => {fetchNews()}, [fetchNews]
    );

    return (
        <>
        <h2>Мобы</h2>
        <div className='news-list'>   
            {
                news && news.map(el => (
                    <div className='news-card'>
                        <img src={'./' + el.IMAGE} alt={el.TITLE} />
                        <h2>{el.TITLE}</h2>
                        <span>{el.PUBLISHER}</span>
                    </div>
                ))
            }
        </div>
        </>
    )
}