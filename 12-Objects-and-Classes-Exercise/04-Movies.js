function movies(list) {
    let films = [];

    for (let task of list) {
        if (task.includes('addMovie')) {
            let [addMovie, ...movieName] = task.split(' ');
            let movieNameStr = movieName.join(' ');

            let film = {
                name: movieNameStr,
                director: '',
                date: '',
            }

            films.push(film);

        } else if (task.includes('directedBy')) {
            let tokens = task.split(' ');
            let movieNameToken = [];
            let directorNameToken = [];

            let directorIndex = tokens.findIndex(x => x === 'directedBy');
            for (let i = 0; i < directorIndex; i++) {
                movieNameToken.push(tokens[i]);
            }
            for (let i = directorIndex + 1; i < tokens.length; i++) {
                directorNameToken.push(tokens[i]);
            }

            let name = movieNameToken.join(' ');
            let director = directorNameToken.join(' ');

            let film = films.find(x => x.name === name);
            if (film) {
                film.director = director;
            }

        } else {
            let tokens = task.split(' ');
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');

            let film = films.find(x => x.name === name);
            if (film) {
                film.date = date;
            }
        }
    }

    for (let movie of films) {
        if (movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);

// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
    