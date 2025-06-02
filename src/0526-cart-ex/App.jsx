import "./App.css"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Carts from "./components/Cart"

export default function App() {
    return (
        <>
            <div className="wrap">
                {/* 導覽列(navbar) */}
                <Navbar />

                <div className="container mt-4">
                    {/* 外層格線 */}
                    <div className="row">
                        {/* 產品列表區(左)(卡片元件) */}
                        <div className="col-md-7">
                            <Products />
                        </div>
                        {/* 購物清單區(右)(表格) */}
                        <div className="col-md-5">
                            <Carts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}