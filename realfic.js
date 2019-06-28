var realfic= [rebk1, rebk2, rebk3, rebk4];

var rebk1 ={
  title:"Wonder, by R. J. Palacio",
  cover:"https://prodimage.images-bn.com/pimages/9781524720193_p0_v5_s550x406.jpg",
  synopsis:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can't get past Auggie's extraordinary face. Wonder, a #1 New York Times bestseller, begins from Auggie's point of view, but soon switches to include his classmates, his sister, her boyfriend, and others. These perspectives converge in a portrait of one community's struggle with empathy, compassion, and acceptance. ",
  playlist:"https://open.spotify.com/album/0ZqgEL41BzggNI2mBVaL5X",
}

var rebk2 ={
  title:"The Book Thief, by Markus Zusak",
  cover:"https://prodimage.images-bn.com/pimages/9781101934180_p0_v2_s550x406.jpg",
synopsis:"One of the most enduring stories of our time, The Book Thief is just a small story really, about, among other things: a girl, some words, an accordionist, some fanatical Germans, a Jewish fist fighter, and quite a lot of thievery.",
  playlist:"https://open.spotify.com/album/3Q08y3UGU6lqRpksL66EHO",
}

var rebk3 ={
  title:"The Perks of Being a Wallflower, by Stephen Chbosky",
  cover:"https://prodimage.images-bn.com/pimages/9781451696196_p0_v2_s550x406.jpg",
synopsis:"The Perks of Being a Wallflower is a story about what it’s like to travel that strange course through the uncharted territory of high school. The world of first dates, family dramas, and new friends. Of sex, drugs, and The Rocky Horror Picture Show. Of those wild and poignant roller-coaster days known as growing up.",
  playlist:"https://open.spotify.com/playlist/5GryvYkKV0bHjoMhiOjPsY",
}
var rebk4 ={
  title:"The Help, by Kathryn Stockett",
  cover:"https://prodimage.images-bn.com/pimages/9780425232200_p0_v4_s550x406.jpg",
  synopsis:"Aibileen is a black maid in 1962 Jackson, Mississippi, who’s always taken orders quietly, but lately she’s unable to hold her bitterness back. Her friend Minny has never held her tongue but now must somehow keep secrets about her employer that leave her speechless. White socialite Skeeter just graduated college. She’s full of ambition, but without a husband, she’s considered a failure. Together, these seemingly different women join together to write a tell-all book about work as a black maid in the South, that could forever alter their destinies and the life of a small town...",
  playlist:"https://open.spotify.com/album/77DVPRUq9rUKjMesNQYhbu",
}

console.log(realfic[0]);
var button = document.getElementById("realfic")
button.addEventListener("click", function(){
  var randomNum = Math.random()
  console.log(randomNum);
  var randomNumBig = randomNum * realfic.length
  var randomRound = Math.floor(randomNumBig);
 document.getElementById("titlerf").innerHTML = realfic[randomRound].title;
  document.getElementById("imgrf").src= realfic[randomRound].cover;
  document.getElementById("synopsisrf").innerHTML = realfic[randomRound].synopsis;
  document.getElementById("playlistrf").innerHTML = "<a href=" + realfic[randomRound].playlist + ">Click for Playlist!</a>"

})