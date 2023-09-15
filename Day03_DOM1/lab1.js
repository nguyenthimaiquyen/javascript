// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, 
//và in hoa nội dung của thẻ đó
const h1 = document.getElementById("heading");
h1.style.color = "red";
h1.style.textTransform = "upperCase";
console.log(h1)


// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” 
//và có font-size = “20px”
const para = document.querySelectorAll(".para");
console.log(para);
para.forEach(e => {
    e.style.color = "blue";
    e.style.fontSize = "20px";
});


// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const link = document.createElement("a");
console.log(link);
link.href = "https://www.facebook.com/";
link.innerText = "Facebook";
const para3 = document.querySelector("p:nth-child(4)");
console.log(para3);
para3.insertAdjacentElement("afterend", link);


// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector("div > h2");
console.log(title);
title.textContent = "Đây là thẻ tiêu đề";


// Thêm class “text-bold” vào thẻ có class=“description” 
//(định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector("h2 + p");
console.log(description);
description.classList.add("text-bold");


// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const button = document.createElement("button");
console.log(button);
button.innerText = "Click me";
document.body.replaceChild(button, para3);


// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector("p:nth-child(3)");
console.log(para2);
const para2Copy = para2.cloneNode(true);
para2.insertAdjacentElement("afterend", para2Copy);
console.log(para2Copy);


// Xóa thẻ có class=“para-1”
const para1 = document.querySelector("p:nth-child(2)");
console.log(para1);
document.body.removeChild(para1);
