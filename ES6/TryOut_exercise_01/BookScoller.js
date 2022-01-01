const data = [
    {
        name: 'An Autobiography',
        author: 'Jawaharlal Nehru',
        about: 'An Autobiography also known as Toward Freedom,(1936) is an autobiographical book written by the first Prime Minister of India, Jawaharlal Nehru while he was in prison.',
        image: 'image/nehru.jpg'
    },
    {
        name: 'Steve Jobs',
        author: 'Walter Isaacson',
        about: 'It is the authorized self-titled biography book of Steve Jobs.The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and TIME.',
        image: 'image/steveJobs.jpg'
    },
    {
        name: 'Courage and Conviction',
        author: 'General Vijay Kumar Singh',
        about: 'In this book Singh criticises corruption in the Indian government and the role of Indira Gandhi in in Operation Bluestar.',
        image: 'image/courageConflict.jpg'
    },
];

const books = bookIterator(data);

//call first book
nextBook();

//Next Event
document.getElementById('next').addEventListener('click', nextBook);

//Next book Display
function nextBook() {
    const currentBook = books.next().value;

    if(currentBook !== undefined){
        document.getElementById('info-display').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item"><strong>Name</strong><br> ${currentBook.name}</li>
            <li class="list-group-item"><strong>Author</strong><br> ${currentBook.author}</li>
            <li class="list-group-item"><strong>About</strong><br> ${currentBook.about}</li>
        </ul>`;

        document.getElementById('image-display').innerHTML = `
        <img src="${currentBook.image}" alt="img">`;
    }
    else{
        //No more books
        window.location.reload();
    }
}

//Book Iterator
function bookIterator(books) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < books.length ?
            { value: books[nextIndex++], done: false } :
            { done: true }
        }
    };
}