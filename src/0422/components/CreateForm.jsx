import { useState } from "react"

function CreateForm({ addTodo }) {
    // 建立input內容變數
    // const => 常數
    const [content, setContent] = useState('');
    const handleSumbit = (e) => {
        // 取消網頁預設行為，不然會抓不到資料
        e.preventDefault();
        // 增加todo內容
        addTodo(content);
        // 消空input輸入列
        setContent('');
    }

    return (
        <form className="create-form" onSubmit={handleSumbit}>
            <input
                type="text"
                placeholder="請輸入待辦事項"
                value={content}
                // 雙向綁定
                // 當UI發生內容改變的時候，State會跟著改變
                // 當State發生改變時，UI也會跟著改變
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">加入</button>
        </form>
    )
}
export default CreateForm