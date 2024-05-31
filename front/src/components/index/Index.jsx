import React, { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import '../table/style.css';

export default function Index() {
    const [table, setTable] = useState({
        body: []
    });

    const [loading, setLoading] = useState(false);

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.fullApi + 'collections/get/');
        const unPreparedData = await response.json();

        let labels = [];
        let numbers = [];
        let indexes = [];

        unPreparedData.forEach(item => {
            labels.push(item.TITLE.split('.')[1]);
            numbers.push(item.DOCUMENTS);
            indexes.push(item.INDEXES);
        })

        setTable({
            body: unPreparedData
        });
        setLoading(false);
    }, []);

    useEffect(
        () => {fetchTable()}, [fetchTable]
    );

    return (
        <>
        <table cellPadding={0} cellSpacing={0} className="simple-table">
            <thead>
                <tr>
                    <th>Название коллекции</th>
                    <th>Индексы</th>
                    <th>Кол-во документов</th>
                </tr>
            </thead>
            <tbody>
                {loading && <tr><td>Loading...</td></tr>}

                {
                    !loading && table.body.map((row, index) => (
                        <tr key={index}>
                            { 
                                Object.values(row).map((col, key) => (
                                    <td key={key}>{col}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}