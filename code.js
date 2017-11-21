
function renderMovie(movie){
    
    document.getElementById("movieTitle_p").innerText = movie.title; 
    document.getElementById("description_p").innerText = movie.description;
    document.getElementById("bilden").src = movie.picURL; 
    var html =""; 
    
        for (let i = 0; i < movie.actorList.length; i++) {
            html += "<li>" + movie.actorList[i] + "</li>";
    
        }
        document.getElementById("listOfActors_ul").innerHTML = html;

    

}

renderMovie(movieData);
