//Bài 1: Viết function truyền vào 1 số nguyên dương. Tính giai thừa của số đó
//Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function calculateFactorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
let n = 5;
console.log(calculateFactorial(n));


//Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
//Ví dụ: reverseString(‘hello’) => olleh
function reverseString(s) {
    let sub = "";
    for (let i = s.length - 1; i >= 0; i--) {
        sub += s[i];        
    }
    return sub;
}
let s = 'hello';
console.log(reverseString(s));


/**
 * Bài 3: Viết function truyền vào mã quốc gia. 
Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
Ví dụ: translate(‘VN’) => “Xin chào”
translate(‘EN’) => “Hello”
Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó
 */
function translate(s) {
    switch(s) {
        case 'VN': {
            console.log('Xin chào');
            break;
        }
        case 'EN': {
            console.log('Hello');
            break;
        }
        case 'BL': {
            console.log('Cześć');
            break;
        }
        case 'BDN': {
            console.log('Olá');
            break;
        }
        default: {
            console.log('Nhập sai định dạng, vui lòng nhập lại');
            break;
        }
    }
}
let vn = 'EN';
console.log(translate(vn));

/**
 * Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. 
 * Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
 * Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”
 */
function catChuoi(s) {
    if (s.length > 15) {
        return s.substring(0, 10) + "...";
    }
    return s;
}
let result = catChuoi('xinchaocacbandenvoiTechmaster');
console.log(result);
