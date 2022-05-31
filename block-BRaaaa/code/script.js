let input = document.querySelector("input");
let rootElm =document.querySelector("ul");

let allMovies = [
    {
        name: ' Mangal Pandey',
        watched: false,
    },
    {
        name: ' SpiderMan ',
        watched: true,
    }
];


input.addEventListener('keyup',(event)=>{
    if(event.key === "Enter") {
        allMovies.push({
            name: event.target.value,
            watched : false,  
        });
        event.target.value = '';
        createMovieUI(allMovies,rootElm);
    }
});

function handleChange(event){
    let id = event.target.id;

    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI(allMovies,rootElm);
}



function createMovieUI(data,root){

    root.innerHTML= '';
    data.forEach((movie,i)=>{
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.id=i;
    button.innerText = movie.watched ? 'Watched' : 'To Watch';
    button.addEventListener('click', handleChange);
    let label = document.createElement('label');
    label.for = i;
    label.innerText = movie.name;

    li.append(label,button)

    rootElm.append(li);
});
}

createMovieUI(allMovies,rootElm);

