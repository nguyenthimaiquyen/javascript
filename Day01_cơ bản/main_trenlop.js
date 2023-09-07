//bài tập if-else
//Bài 1:Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau
function kiemTraDiem(mark) {
    if(mark >= 85) {
        console.log('A');
    } else if(mark >= 70 && mark < 85) {
        console.log('B');
    } else if(mark >= 40 && mark < 70) {
        console.log('C');
    } else {
        console.log('D');
    }
}
var mark = 25;
kiemTraDiem(mark);

//Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn
function soSanh(a, b) {
    if(a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
var a = 4;
var b = '10';
soSanh(a, b);

//Bài 3: Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
function check(c) {
    if(c > 0) {
        console.log('Đây là số dương!');
    } else if(c < 0) {
        console.log('Đây là số âm!');
    } else {
        console.log('Đây là 0!');
    }
}

var c = -25;
check(c);

//Bài 4: Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
function checkChanLe(d) {
    if(d % 2 == 0) {
        console.log('Đây là số chẵn!');
    } else {
        console.log('Đây là số lẻ!');
    }
}

var d = 12;
checkChanLe(d);

//Bài 5: Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không.
function checkChia(e) {
    if(e % 3 == 0 && e % 5 == 0) {
        console.log('Đây là số chia hết cho 3 và 5!');
    } else {
        console.log('Đây không là số chia hết cho 3 và 5!');
    }
}

var e = 15;
checkChia(e);

//Bài 6: Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?
function checkTong(f, g, h) {
    if(f == g + h) {
        console.log('f = g + h');
    } else {
        console.log('f != g + h');
    }
}

var f = 19;
var g = 10;
var h = 5;
checkTong(f, g, h);

//Bài tập switch - case
/* Bài tập 1
Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 - Thứ 7)
Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
Ví dụ: day = 6 --> “Hôm nay là thứ 7” */
function checkDay(day) {
    switch(day) {
        case 0: {
            console.log("Hôm nay là chủ nhật!");
            break;
        }
        case 1: {
            console.log("Hôm nay là thứ hai!");
            break;
        }
        case 2: {
            console.log("Hôm nay là thứ ba!");
            break;
        }
        case 3: {
            console.log("Hôm nay là thứ tư!");
            break;
        }
        case 4: {
            console.log("Hôm nay là thứ năm!");
            break;
        }
        case 5: {
            console.log("Hôm nay là thứ sáu!");
            break;
        }
        default: {
            console.log("Hôm nay là thứ bảy!");
           break;
        }
    }
}
let day = 3;
checkDay(day);

/* Bài tập 2
Tạo biến month có giá trị từ 1 -> 12, là các tháng trong năm
Sử dụng switch-case để in ra mùa tương ứng với giá trị của biến month
1, 2, 3 : Mùa xuân
4, 5, 6 : Mùa hạ
7, 8, 9 : Mùa thu
10, 11, 12 : Mùa đông
Ví dụ: month = 9 --> “Mùa thu” */
function checkMonth(month) {
    switch(month) {
        case 1: 
        case 2: 
        case 3: {
            console.log("Tháng này là mùa xuân!");
            break;
        }            
        case 4:
        case 5:
        case 6: {
            console.log("Tháng này là mùa hạ!");
            break;
        }            
        case 7:
        case 8:
        case 9: {
            console.log("Tháng này là mùa thu!");
            break;
        }            
        case 10:
        case 11:
        case 12: {
            console.log("Tháng này là mùa đông!");
            break;
        }           
        default: {
            console.log("Nhập sai dữ liệu, vui lòng nhập lại!");
            break;
        }
    }
}
let month = 10;
checkMonth(month);

let name = 'Mai Quyen';
let year = 1994;
console.log('Xin chào các bạn, mình tên là ' + name + '. Năm nay ' + (2023 - year) + ' tuổi');
console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2023 - year} tuổi`);

//cách sử dụng arrow function
const sum2 = (a, b) => {
    return a + b;
}

//regular function
function sum(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

// hoặc, chỉ áp dụng đối với trường hợp đặc biệt khi có 1 câu lệnh return duy nhất 
const sum3 = (a = 10, b = 20) => a + b;

console.log(sum3());
console.log(typeof a);

//bài tập vòng lặp for
//Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
//Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
function repeatString(a) {
    let string = '';
    for (let i = 0; i < 10; i++) {
        string += a;        
    }
}
let i = 'Q';
repeatString(i);

//Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
//Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
function repeatString2(a) {
    let string = '';
    for (let i = 0; i < 10; i++) {
        string += a + '-';        
    }
}
let j = 'Q';
repeatString2(j);

//Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, 
//ngăn cách nhau bởi dấu gạch ngang.
//Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
function repeatString3(a, n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        string += a + '-';         
    }
}
let k = 'Q';
let n = 5;
repeatString3(k, n);

//Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
const tinhTong = function () {
    let s = 0;
    for (let i = 0; i < 100; i += 5) {
        if(i % 5 == 0) {
            s += i;
        }    
    }
    return s;
}
console.log(tinhTong());

//Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
const tinhTheTich = function(r) {
    return 4/3 * 3.14 * r ** 3;
    //return 4/3 * 3.14 * r * r * r;
}
console.log(tinhTheTich(2));

//Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. 
//Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
const sum6 = function(a, b) {
    let sum = 0;
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            sum += i;        
        }
    } else {
        for (let i = b + 1; i < a; i--) {
            sum += i;        
        }
    }    
    return sum;
}
console.log(sum6(15, 10));

//Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function checkNguyenTo(a) {
    if (a < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if(a % i == 0) {
            return false;
        }  
    }
    return true;
}
console.log(checkNguyenTo(0));

//Bài 8: Cho 1 số nguyên dương bất kỳ.
//Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function tinhTongSoNguyenTo(a) {
    let sum = 0
    for (let i = 2; i <= a; i++) {
        if(checkNguyenTo(i)) {
            sum += i;
        }  
    }
    return sum;
}

console.log(tinhTongSoNguyenTo(15));

//Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function tongCacUocSo(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        if(a % i == 0) {
            sum += i;
        }  
    }
    return sum;
}
console.log(tongCacUocSo(15));

//bài tập do - while
//Những ngày chẵn tiết kiệm 200.000, ngày lẻ 100.0000
//Tiết kiệm đến ngày số 8 thì hết tiền -> dừng lại
let totalMoney = 0;
let aa = 1;
do {
    if (aa % 2 == 0) {
        totalMoney += 200000;
    } else {
        totalMoney += 100000;
    }
    aa++;
} while (aa < 8)
console.log(totalMoney);