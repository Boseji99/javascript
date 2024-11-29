// const restaurants = [
//     { name: "Romantic Rooftop", distance: 3, rating: 4.5 },
//     { name: "Cozy Corner", distance: 6, rating: 4.2 },
//     { name: "Candlelight Cafe", distance: 2, rating: 3.9 },
//     { name: "Starry Sky Diner", distance: 4, rating: 4.8 },
//   ];

//   const filteredRestaurants = restaurants.filter(restaurant => restaurant.distance <= 5 && restaurant.rating >= 4);

//   const restaurantNames = filteredRestaurants.map(restaurant => restaurant.name);

//   console.log("Filtered Restaurants:", filteredRestaurants);
//   console.log("Restaurant Names:", restaurantNames);

//   const firstRestaurant = filteredRestaurants.find(restaurant => restaurant.distance <= 5 && restaurant.rating >= 4);

//   console.log("First Restaurant:", firstRestaurant);


// const letters = [
//   ["I", "will", "love", "you", "forever"],
//   ["You", "are", "the", "love", "of", "my", "life"],
//   ["Love", "is", "what", "binds", "us"],  
// ];

// const totalWords = letters.reduce((acc, letter) => acc + letter.length, 0);
// console.log("Total number of words:", totalWords);

// const containsForever = letters.some((letter) => letter.includes("forever"));
// console.log("Contains the word 'forever':", containsForever);

// const allContainLove = letters.every((letter) => letter.includes("love"));
// console.log("All letters contain the word 'love':", allContainLove);


// const movies = [
//     { title: "Love Actually", genre: "romance", duration: 135 },
//     { title: "Inception", genre: "scifi", duration: 148 },
//     { title: "The Notebook", genre: "romance", duration: 123 },
//     { title: "Titanic", genre: "romance", duration: 195 },
//   ];
  
//   const romanceMovies = movies.filter(movie => movie.genre === "romance");
//   console.log("Romance Movies:", romanceMovies);
  
//   const totalDuration = romanceMovies.reduce((total, movie) => total + movie.duration, 0);
//   console.log("Total Duration:", totalDuration);
  
//   const movieTitles = romanceMovies.map(movie => movie.title);
//   console.log("Movie Titles:", movieTitles);
  

// const gifts = [
//     { name: "Teddy Bear", price: 800, popularity: 4.5 },
//     { name: "Perfume", price: 1500, popularity: 4.7 },
//     { name: "Photo Frame", price: 500, popularity: 3.8 },
//     { name: "Necklace", price: 4500, popularity: 4.9 },
//   ];
  
//   const filteredGifts = gifts.filter(gift => gift.price < 1000 && gift.popularity >= 4);
//   console.log("Filtered Gifts:", filteredGifts);
  
//   const firstGift = filteredGifts.find(gift => gift.price < 1000 && gift.popularity >= 4); 
//   console.log("First Gift:", firstGift);

//   const allUnder5000 = gifts.every(gift => gift.price < 5000);
//   console.log("All gifts under ₹5000?", allUnder5000);
  

const songs = [
    { title: "Perfect", artist: "Ed Sheeran", duration: 263 },
    { title: "All of Me", artist: "John Legend", duration: 269 },
    { title: "A Thousand Years", artist: "Christina Perri", duration: 295 },
  ];
  
  const songDurations = songs.map(song => {
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });
  
  console.log("Song Durations:", songDurations);
  
  const totalDurationInSeconds = songs.reduce((total, song) => total + song.duration, 0);
  const totalDurationInMinutes = (totalDurationInSeconds / 60).toFixed(2);
  
  console.log("Total Playlist Duration (minutes):", totalDurationInMinutes);
 
  const anySongExceedsFiveMinutes = songs.some(song => song.duration > 300);
  console.log("Any song exceeds 5 minutes?", anySongExceedsFiveMinutes);
  