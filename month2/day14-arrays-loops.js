// Movies Array

const movies = [
  { title: "Inception", rating: 8.8, genre: "Sci-Fiction" },
  { title: "The Matrix", rating: 8.7, genre: "Action" },
  { title: "Interstellar", rating: 8.6, genre: "Sci-Fiction" },
  { title: "The Shawshank Redemption", rating: 9.3, genre: "Drama" },
  { title: "Pulp Fiction", rating: 8.9, genre: "Crime" },
];

console.log("All Movies: ");
movies.forEach((movie, index) => {
  console.log(`${index + 1}. ${movie.title} - Rating: ${movies.rating}`);
});

// Movie IMBD Higher Than 9

const highRated = movies.filter((movie) => movie.rating > 9);
console.log(
  "Movies IMDB Higher Than 9: \n",
  highRated.map((m) => m.title)
);

// SCI-Fiction Movies

const sciFi = movies.filter((movie) => movie.genre === "Sci-Fiction");
console.log(
  "Sci-Fiction Movies\n",
  sciFi.map((m) => m.title)
);

// Average Movie IMDB

const averageRating =
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log("Average IMDB:\n", averageRating.toFixed(2));

// Adding a New Movie

movies.push({ title: "Dune", rating: 8.1, genre: "Sci-Fiction" });
console.log("Dune After Pushing:\n", movies[movies.length - 1].title);

// First Action Movie
const firstAction = movies.find((movie) => movie.genre === "Action");
console.log("First Action Movie:\n", firstAction?.title || "Not Found");

// Sorting base on IMDB
const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);
console.log("Sorting Base On IMDB:\n");
sortedByRating.forEach((movie, i) =>
  console.log(`${i + 1}. ${movie.title} - ${movie.rating}`)
);
