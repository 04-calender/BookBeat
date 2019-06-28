var nonfic=[nbk1,nbk2,nbk3, nbk4];

var nbk1={
  title: "Travelling to Infinity: The True Story Behind The Theory of Everythin by Jane Hawking", 
  cover:"https://prodimage.images-bn.com/pimages/9781846883477_p0_v5_s550x406.jpg",
synopsis:"Professor Stephen Hawking is one of the most famous and remarkable scientists of our age and the author of the scientific bestseller A Brief History of Time, which has sold more than 25 million copies. In this compelling memoir, his first wife, Jane Hawking, relates the inside story of their extraordinary marriage. As Stephen's academic renown soared, his body was collapsing under the assaults of a motor neuron disease. Jane's candid account of trying to balance his 24-hour care with the needs of their growing family reveals the inner strength of the author, while the self-evident character and achievements of her husband make for an incredible tale presented with unflinching honesty. Jane's candor is no less apparent when the marriage finally ends in a high-profile meltdown, with Stephen leaving Jane for one of his nurses and Jane marrying an old family friend. In this exceptionally open, moving, and often funny memoir, Jane Hawking confronts not only the acutely complicated and painful dilemmas of her first marriage, but also the relationship's fault lines exposed by the pervasive effects of fame and wealth. The result is a book about optimism, love, and change that will resonate with readers everywhere.",
  playlist:"https://open.spotify.com/album/2R2FZbfCSFBb1piR159xN0",
}
  var nbk2 = {
  title:"Brain on Fire by Susannah Cahalan",
  cover:"https://images-na.ssl-images-amazon.com/images/I/81AHYi-h3HL.jpg",
synopsis:"When twenty-four-year-old Susannah Cahalan woke up alone in a hospital room, strapped to her bed and unable to move or speak, she had no memory of how she’d gotten there. Days earlier, she had been on the threshold of a new, adult life: at the beginning of her first serious relationship and a promising career at a major New York newspaper. Now she was labeled violent, psychotic, a flight risk. What happened?In a swift and breathtaking narrative, Susannah tells the astonishing true story of her descent into madness, her family’s inspiring faith in her, and the lifesaving diagnosis that nearly didn’t happen.",
    playlist:"https://open.spotify.com/playlist/7d8YIagrOPzXitKiefwPGm",
  }
    var nbk3 = {
      title: "The Blind Side: Evolution of a Game by Michael Lewis",
      cover:"https://prodimage.images-bn.com/pimages/9780393330472_p0_v3_s550x406.jpg",
      synopsis:"When we first meet him, Michael Oher is one of thirteen children by a mother addicted to crack; he does not know his real name, his father, his birthday, or how to read or write. He takes up football, and school, after a rich, white, Evangelical family plucks him from the streets. Then two great forces alter Oher: the family's love and the evolution of professional football itself into a game where the quarterback must be protected at any cost. Our protagonist becomes the priceless package of size, speed, and agility necessary to guard the quarterback's greatest vulnerability-his blind side.",
  playlist:"https://open.spotify.com/album/1zM06ZeODLZp2Ojka6lUTf",
    }
    var nbk4 ={
  title:"Unbroken: A World War II Story of Survival, Resilience, and Redemption by Laura Hillenbrand",
  cover:"https://prodimage.images-bn.com/pimages/9780812974492_p0_v9_s550x406.jpg",
  synopsis:"On a May afternoon in 1943, an Army Air Forces bomber crashed into the Pacific Ocean and disappeared, leaving only a spray of debris and a slick of oil, gasoline, and blood. Then, on the ocean surface, a face appeared. It was that of a young lieutenant, the plane's bombardier, who was struggling to a life raft. So began one of the most extraordinary odysseys of the Second World War. The lieutenant's name was Louis Zamperini. In boyhood, he'd been a cunning and incorrigible delinquent. As a teenager, he had channeled his defiance into running, discovering a prodigious talent that had carried him to the Berlin Olympics. But when war had come, the athlete had become an airman, embarking on a journey that led to his doomed flight, a tiny raft, and a drift into the unknown. Ahead of Zamperini lay thousands of miles of open ocean, leaping sharks, a foundering raft, thirst and starvation, enemy aircraft, and, beyond, a trial even greater. His fate, whether triumph or tragedy, would be suspended on the fraying wire of his will. Unbroken is a testament to the resilience of the human mind, body, and spirit.",
  playlist:"https://open.spotify.com/album/0uuZrEIgmnp4tQ3VkNLXAc",
}
    
    console.log(nonfic[0]);
var button = document.getElementById("nonfic")
button.addEventListener("click", function(){
  var randomNum = Math.random()
  console.log(randomNum);
  var randomNumBig = randomNum * nonfic.length
  var randomRound = Math.floor(randomNumBig);
 document.getElementById("titlen").innerHTML = nonfic[randomRound].title;
  document.getElementById("imgn").src= nonfic[randomRound].cover;
  document.getElementById("synopsisn").innerHTML = nonfic[randomRound].synopsis;
  document.getElementById("playlistn").innerHTML = "<a href=" + nonfic[randomRound].playlist + ">Click for Playlist!</a>"

})