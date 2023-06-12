//rafce
import React from 'react'

const ClickEvent = () => {

    const greeting = e => {
        alert('안녕');
    }

    const changeBox = e => {
        const $box = document.querySelector(".box");
        $box.style.background = 'skyblue';
        $box.style.width = '200px';
        $box.style.height = '200px';
    }

  return (
    <>
        <button id='btn1' onClick={ () => alert('클릭 성공!') }>클릭!</button>
        <button id='btn2' onClick={greeting}>클릭2</button>
        <button id='btn3' onClick={changeBox}>클릭3</button>

        <div className='box'></div>
    </>
  );
}

export default ClickEvent;