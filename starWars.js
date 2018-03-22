// var starWarsFilmsH4 = document.querySelector('h4');
// var starWarsFilmsH5 = document.querySelector('h5');
// var starWarsFilmsH6 = document.querySelector('h6');
var films;
var queryAPI;
var filmTitles = [["A New Hope",0],
                 ["Attack of the Clones",1],
                 ["The Phantom Menace",2],
                 ["Revenge of the Sith",3],
                 ["Return of the Jedi",4],
                 ["The Empire Strikes Back",5]
                 ["The Force Awakens",6]
                 ];

const url = 'https://swapi.co/api/films'
    fetch('https://swapi.co/api/films') 
    .then(function(response) {   
        console.log(response);
        return response.json(); 
    })
    .then(function(json) {
        console.log("JSON results: ", json.results);
        films = json.results;
        console.log("films results: ", films);
        for(f of films) {
            let listItem = document.createElement('BUTTON');
            listItem.setAttribute("id", "btn-film");
            listItem.setAttribute("class", "btn btn-info btn-block");
            listItem.innerHTML =  f.title;
            starWarsFilmsList.appendChild(listItem);
        }
    });
        
        swMovieButton.addEventListener('click', (event) => {
            let list = document.getElementById("swMovieName");
            console.log('Entry '+queryAPI+ ' Movie: ', list.value);
            let i=0;
            for (i=0; i<=6; i++) {
                console.log("For film ",i,filmTitles[i], list.value);
                if (filmTitles[i] == list.value) {
                    let filmIndex = filmTitles[i];
                    break;
                }
            };
            let swDetails = document.getElementById("swDetails");
            let films1 = films[filmIndex];
            console.log("films results: ", films1);
            let liTitle = document.createElement('li');
            let liURL = document.createElement('li')
            let liDirector = document.createElement('li')
            let liProducer = document.createElement('li')
            let liOpeningCrawl = document.createElement('li')
            let liEpisodeId = document.createElement('li')
            let liReleaseDate = document.createElement('li')

            liTitle.innerText = 'Title: ' + films1.title; 
            swDetails.appendChild(liTitle);
            liURL.innerText = '   URL: ' + films1.url;
            swDetails.appendChild(liURL);
            liDirector.innerText = '   Director: ' + films1.director;
            swDetails.appendChild(liDirector);
            liProducer.innerText = '   Producer(s): ' + films1.producer;
            swDetails.appendChild(liProducer);
            liOpeningCrawl.innerText =  films1.opening_crawl;
            swCrawl.appendChild(liOpeningCrawl);
            liEpisodeId.innerText = '   Episode: ' + films1.episode_id;
            swDetails.appendChild(liEpisodeId);
            liReleaseDate.innerText = '   Release Date: ' + films1.release_date;
            swDetails.appendChild(liReleaseDate);
         });
