window.addEventListener('scroll',function(){
    let scroll = window.pageXOffset;

    let b1Top = box1TopPosition + (scroll / 2) + 'px';
    box1.style.top = b1Top;

    let box1TopPositionNow = box1.offsetTop;

    data1.innerHTML = scroll;
    box1Top.innerHTML = box1TopPositionNow;

    let box2TopPosition = box2.offsetTop;
    let box2LeftPositionNow = box2.offsetTop;

    let b2Top = box2TopPosition + (scroll / 3) + 'px';
    let b2Left = box2LeftPositionNow + (scroll / 4) + 'px';
    box2.style.top = b2Top;
    box2.style.left = b2Left;

    box2Top.innerHTML = box2TopPosition;
    box2.Left.innerHTML = box2LeftPositionNow;

    let box3TopPositionNow = box3.offsetTop;

    let b3Top = box3TopPosition + (scroll / 4) + 'px';
    box3.style.top = b3Top;
    box3TopPositionNow.innerHTML = box3TopPositionNow;
})