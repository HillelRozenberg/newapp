import './index.css'
import React, { useState } from "react";

const KeWordE = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',]
const KeWordH = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת',]





const Project = () => {
    const [changers, setChangers] = useState(false)
    const KeWord = changers ? KeWordE : KeWordH;
    const delt = changers ? "delite" : "מחק";
    const deliteAll = changers ? "deliteAll" : "נקה";
    const change = changers ? "עברית" : "english";
    const [fontSize, setFontSize] = useState(20)
    
    const color=null

    const changeLangh = () => setChangers(!changers)
    const [inText, setIntext] = useState([]);
    function clickhandler(char) {
        
        const newArr = [...inText, char];
        setIntext(newArr)
    }
    function clickDelite(del) {
        const newArr2 = []
        setIntext(newArr2)
    }
    function clickDelite2(del2) {
        let newArr3 = [...inText]
        newArr3.pop()
        setIntext(newArr3)
    }


    return (
        <div>
            <div className="myInput" style={{fontSize:`${fontSize}px`}} > {inText} </div>
            {KeWord.map((item, idx) => <button onClick={() => clickhandler(item)} className="myStyle" key={idx}> {item} </button>)}
            <button className="myStyle" onClick={changeLangh}>{change}</button>
            <button className="myStyle" onClick={() => clickDelite()}>{delt}</button>
            <button className="myStyle" onClick={() => clickDelite2()}>{deliteAll}</button>
            <button className="myStyle" onClick={() => { setFontSize(fontSize + 4) }}>+</button>
            <button className="myStyle" onClick={() => { setFontSize(fontSize - 4) }}>-</button>
            <button className="space" onClick={() => clickhandler("\xa0")}>space</button>
            {/* <button onClick={() => color={color:red}}>space</button> */}
           

        </div>
    )
}
export default Project




