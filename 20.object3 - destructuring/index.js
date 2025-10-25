const favouriteFilm = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott"
};

const {title, year, genre, star, director} = favouriteFilm;

// const title = favouriteFilm.title;
// const year = favouriteFilm.year;
// const genre = favouriteFilm.genre;
// const star = favouriteFilm.star;
// const director = favouriteFilm.director;

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)

const dreamHoliday = {
  destination: "Helsinki",
  activity: "dance salsa",
  accommodation: "Helsinki city center hotel",
  companion: "my wife",
  duration: 12
}

const {destination, activity, accommodation, companion, duration} = dreamHoliday;

console.log(`I would love to go to ${destination}, to ${activity}. I'd sleep at ${accommodation}. I'd go there with ${companion} for ${duration} days.`)