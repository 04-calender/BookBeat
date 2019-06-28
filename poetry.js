var poetry= [pbk1, pbk2, pbk3, pbk4];

var pbk1 ={
  title:"Brown Girl Dreaming, by Jacqueline Woodson",
  cover:"https://prodimage.images-bn.com/pimages/9780147515827_p0_v1_s550x406.jpg",
  synopsis:"Raised in South Carolina and New York, Woodson always felt halfway home in each place. In vivid poems, she shares what it was like to grow up as an African American in the 1960s and 1970s, living with the remnants of Jim Crow and her growing awareness of the Civil Rights movement. Touching and powerful, each poem is both accessible and emotionally charged, each line a glimpse into a child’s soul as she searches for her place in the world. Woodson’s eloquent poetry also reflects the joy of finding her voice through writing stories, despite the fact that she struggled with reading as a child. Her love of stories inspired her and stayed with her, creating the first sparks of the gifted writer she was to become.",
  playlist:"https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ ",
}

var pbk2 ={
  title:"For Every One, by Jason Reynolds",
  cover:"https://prodimage.images-bn.com/pimages/9781481486255_p0_v1_s550x406.jpg",
  synopsis:"For Every One is exactly that: for every one. For every one person. For every one who has a dream. But especially for every kid. The kids who dream of being better than they are. Kids who dream of doing more than they almost dare to imagine. Kids who are like Jason Reynolds, a self-professed dreamer. Jason does not claim to know how to make dreams come true; he has, in fact, been fighting on the front line of his own battle to make his own dreams a reality. He expected to make it when he was sixteen. Then eighteen. Then twenty-five. Now, some of those expectations have been realized. But others, the most important ones, lay ahead, and a lot of them involve kids, how to inspire them: All the kids who are scared to dream, or don’t know how to dream, or don’t dare to dream because they’ve NEVER seen a dream come true. Jason wants kids to know that dreams take time. They involve countless struggles. But no matter how many times a dreamer gets beat down, the drive and the passion and the hope never fully extinguishes—because simply having the dream is the start you need, or you won’t get anywhere anyway, and that is when you have to take a leap of faith.",
  playlist:"https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ",
}

var pbk3 ={
  title:"Light Filters In: Poems, by Caroline Kaufman, Yelena Bryksenkova (Illustrator)",
  cover:"https://prodimage.images-bn.com/pimages/9780062844682_p0_v3_s550x406.jpg",
  synopsis:"In Light Filters In, Caroline Kaufman—known as @poeticpoison—does what she does best: reflects our own experiences back at us and makes us feel less alone, one exquisite and insightful piece at a time. She writes about giving up too much of yourself to someone else, not fitting in, endlessly Googling “how to be happy,” and ultimately figuring out who you are.",
  playlist:"https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ",
}
var pbk4 ={
  title:"The Poet X, by Elizabeth Acevedo",
  cover:"https://prodimage.images-bn.com/pimages/9780062662804_p0_v3_s550x406.jpg",
  synopsis:"Xiomara Batista feels unheard and unable to hide in her Harlem neighborhood. Ever since her body grew into curves, she has learned to let her fists and her fierceness do the talking. But Xiomara has plenty she wants to say, and she pours all her frustration and passion onto the pages of a leather notebook, reciting the words to herself like prayers—especially after she catches feelings for a boy in her bio class named Aman, who her family can never know about. With Mami’s determination to force her daughter to obey the laws of the church, Xiomara understands that her thoughts are best kept to herself. So when she is invited to join her school’s slam poetry club, she doesn’t know how she could ever attend without her mami finding out. But she still can’t stop thinking about performing her poems. Because in the face of a world that may not want to hear her, Xiomara refuses to be silent.",
  playlist:"https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ",
}

console.log(poetry[0]);
var button = document.getElementById("poetry")
button.addEventListener("click", function(){
  var randomNum = Math.random()
  console.log(randomNum);
  var randomNumBig = randomNum * poetry.length
  var randomRound = Math.floor(randomNumBig);
 document.getElementById("titlep").innerHTML = poetry[randomRound].title;
  document.getElementById("imgp").src= poetry[randomRound].cover;
  document.getElementById("synopsisp").innerHTML = poetry[randomRound].synopsis;
  document.getElementById("playlistp").innerHTML = "<a href=" + poetry[randomRound].playlist + ">Click for a Calming Poetry Playlist!</a>"

})
