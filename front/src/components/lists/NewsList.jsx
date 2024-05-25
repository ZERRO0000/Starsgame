import { useEffect, useState, useCallback } from "react";
import "./newslist.css";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import config from "../../params/config";

//https://doka.guide/css/grid-guide/ - гайд по гридам

export default function NewsList({
    collectionName = "game",
    limit,
    paginator = false,
}) {
    const [newsList, setNewsList] = useState({
        header: [],
        body: [],
        footer: [],
        sim: [],
    });

    const [allRatings, setAllRatings] = useState({
        header: [],
        body: [],
        footer: [],
        sim: [],
    });

    const [ready, setReady] = useState(false)

    const fetchNews = useCallback(async () => {
        //let getReq = window.location.search;
        if (collectionName != "" && collectionName != null) {
            let urlRequest = config.fullApi + collectionName + "/";
            let answer = await getFetch(urlRequest, setNewsList);
            let allRatingsReq = config.fullApi + 'rating/';
            let answer2 = await getFetch(allRatingsReq, setAllRatings);

            if(answer && answer2)
                setReady(true);
        }
    }, [collectionName]);

    const myStyles = {
        itemShapes: RoundedStar,
        activeFillColor: "#ffb700",
        inactiveFillColor: "#fbf1a9",
    };

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    async function getFetch(url, callback) {
        const response = await fetch(url);
        const unPreparedData = await response.json();
        const data = {
            header: unPreparedData.head,
            body: unPreparedData.data,
            footer: [],
            sim: unPreparedData.sim,
        };
        callback(data);
        return true;
    }

    function getAllRatings(id) {
        //todo: fix this proiblem
        let ratings = {};

        if(allRatings.body instanceof Array) {
            let arRatings = allRatings.body.filter(item => item.GAME._id === id);
            let count = allRatings.body.length;
            
            ratings.COUNT = count;

            let DETAILING = 0, GRAPHIC = 0, PLOT = 0;
            arRatings.map(item => {
                DETAILING += parseInt(item.DETAILING);
                GRAPHIC += parseInt(item.GRAPHIC);
                PLOT += parseInt(item.PLOT);
            });

            ratings.DETAILING = DETAILING / count;
            ratings.GRAPHIC = GRAPHIC / count;
            ratings.PLOT = PLOT / count;
            ratings.TOTAL = (ratings.PLOT + ratings.GRAPHIC + ratings.DETAILING) / 3
        }

        return ratings;
    }

    function getContent(col, index, sim, schema) {
        let value = "";
        
        value = col;
        let getIndex = 0;
        let curSchema = 0;
        let code = 0;
        
        for (let i in schema) {
            if (getIndex === index) {
                curSchema = schema[i];
                code = i;
            }
            getIndex++;
        }

        if (code === "_id") {
            let ratings = getAllRatings(value);
            value = <div className='rating-info'>
                <div>Оценило: {ratings.COUNT}</div>
                <div>DETAILING: 
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings.DETAILING}
                        readOnly
                        itemStyles={myStyles}
                    />
                </div>
                <div>GRAPHIC: 
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings.GRAPHIC}
                        readOnly
                        itemStyles={myStyles}
                    />
                </div>
                <div>PLOT: 
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings.PLOT}
                        readOnly
                        itemStyles={myStyles}
                    />
                </div>

                <div>TOTAL: 
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings.TOTAL}
                        readOnly
                        itemStyles={myStyles}
                    />
                </div>
            </div>;
        }

        if (code === "TITLE") {
            value = (
                <div className="Author">
                    Игра : <span>{value}</span>
                </div>
            );
        }

        if (code === "DATE") {
            value = (
                <div className="Author">
                    Дата анонса : <span>{value.substring(0, 9)}</span>
                </div>
            );
        }

        if (code === "PUBLISHER") {
            value = (
                <div className="Author">
                    Издатель : <span>{value}</span>
                </div>
            );
        }

        if (code === "GENRE") {
            value = (
                <div className="Author">
                    Жанр : <span>{value}</span>
                </div>
            );
        }

        if (curSchema.type === "Rating") {
            value = (
                <div className={"rating " + code.toLowerCase()}>
                    {curSchema.loc}:
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={col}
                        readOnly
                        itemStyles={myStyles}
                    />
                </div>
            );
        }

        return <>{value !== false && value}</>;
    }

    return (
        <>
            <div className="news-list">
                {ready &&
                    newsList.body.map((row, i) => (
                        <div key={i} className="news-card">
                            {Object.values(row).map((col, index) =>
                                getContent(
                                    col,
                                    index,
                                    newsList.sim,
                                    newsList.header
                                )
                            )}
                        </div>
                    ))}
            </div>
        </>
    );
}
