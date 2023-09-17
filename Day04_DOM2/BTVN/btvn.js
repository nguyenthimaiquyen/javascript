let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
const boxes = document.querySelector('.boxes');
const boxList = boxes.querySelectorAll('.box');
for (let i = 0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = colors[i];    
}


// Cập nhật số lượng total box trong thẻ <span> có class “points”
const points = document.querySelector('.points');
points.innerText = " " + boxList.length;


// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
let count = 0;  
for (let i = 0; i < boxList.length; i++) {        
    //khi click vào 1 box bất kỳ
    boxList[i].onclick = function (e) {              
        //thì box đó biến mất
        boxList[i].style.display = 'none';        
        //số lượng total box giảm đi 1
        points.innerText = " " + (boxList.length - ++count);
    }       
}

// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), 
//đồng thời số lượng total box cũng tăng lên 5
const btn = document.getElementById('btn');
console.log(typeof points.innerText);
btn.onclick = function (e) {    
    for (let i = 0; i < 5; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = colors[i]; 
        boxes.appendChild(box);       
    }
    points.innerText = 5 + parseInt(points.innerText) ;
}

