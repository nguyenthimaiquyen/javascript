// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự 
//trong đoạn văn (background = “yellow”)
const p = document.querySelector("p");
const words = p.textContent.split(/\s+/);
console.log(words);
for (let i = 0; i < words.length; i++) {
    if (i.length >= 5) {
        const span = document.createElement("span");
        span.innerText = i;        
        span.style.backgroundColor = "yellow";
        words[i] = span;
        //console.log(span);
        //p.replaceChild(span, document.createTextNode(e));
    } else {
        //p.appendChild(document.createTextNode(e + " "));
    }
}



// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const link = document.createElement("a");
link.href = "https://www.facebook.com/";
link.innerText = "facebook";
p.insertAdjacentElement("afterend", link);



// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const div = document.createElement("div");
let count = 0;
const wordPattern = /^[A-Za-z]+$/;
words.forEach(e => {
    if (check(e)) {
        count++;
    }
});
function check(e) {
    let str = e.toString();
    if(e == "." || e == "," || e == "(" || e == ")" || e == "" || e == /^\d+$/) {
        return false;
    }
    return true;
}
div.innerHTML = count;
p.insertAdjacentElement("afterend", div);
console.log(div);



// Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
for (let i = 0; i < words.length; i++) {
    if (words[i].toString() == ",") {
        words[i] = "🤔";        
    } else if (words[i].toString() == ".") {
        words[i] = "😲";  
    }
}
let str = words.join(" ");
console.log(words);
p.innerText = str;



