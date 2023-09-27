//lấy ra các element
const breedList = document.getElementById('breed-list');
const btn = document.getElementById('btn');
const image = document.getElementById('image');
const p1 = document.querySelector('.form p');
const p2 = document.querySelector('.form p:nth-child(3)');


//lấy danh sách các giống dog
const getBreedList = async () => {
    try {
        
        let res = await fetch('https://dog.ceo/api/breeds/list/all');

        let list = await res.json();

        const arrayList = Object.keys(list.message);
        console.log(arrayList);

        let html = '<option value="">--select--</option>';
        arrayList.forEach((value) => {
            html += `<option value="">${value}</option>`
        });

        breedList.innerHTML = html;

    } catch (error) {
        console.log(error);
    }
}

getBreedList();


//random ảnh 
breedList.addEventListener('change', () => {            
    let api = p1.innerText + breedList.options[breedList.selectedIndex].text + p2.innerText;
    
    const getImage = async () => {
        try {
            let res = await fetch(api);
            //console.log(res)
            
            let data = await res.json();            
            //console.log(data);
            
            image.src = data.message;
    
        } catch (error) {
            console.log(error);
        }
    }
    btn.addEventListener('click', getImage)
})




