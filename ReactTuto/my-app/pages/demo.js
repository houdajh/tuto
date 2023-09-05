import { useEffect, useState } from "react"

export default function demo(){

    const [text1,setText1] =useState('first');
    useEffect(() => {
        document.title = `${text1.length}`;
      }, [text1]);
    const [text2,setText2] =useState('last');


    return(
        <div className="container">
            <h3>hii</h3>
            <input onChange={(e)=> setText1(e.target.value)} value={text1}></input>
            <hr/>
            <input onChange={(e)=> setText2(e.target.value)} value={text2}></input>
            <hr/>
            <h3>
                <i>
                </i>{text1} {text2}
            </h3>
        </div>
    )
}