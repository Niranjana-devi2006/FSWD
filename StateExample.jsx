import {useState} from 'react';

export default function StateExample()
{
    const[count,setCount]=useState(0);
    function buttonClick()
    {
        setCount(count+1);
    }
    return(<>
    <h1>This is state example</h1>
   
    <button onClick={buttonClick} style={{backgroundcolor:"blue" ,color:'black'}}>visitor count={count}</button>
    </>);
}