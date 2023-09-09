// 1. Bài tập phần Array
// 1.1. Lab 1

//Bài 1: Viết function tìm số lớn nhất trong mảng
let numbers = [1,8,9,8,10,2,6,4,25];
let max = function(numbers) {
    return Math.max.apply(null, numbers);
}
console.log(max(numbers));


//Bài 2: Viết function tìm số nhỏ nhất trong mảng
let min = function(numbers) {
    return Math.min.apply(null, numbers);
}
console.log(min(numbers));


//Bài 3: Viết function cho phép truyền vào 1 mảng các số, 
//kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
//Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function handlerArray(number) {
    return number % 2;
}
let number1 = [4,2,5,6,2,7];
let number2 = number1.map(handlerArray);
console.log(number2);

//hoặc
let number3 = number1.map(number => number % 2);
console.log(number3);


//Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép chuỗi đó lên 10 lần (Sử dụng array để làm)
//Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘aaaaaaaaaa’
function repeatString(a) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(a);            
    }
    return array.join('');
}
console.log(repeatString('a'));


//Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, 
//ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
//Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
function repeatString2(a) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(a);            
    }
    return array.join('-');
}
console.log(repeatString2('a'));


//Bài 6: Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không 
//(chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, 
//không phân biệt hoa thường), kết quả trả về true hoặc false.
function isSymmetricString(string) {
    let str = string.toLowerCase().split(' ').join('');
    let reversedString = str.split('').reverse().join('');
    console.log(str);
    console.log(reversedString);
    return str === reversedString;
}
console.log(isSymmetricString('hello World'));


//Bài 7: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó 
//sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
const findMinNumber = number => {
    let arr = number.toString().split('').sort();
    console.log(arr);
    if (arr[0] == 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != '0') {            
                arr[0] = arr[i];
                arr[i] = '0'; 
                break;
            }            
        }
    }
    console.log(arr);
    return Number(arr.join(''));
}
console.log(findMinNumber(209203));


// 1.2. lab 2

//Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
//checkElementExist([1,2,3,4,5], 5) => true
//checkElementExist([1,2,3,4,5], 6) => false
const checkElementExist = (array, n) => {
    return array.join('').includes(n, 0);    
}
let array = [1,2,3,4,5];
console.log(checkElementExist(array, 6));


// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. 
// Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
const getElementGreater = (array, n) => {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > n) {
            arr.push(array[i]);
        }        
    }
    return arr;
}
console.log(getElementGreater(array, 5));


// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
// randomHexCode() => #728a98
// randomHexCode() => #a72938
const randomHexCode = (() => {
    let string = '#' + Math.floor(Math.random() * 100000);
    let temp = Math.floor((Math.random() * 7) + 1);
    let array = string.split('');
    array.splice(temp, 0, 'a');
    return array.join('');
})
console.log(randomHexCode());


// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)
const randomRgbCode = (() => {
    let number1 = Math.floor((Math.random() * 100) + 1);
    let number2 = Math.floor((Math.random() * 1000) + 1);
    let number3 = Math.floor((Math.random() * 1000) + 1);
    let array = [number1, number2, number3];
    array.sort(() => 0.5 - Math.random());
    return 'rgb(' + array.join(',') + ')';
})
console.log(randomRgbCode());




// 2. Bài tập phần Object

// 2.1. Thực hành Products
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    }
]
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const showProducts = products => {
    products.forEach (p => {
        console.log(`${p.name} - ${p.price} - ${p.brand} - ${p.count}`);
    })
}
showProducts(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const totalMoney = (products => {
    let sum = 0;
    products.forEach(p => {
        sum += p.count * p.price;
    });
    return sum;
});
console.log(totalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findByBrand = ((products, brandName) => {
    let result = [];
    products.forEach(p => {
        if (p.brand == brandName) {
            result.push(p);
        }
    });
    return result;
});
console.log(findByBrand(products, 'Apple'));

// 4. Tìm các sản phẩm có giá > 20.000.000
const findByPrice = (products, price) => {
    let res = [];
    products.forEach(p => {
        if (p.price > price) {
            res.push(p);
        }
    });
    return res;
}
console.log(findByPrice(products, 20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findByName = (products, text) => {
    let res = [];
    products.forEach(p => {
        if(p.name.toLowerCase().includes(text)) {
            res.push(p);
        }
    });
    return res;
}
console.log(findByName(products, 'pro'));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
products[4] = {
    name: "Laptop Pro HP Pavilion",
    price: 22500000,
    brand: "HP",
    count: 5,
};
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
for (let i = 0; i < products.length; i++) {
    if (products[i].brand === 'Samsung') {
        products.splice(i, 1);
    }
}
console.log(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort(function(a, b) {
    return a.price - b.price;
});
console.log(products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort(function(a, b) {
    return b.count - a.count;
});
console.log(products);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const getRandomProduct = (products, n) => {
    let array = products.sort(() => 0.5 - Math.random());
    return array.slice(0, n);
};
console.log(getRandomProduct(products, 2));


// 2.2. Thực hành Grade
const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// 1. Viết function tính thứ hạng trung bình của cả lớp
const averageGrade = grades.reduce((a, b) => a + b.grade, 0);
const result1 = averageGrade / grades.length;
console.log(result1);

// 2. Viết function tính thứ hạng trung bình của nam trong lớp
let tempArray = grades.filter(element => element.sex == 'M');
const averageGradeMale = tempArray.reduce((a, b) => a + b.grade, 0);
const result2 = averageGradeMale / tempArray.length;
console.log(result2);

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
let tempArray2 = grades.filter(element => element.sex == 'F');
const averageGradeFemale = tempArray2.reduce((a, b) => a + b.grade, 0);
const result3 = averageGradeFemale / tempArray2.length;
console.log(result3);

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
let tempArray3 = grades.filter(element => element.sex == 'M');
let maxGradeMale = 0;
for (let i = 0; i < tempArray3.length; i++) {
    if(tempArray3[i].grade > maxGradeMale) {
        maxGradeMale = tempArray3[i].grade;
    }    
}
let greatestGradeMale = tempArray3.filter(element => element.grade == maxGradeMale);
console.log(greatestGradeMale);

// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
let tempArray4 = grades.filter(element => element.sex == 'F');
let maxGradeFemale = 0;
for (let i = 0; i < tempArray4.length; i++) {
    if(tempArray4[i].grade > maxGradeFemale) {
        maxGradeFemale = tempArray4[i].grade;
    }    
}
let greatestGradeFemale = tempArray4.filter(element => element.grade == maxGradeFemale);
console.log(greatestGradeFemale);

// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
let tempArray5 = grades.filter(element => element.sex == 'M');
let minGradeMale = 100;
for (let i = 0; i < tempArray5.length; i++) {
    if(tempArray5[i].grade < minGradeMale) {
        minGradeMale = tempArray5[i].grade;
    }    
}
let lowestGradeMale = tempArray5.filter(element => element.grade == minGradeMale);
console.log(lowestGradeMale);

// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
let tempArray6 = grades.filter(element => element.sex == 'F');
let minGradeFemale = 100;
for (let i = 0; i < tempArray6.length; i++) {
    if(tempArray6[i].grade < minGradeFemale) {
        minGradeFemale = tempArray6[i].grade;
    }    
}
let lowestGradeFemale = tempArray6.filter(element => element.grade == minGradeFemale);
console.log(lowestGradeFemale);

// 8. Viết function thứ hạng cao nhất của cả lớp
let maxGrade = 0;
for (let i = 0; i < grades.length; i++) {
    if(grades[i].grade > maxGrade) {
        maxGrade = grades[i].grade;
    }    
}
let greatestGrade = grades.filter(element => element.grade == maxGrade);
console.log(greatestGrade);

// 9. Viết function thứ hạng thấp nhất của cả lớp
let minGrade = 100;
for (let i = 0; i < grades.length; i++) {
    if(grades[i].grade < minGrade) {
        minGrade = grades[i].grade;
    }    
}
let lowestGrade = grades.filter(element => element.grade == minGrade);
console.log(lowestGrade);

// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
let tempArray7 = grades.filter(element => element.sex == 'F');
console.log(tempArray7);

// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
grades.sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})
console.log(grades);

// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
grades.sort((a, b) => {
    let gradeA = a.grade;
    let gradeB = b.grade;
    if(gradeA < gradeB) return 1;
    if(gradeA > gradeB) return -1;
    return 0;
})
console.log(grades);

// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const femaleArray = grades.filter(element => {
    return element.name.charAt(0) == 'J' && element.sex == 'F';
})
console.log(femaleArray);

// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
//do câu 12 đã sắp xếp theo chiều giảm dần thứ hạng học viên nên câu 14 làm tiếp
let tempArray8 = [];
for (let i = 0; i < 5; i++) {
    tempArray8.push(grades[i]);   
}
console.log(tempArray8);