let input = document.querySelector('input[type="text"]');
let rootElm =document.querySelector('movies_list');

let allMovies=[
    {
        name: " Mangal Pandey",
        watched: false,
    },
    {
        name: " Bagban ",
        watched: false,
    },
];


input.addEventListener('keyup',(event)=>{
    if (event.keyCode === 13) {
        console.log(event.target.value);
        allMovie.push({
            name: event.target.value,
            watched : false,
        })
        createMovieUI();
    }
});

function movieDelete(event){
    event.target.parentElement.remove();
 
}

function createMovieUI(){

    rootElm.innerHTML="";

    allMovies.forEach((movie,i)=>{
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.classList.add('styled-checkbox');
    input.type ="checkbox";
    input.id=i;
    let label = document.createElement('label');
    label.for = i;
    input.checked = movie.watched;
    label.innerText = movie.name;
    let span = document.createElement('span');
    span.innerText="X";

    li.append(input,label,span)

    rootElm.append(li);
});
createMovieUI();
}
