import { useState, useEffect, useCallback } from "react";
import Form from "../form/Form.jsx";
import Table from "../table/Table.jsx"; 
import Index from '../index/Index.jsx';
import HeaderTag from "../headertag/HeaderTag.jsx"; 
import Search from "../search/Search.jsx";
import NewsList from "../news/NewsList.jsx";


export default function Container({ curPath }) {
    const [row, setRow] = useState('');
    const [collectionName, setCollectionName] = useState(null);
    const [query, setQuery] = useState('');
    const params = (new URL(document.location)).searchParams;
    const edit = params.get('edit');

    const handleUpdateRow = (value) => {
        if(value.data)
            setRow(value.data[0]);
    }

    const handleSearch = (value) => {
        if(value)
            setQuery(value);
    }

    const setCollection = useCallback(async () => {
        if(curPath!=='index')
            setCollectionName(curPath);
    })

    useEffect(
        () => { 
            setCollection();
        }, [setCollection]
    )

    return ( 
        <div className={'container'}>
            <h1>
                {collectionName && <HeaderTag name={collectionName}/>}
            </h1>

            {collectionName && <NewsList collectionName={collectionName}></NewsList>}
            

            { !collectionName && <Index></Index>}

            {
                edit === 'y' && 
                    <>
                    { collectionName && <Search onChange={handleSearch} nameCollection={collectionName}/>}
                    {collectionName && <Form arValue={row} nameForm={ collectionName }></Form>}
                    {collectionName && <Table onChange={handleUpdateRow} nameTable={ collectionName } query={query}></Table>}
                    </>
            }

        </div>
    )
}