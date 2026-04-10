interface MovieDetails {
    readonly name: string;
    rating: number;
    printMovieInfo(name: string, rating: number): string | number;
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie1: MovieGenre = {
    name: "Inception",
    rating: 8.8,
    genre: "Sci-Fi",
    printMovieInfo(name: string, rating: number): string | number { 
        return `${name} has a rating of ${rating}`;
    }
}

const result = movie1.printMovieInfo(movie1.name, movie1.rating)
console.log(result)