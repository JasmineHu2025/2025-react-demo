import axios from "axios"
import { useEffect, useState } from "react";

export default function App() {

    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "DR7Hxnwg8cl0B_NEj2WYoRJDELbVFmgb1t3pVEPZV_Y";
    const [filterString, setFilterString] = useState('cat');

    // 存放篩選後的資料
    const [jsonData, setJsonData] = useState([]);

    // 建立非同步方法，取得遠端資料
    const getPhotos = async () => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);

            // 將資料寫入陣列jsonData
            setJonsData(result.data.results);
            console.log(jsonData);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getPhotos();
    },[])

    return (
        <>
            <h1>取得遠端資料</h1><hr />
            
        </>
    )
}