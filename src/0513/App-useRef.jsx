import { useRef, useState } from "react";

function App(){
    // const[value,setValue]=useState('');
    // 建立一個useRef的變數
    const inputRef=useRef(null);

    console.log('App 渲染了...');

    const submitHandler=(flag)=>{
        // console.log(value);
        // 傳回被綁定的useRef的物件
        // console.log(inputRef);
        // 查看值
        // console.log(inputRef.current.value);
        // 查類型
        // console.log(inputRef.current.type);
        // 動態改變類型為 password
        inputRef.current.type="password";
        // 查類型
        // console.log(inputRef.current.type);
    }

    const submitHandler2=()=>{
        // 動態改變類型為 text
        inputRef.current.type="text";
        // 查類型
        // console.log(inputRef.current.type);
    }


    return(
        <>
            {/* <input type="text" onChange={(e)=>setValue(e.target.value)} /> */}
            <input type="text" ref={inputRef} />
            <button onClick={submitHandler}>關閉密碼</button>
            <button onClick={submitHandler2}>查看密碼</button>
        </>
    )

}export default App