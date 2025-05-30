import img0408a from './assets/img0408/w1200.jpeg'
import img0408b from './assets/img0408/w1200-2.jpeg'

function App() {
    return (
        <>
            <div id="container">
                <h1>高雄親子景點再＋1！「臺鐵機廠」變身全台最大室內遊樂園，30項免費遊樂設施免費玩，2025年底開放！</h1>
                <img className='img' src={img0408a} alt="" />
                <p>臺鐵「高雄機廠」經過近十年的討論後，終於在今年 2 月審議通過，這個近 32 公頃的工業區即將在今年底迎來大變身，未來將變更為結合特文區、公園與社會福利用地，並且將打造全台最大室內全齡夢幻遊樂園，不但有將近 30 項遊樂設施，且全區都不需要付費，勢必能成為高雄親子假日放鬆放風新去處。</p>
                <p>延伸閱讀：高雄全新「五大地標」搶先看！小港國際機場新航廈、鳳山空中鳳城、高雄新車站⋯即將亮相</p>
                <h2>臺鐵高雄機廠大變身</h2>
                <img className='img' src={img0408b} alt="" />
                <p>臺鐵高雄機廠位於原高雄縣與高雄市的交界，橫跨鳳山、苓雅與前鎮地區，並在高雄縣市合併後成為核心精華土地，這塊近 32 公頃的工業區昔為運輸維修火車車廂打造的封閉場域，卻因為影響周邊發展與交通動線，加上配合高雄市區鐵路地下化計畫、高雄捷運環狀輕軌工程及整個區域發展，而將工業區遷建至潮州，經過多年的都市變更審議，原來閒置工業區也將轉型為特定文化休閒專用區，不但維持鐵道紋理也保留全棟貨車工廠與移車台等，並因應地方需求增設道路、停車場、公園等公共設施。</p>
            </div>
        </>
    )
}

export default App