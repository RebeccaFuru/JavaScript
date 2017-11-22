import {movieData} from "./data";
import * as $ from "jquery";

function renderMovie(movie){
    
    $("#movieTitle_p").text(movie.title); 
    $("#description_p").text(movie.description);
    $("#bilden").attr("src", movie.picURL); 

    var html =""; 
    for (let i = 0; i < movie.actorList.length; i++) {
        html += "<li>" + movie.actorList[i] + "</li>";
    
    };
    $("#listOfActors_ul").append(html);
};

    // document.querySelector(".stars").addEventListener("click", function(e){
    //     let num = e.target.getAttribute("data-star-number");
    //     if (num){
    //         changeStarRating(parseInt(num));
    //     }
    // })


    function changeStarRating(rating){
        $(".filled").removeClass("filled");
        //klassnamn hittar jag på själv 

        for (let l=1; l<=rating; l++){
            $("[data-rating-id=" + l + "]").addClass("filled");
        }
    }


    
   $(".stars").on("click", "span", function(e){
        let star = $(e.target);
        let rating = parseInt(star.attr("data-rating-id"));
        changeStarRating(rating);

    });

    // for(let l=1; l<= 5; l++){
    //     let star = document.getElementById("star" + l);
    //     star.addEventListener("click", function(){
    //     });
    // }



renderMovie(movieData);
