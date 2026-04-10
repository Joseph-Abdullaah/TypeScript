var movie1 = {
    name: "Inception",
    rating: 8.8,
    genre: "Sci-Fi",
    printMovieInfo: function (name, rating) {
        return "".concat(name, " has a rating of ").concat(rating);
    }
};
var result = movie1.printMovieInfo(movie1.name, movie1.rating);
console.log(result);
