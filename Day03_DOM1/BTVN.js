// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
const p = document.createElement("p");
p.id = "text";
p.innerText = 'Đây là thẻ p có ID bằng "text"';
document.body.insertAdjacentElement("afterbegin", p);
console.log(p);
// Đặt màu văn bản thành #777
p.style.color = "#777";
// Đặt kích thước phông chữ thành 2rem
p.style.fontSize = "2rem";
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
p.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";


//Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue
//(tạo thẻ ul-li bằng html)
const ul1 = document.querySelector("ul");
const liList = ul1.querySelectorAll("li");
console.log(liList);
liList.forEach(e => {
    e.style.color = "blue";
})


//Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let item8 = document.createElement("li");
let item9 = document.createElement("li");
let item10 = document.createElement("li");
item8.innerText = "Item 8";
item9.innerText = "Item 9";
item10.innerText = "Item 10";

const ul2 = document.querySelector("ul:nth-child(3)");
console.log(ul2);
ul2.insertAdjacentElement("beforeend", item8);
ul2.insertAdjacentElement("beforeend", item9);
ul2.insertAdjacentElement("beforeend", item10);


// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = ul2.querySelector("li");
li1.style.color = "red";
console.log(li1);


// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = ul2.querySelector("li:nth-child(3)");
li3.style.backgroundColor = "blue";
console.log(li3);


// Remove thẻ <li> 4
const li4 = ul2.querySelector("li:nth-child(4)");
console.log(li4);
ul2.removeChild(li4);


// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const liNew = document.createElement("li");
liNew.innerText = "Đây là thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước";
li3.insertAdjacentElement("afterend", liNew);

