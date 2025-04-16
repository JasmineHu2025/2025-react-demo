function App(){

    (async ()=>{
        // 取得遠端資料
        const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
        // 查看是否連上json
        // console.log(data);
        
        // 解構各縣市的氣象資料
        const {location}=data.data.cwaopendata.dataset;
        console.log(location);
    })();

    return(
        <>
        
        </>
    )
}
export default App