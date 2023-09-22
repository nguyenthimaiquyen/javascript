const Users = [
    {
        name: 'Pablo Picasso',
        quote: 'Every child is an artist; the problem is staying an artist when you grow up',
        image: 'data:image/jpeg;base64,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',
        color: 'red'
    },
    {
        name: 'Andy Warhol',
        quote: 'Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.',
        image: 'data:image/jpeg;base64,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',
        color: 'green'
    },
    {
        name: 'Andre Gide',
        quote: 'Art is a collaboration between God and the artist, and the less the artist does the better',
        image: 'data:image/jpeg;base64,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',
        color: 'brown'
    },
    {
        name: 'Georgia O’Keeffe',
        quote: 'I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for',
        image: 'data:image/jpeg;base64,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',
        color: 'blue'
    },
    {
        name: 'Ray Bradburyl',
        quote: 'Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU',
        color: 'purple'
    }
]


//b1: duyệt mảng users và hiển thị ảnh của các author lên
const authorContainer = document.querySelector('.authors-container');
const renderAuthors = (users) => {
    let html = '';
    users.forEach(user => {
        html += `
            <div class="author"><img src="${user.image}" alt=""></div>
        `
    });
    authorContainer.innerHTML = html;
}
renderAuthors(Users);


//b2: bấm vào từng ảnh thì sẽ hiển thị name, quote và color
const authorName = document.querySelector('.name');
const quote = document.querySelector('.text');
const containerAuthor = document.querySelector('.testimonials-container');

const authors = document.querySelectorAll('.authors-container div');
const arrayAuthors = Array.from(authors);
for (let i = 0; i < arrayAuthors.length; i++) {
    arrayAuthors[i].addEventListener('click', function(e) {
        let current = this;
        authorName.innerText = Users[i].name;
        quote.innerText = Users[i].quote;
        containerAuthor.style.backgroundColor = Users[i].color;

        //thu nhỏ ảnh khi bấm vào author khác
        for (let i = 0; i < arrayAuthors.length; i++) {
            if (current != arrayAuthors[i]) {
                arrayAuthors[i].classList.remove('selected');
            } else {
              current.classList.add('selected');
            }
        }           
    });    
};
