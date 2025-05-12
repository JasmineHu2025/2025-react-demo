import { useContext } from "react";
import { createContext, useState } from "react";

function App() {
    // 建立共用環境區域
    const UserContext = createContext({});
    // 建立使用者變數
    const [usename, setUsername] = useState('demo');
    // 建立登入鈕的控制
    const [isLogin, setIsLogin] = useState(false);
    // 建立登入元件
    const LoginFrom = () => {
        // 因為要被放在共用區，所以要搬到App元件用
        const { } = useContext(UserContext);
    }
    // 登入後的歡迎元件

    return (
        <h1>Hi, xxx</h1>
    )
} export default App