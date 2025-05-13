function App() {

    let country = [
        {
            cityId: 1,
            cityName: "台北市",
        },
        {
            cityId: 2,
            cityName: "桃園市",
        }
    ]
    return (
        <>
            <button onClick={() => {
                // 將陣列物件轉成字串
                let countryStrying = JSON.stringify(country);
                // 寫入字串到localStorag
                localStorage.setItem('countrys', countryStrying);
            }}>寫入</button>

            <button onClick={() => {
                // 取出localStorage資料
                let getData = localStorage.getItem('countrys');
                // 將字串轉成陣列物件
                let getDataArr = JSON.parse(getData);
                console.log('getDataArr:', getDataArr, typeof (getDataArr));
            }}>讀取</button>
        </>
    )
} export default App