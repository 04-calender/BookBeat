
var fantasy=[fbk1,fbk2,fbk3,fbk4, fbk5];

var fbk1 ={
  title: "Divergent, by Veronica Roth", 
  cover:"https://prodimage.images-bn.com/pimages/9780062387240_p0_v1_s550x406.jpg",
  synopsis:"One choice can transform you. Beatrice Prior's society is divided into five factions—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). Beatrice must choose between staying with her Abnegation family and transferring factions. Her choice will shock her community and herself. But the newly christened Tris also has a secret, one she's determined to keep hidden, because in this world, what makes you different makes you dangerous.",
  playlist:"https://open.spotify.com/playlist/2vhRHJq6vlj5SXmflGRukO"
}
  var fbk2 = {
  title:"Children of Blood and Bone, by Tomi Ayedemi",
  cover:"http://prodimage.images-bn.com/pimages/9781250170972.jpg",
  synopsis:"Zélie Abedola lives in a world where magic is punished and suppressed, but it wasn’t always this way. When she was small, Orïsha hummed with magic, including that of her mother, a Reaper with the ability to command souls. The ascendance of a ruthless king pushed magic underground and left Zélie orphaned. But now, by the side of a runaway princess in revolt against a brutal crown prince, she may have a chance at restoring magic—if she can ignore the wishes of her own renegade heart. This West African–inspired epic fantasy is tipped as being one of the biggest debuts of the year.",
  playlist:"https://open.spotify.com/playlist/2Ws6UJIgA8vC5Zx8cSoORr",
  }
    var fbk3 = {
      title: "Miss Peregrine's Home for Peculiar Children, by Ransom Riggs",
cover:"https://prodimage.images-bn.com/pimages/9781594746031_p0_v4_s550x406.jpg",
   synopsis: "A mysterious island.  An abandoned orphanage.  A strange collection of very curious photographs.  It all waits to be discovered in Miss Peregrine’s Home for Peculiar Children, an unforgettable novel that mixes fiction and photography in a thrilling reading experience. As our story opens, a horrific family tragedy sets sixteen-year-old Jacob journeying to a remote island off the coast of Wales, where he discovers the crumbling ruins of Miss Peregrine’s Home for Peculiar Children. As Jacob explores its abandoned bedrooms and hallways, it becomes clear that the children were more than just peculiar. They may have been dangerous. They may have been quarantined on a deserted island for good reason. And somehow—impossible though it seems—they may still be alive. A spine-tingling fantasy illustrated with haunting vintage photography, Miss Peregrine’s Home for Peculiar Children will delight adults, teens, and anyone who relishes an adventure in the shadows.",
      playlist:"https://open.spotify.com/playlist/29jozNjH5LcyAWDWtw2DRC",
  }
    var fbk4 ={
  title:"The Giver by Lois Lowry",
  cover:"https://prodimage.images-bn.com/pimages/9780544336261_p0_v4_s550x406.jpg",
  synopsis:"The Giver, the 1994 Newbery Medal winner, has become one of the most influential novels of our time. The haunting story centers on twelve-year-old Jonas, who lives in a seemingly ideal, if colorless, world of conformity and contentment. Not until he is given his life assignment as the Receiver of Memory does he begin to understand the dark, complex secrets behind his fragile community",
  playlist:"https://open.spotify.com/album/0AFO1wkqngzsxZHtKG2zaX",
}
    var fbk5 ={
  title:"Speak, by Laurie Halse Anderson",
  cover:"https://prodimage.images-bn.com/pimages/9780312674397_p0_v5_s550x406.jpg",
  synopsis:"Speak up for yourself—we want to know what you have to say. From the first moment of her freshman year at Merryweather High, Melinda knows this is a big fat lie, part of the nonsense of high school. She is friendless, outcast, because she busted an end-of-summer party by calling the cops, so now nobody will talk to her, let alone listen to her. As time passes, she becomes increasingly isolated and practically stops talking altogether. Only her art class offers any solace, and it is through her work on an art project that she is finally able to face what really happened at that terrible party: she was raped by an upperclassman, a guy who still attends Merryweather and is still a threat to her. Her healing process has just begun when she has another violent encounter with him. But this time Melinda fights back, refuses to be silent, and thereby achieves a measure of vindication. In Laurie Halse Anderson's powerful novel, an utterly believable heroine with a bitterly ironic voice delivers a blow to the hypocritical world of high school. She speaks for many a disenfranchised teenager while demonstrating the importance of speaking up for oneself.",
  playlist:"https://www.youtube.com/playlist?list=PL1AA94E0590FF1408",
}
    


  
   
console.log(fantasy[0]);
var button = document.getElementById("fantasy")
button.addEventListener("click", function(){
  var randomNum = Math.random()
  console.log(randomNum);
  var randomNumBig = randomNum * fantasy.length
  var randomRound = Math.floor(randomNumBig);
 document.getElementById("titlef").innerHTML = fantasy[randomRound].title;
  document.getElementById("imgf").src=fantasy[randomRound].cover;
  document.getElementById("synopsisf").innerHTML = fantasy[randomRound].synopsis;
  document.getElementById("playlistf").innerHTML = "<a href=" + fantasy[randomRound].playlist + ">Click for Playlist!</a>"
})

// var nonfic=[nbk1,nbk2,nbk3,];

// var nbk1={
//   title: "Travelling to Infinity: The True Story Behind The Theory of Everythin by Jane Hawking", 
//   cover:"https://prodimage.images-bn.com/pimages/9781846883477_p0_v5_s550x406.jpg",
// synopsis:"Professor Stephen Hawking is one of the most famous and remarkable scientists of our age and the author of the scientific bestseller A Brief History of Time, which has sold more than 25 million copies. In this compelling memoir, his first wife, Jane Hawking, relates the inside story of their extraordinary marriage. As Stephen's academic renown soared, his body was collapsing under the assaults of a motor neuron disease. Jane's candid account of trying to balance his 24-hour care with the needs of their growing family reveals the inner strength of the author, while the self-evident character and achievements of her husband make for an incredible tale presented with unflinching honesty. Jane's candor is no less apparent when the marriage finally ends in a high-profile meltdown, with Stephen leaving Jane for one of his nurses and Jane marrying an old family friend. In this exceptionally open, moving, and often funny memoir, Jane Hawking confronts not only the acutely complicated and painful dilemmas of her first marriage, but also the relationship's fault lines exposed by the pervasive effects of fame and wealth. The result is a book about optimism, love, and change that will resonate with readers everywhere.",
//   playlist:"https://open.spotify.com/album/2R2FZbfCSFBb1piR159xN0",
// }
//   var nbk2 = {
//   title:"Brain on Fire by Susannah Cahalan",
//   cover:"https://images-na.ssl-images-amazon.com/images/I/81AHYi-h3HL.jpg",
// synopsis:"When twenty-four-year-old Susannah Cahalan woke up alone in a hospital room, strapped to her bed and unable to move or speak, she had no memory of how she’d gotten there. Days earlier, she had been on the threshold of a new, adult life: at the beginning of her first serious relationship and a promising career at a major New York newspaper. Now she was labeled violent, psychotic, a flight risk. What happened?In a swift and breathtaking narrative, Susannah tells the astonishing true story of her descent into madness, her family’s inspiring faith in her, and the lifesaving diagnosis that nearly didn’t happen.",
//     playlist:"https://open.spotify.com/playlist/7d8YIagrOPzXitKiefwPGm",
//   }
//     var nbk3 = {
//       title: "The Blind Side: Evolution of a Game by Michael Lewis",
//       cover:"https://prodimage.images-bn.com/pimages/9780393330472_p0_v3_s550x406.jpg",
//       synopsis:"When we first meet him, Michael Oher is one of thirteen children by a mother addicted to crack; he does not know his real name, his father, his birthday, or how to read or write. He takes up football, and school, after a rich, white, Evangelical family plucks him from the streets. Then two great forces alter Oher: the family's love and the evolution of professional football itself into a game where the quarterback must be protected at any cost. Our protagonist becomes the priceless package of size, speed, and agility necessary to guard the quarterback's greatest vulnerability-his blind side.",
//   playlist:"https://open.spotify.com/album/1zM06ZeODLZp2Ojka6lUTf",
//     }
    
//     console.log(nonfic[0]);
// var button = document.getElementById("nonfic")
// button.addEventListener("click", function(){
//   var randomNum = Math.random()
//   console.log(randomNum);
//   var randomNumBig = randomNum * nonfic.length
//   var randomRound = Math.floor(randomNumBig);
//  document.getElementById("titlen").innerHTML = nonfic[randomRound].title;
//   document.getElementById("imgn").src= nonfic[randomRound].cover;
//   document.getElementById("synopsisn").innerHTML = nonfic[randomRound].synopsis;
//   document.getElementById("playlistn").innerHTML = "<a href=" + nonfic[randomRound].playlist + ">Click for Playlist!</a>"

// })

// var mystery=[mbk1,mbk2,mbk3,];

// var mbk1 ={
//   title: "Murder on the Orient Express, by Agatha Christie", 
//   cover:"https://prodimage.images-bn.com/pimages/9780062689665_p0_v2_s550x406.jpg",
// synopsis:"Just after midnight, a snowdrift stopped the Orient Ecpress in its tracks. The luxurious train was surprisingly full for the time of year, but by the morning there was one passenger fewer. An American lay dead in his compartment, stabbed a dozen times, his door locked from the inside...Red herrings galore are put in the path of Hercule Poirot to try to keep him off the scent, but in adramtic denouement he succeeds in coming up with not one but two solutions to the crime.",
//   playlist:"https://open.spotify.com/playlist/5QgBMnaDNUW0WmLK8hKPjf",
// }
//   var mbk2 = {
//   title:"It, by Stephen King",
//   cover:"https://prodimage.images-bn.com/pimages/9781501142970_p0_v3_s550x406.jpg",
// synopsis:"Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.",
//     playlist:"https://open.spotify.com/album/5tVCAKqFXuBvDMO5Jh3dZF",
//   }
//     var mbk3 = {
//       title: "The Woman in the Window' by A.J. Finn",
// cover:"https://imgix.bustle.com/uploads/image/2019/2/6/4396ca79-fe86-4da1-8640-06583473e646-thewomaninthewindow.jpg?w=646&fit=max&auto=format&q=70",
// synopsis:"Anna Fox lives alone—a recluse in her New York City home, unable to venture outside. She spends her day drinking wine (maybe too much), watching old movies, recalling happier times . . . and spying on her neighbors.Then the Russells move into the house across the way: a father, mother, their teenaged son. The perfect family. But when Anna, gazing out her window one night, sees something she shouldn’t, her world begins to crumble and its shocking secrets are laid bare.What is real? What is imagined? Who is in danger? Who is in control? In this diabolically gripping thriller, no one—and nothing—is what it seems.",
//       playlist:"https://open.spotify.com/playlist/0lBWiSDjWJwyhN1duhDA3T",
//   }
    
//     console.log(mystery[0]);
// var button = document.getElementById("mystery")
// button.addEventListener("click", function(){
//   var randomNum = Math.random()
//   console.log(randomNum);
//   var randomNumBig = randomNum * mystery.length
//   var randomRound = Math.floor(randomNumBig);
//  document.getElementById("titlem").innerHTML = mystery[randomRound].title;
//   document.getElementById("imgm").src= mystery[randomRound].cover;
//   document.getElementById("synopsism").innerHTML = mystery[randomRound].synopsis;
//   document.getElementById("playlistm").innerHTML = "<a href=" + mystery[randomRound].playlist + ">Click for Playlist!</a>"

// })

// var poetry= [pbk1, pbk2, pbk3];

// var pbk1 ={
//   title:"Brown Girl Dreaming, by Jacqueline Woodson",
//   cover:"https://prodimage.images-bn.com/pimages/9780147515827_p0_v1_s550x406.jpg",
//   synopsis:"Raised in South Carolina and New York, Woodson always felt halfway home in each place. In vivid poems, she shares what it was like to grow up as an African American in the 1960s and 1970s, living with the remnants of Jim Crow and her growing awareness of the Civil Rights movement. Touching and powerful, each poem is both accessible and emotionally charged, each line a glimpse into a child’s soul as she searches for her place in the world. Woodson’s eloquent poetry also reflects the joy of finding her voice through writing stories, despite the fact that she struggled with reading as a child. Her love of stories inspired her and stayed with her, creating the first sparks of the gifted writer she was to become.",
//   playlist:"https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ ",
// }

// var pbk2 ={
//   title:"For Every One, by Jason Reynolds",
//   cover:"https://prodimage.images-bn.com/pimages/9781481486255_p0_v1_s550x406.jpg",
//   synopsis:"For Every One is exactly that: for every one. For every one person. For every one who has a dream. But especially for every kid. The kids who dream of being better than they are. Kids who dream of doing more than they almost dare to imagine. Kids who are like Jason Reynolds, a self-professed dreamer. Jason does not claim to know how to make dreams come true; he has, in fact, been fighting on the front line of his own battle to make his own dreams a reality. He expected to make it when he was sixteen. Then eighteen. Then twenty-five. Now, some of those expectations have been realized. But others, the most important ones, lay ahead, and a lot of them involve kids, how to inspire them: All the kids who are scared to dream, or don’t know how to dream, or don’t dare to dream because they’ve NEVER seen a dream come true. Jason wants kids to know that dreams take time. They involve countless struggles. But no matter how many times a dreamer gets beat down, the drive and the passion and the hope never fully extinguishes—because simply having the dream is the start you need, or you won’t get anywhere anyway, and that is when you have to take a leap of faith.",
//   playlist:"https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ",
// }

// var pbk3 ={
//   title:"Light Filters In: Poems, by Caroline Kaufman, Yelena Bryksenkova (Illustrator)",
//   cover:"https://prodimage.images-bn.com/pimages/9780062844682_p0_v3_s550x406.jpg",
//   synopsis:"In Light Filters In, Caroline Kaufman—known as @poeticpoison—does what she does best: reflects our own experiences back at us and makes us feel less alone, one exquisite and insightful piece at a time. She writes about giving up too much of yourself to someone else, not fitting in, endlessly Googling “how to be happy,” and ultimately figuring out who you are.",
//   playlist:"https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ",
// }

// console.log(poetry[0]);
// var button = document.getElementById("poetry")
// button.addEventListener("click", function(){
//   var randomNum = Math.random()
//   console.log(randomNum);
//   var randomNumBig = randomNum * poetry.length
//   var randomRound = Math.floor(randomNumBig);
//  document.getElementById("titlep").innerHTML = poetry[randomRound].title;
//   document.getElementById("imgp").src= poetry[randomRound].cover;
//   document.getElementById("synopsisp").innerHTML = poetry[randomRound].synopsis;
//   document.getElementById("playlistp").innerHTML = "<a href=" + poetry[randomRound].playlist + ">Click for a Calming Poetry Playlist!</a>"

// })

// var realfic= [rebk1, rebk2, rebk3];

// var rebk1 ={
//   title:"Wonder, by R. J. Palacio",
//   cover:"https://prodimage.images-bn.com/pimages/9781524720193_p0_v5_s550x406.jpg",
//   synopsis:"August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid—but his new classmates can't get past Auggie's extraordinary face. Wonder, a #1 New York Times bestseller, begins from Auggie's point of view, but soon switches to include his classmates, his sister, her boyfriend, and others. These perspectives converge in a portrait of one community's struggle with empathy, compassion, and acceptance. ",
//   playlist:"https://open.spotify.com/album/0ZqgEL41BzggNI2mBVaL5X",
// }

// var rebk2 ={
//   title:"The Book Thief, by Markus Zusak",
//   cover:"https://prodimage.images-bn.com/pimages/9780142424179_p0_v1_s550x406.jpg",
// synopsis:"One of the most enduring stories of our time, The Book Thief is just a small story really, about, among other things: a girl, some words, an accordionist, some fanatical Germans, a Jewish fist fighter, and quite a lot of thievery.",
//   playlist:"https://open.spotify.com/album/3Q08y3UGU6lqRpksL66EHO",
// }

// var rebk3 ={
//   title:"The Perks of Being a Wallflower, by Stephen Chbosky",
//   cover:"https://prodimage.images-bn.com/pimages/9781101934180_p0_v2_s550x406.jpg",
// synopsis:"The Perks of Being a Wallflower is a story about what it’s like to travel that strange course through the uncharted territory of high school. The world of first dates, family dramas, and new friends. Of sex, drugs, and The Rocky Horror Picture Show. Of those wild and poignant roller-coaster days known as growing up.",
//   playlist:"https://open.spotify.com/playlist/5GryvYkKV0bHjoMhiOjPsY",
// }

// console.log(realfic[0]);
// var button = document.getElementById("realfic")
// button.addEventListener("click", function(){
//   var randomNum = Math.random()
//   console.log(randomNum);
//   var randomNumBig = randomNum * realfic.length
//   var randomRound = Math.floor(randomNumBig);
//  document.getElementById("titlep").innerHTML = realfic[randomRound].title;
//   document.getElementById("imgp").src= realfic[randomRound].cover;
//   document.getElementById("synopsisp").innerHTML = realfic[randomRound].synopsis;
//   document.getElementById("playlistp").innerHTML = "<a href=" + realfic[randomRound].playlist + ">Click for Playlist!</a>"

// })

// var romance= [rbk1, rbk2, rbk3];

// var rbk1 ={
//   title:"Me Before You, by Jojo Moyes",
//   cover:"https://prodimage.images-bn.com/pimages/9780143109464_p0_v3_s550x406.jpg",
//   synopsis:"Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has barely been farther afield than their tiny village. She takes a badly needed job working for ex–Master of the Universe Will Traynor, who is wheelchair bound after an accident. Will has always lived a huge life—big deals, extreme sports, worldwide travel—and now he’s pretty sure he cannot live the way he is.Will is acerbic, moody, bossy—but Lou refuses to treat him with kid gloves, and soon his happiness means more to her than she expected. When she learns that Will has shocking plans of his own, she sets out to show him that life is still worth living.",
//   playlist:"https://open.spotify.com/album/3WT1mEcabGFCvUWpeN5dtq",
// }

// var rbk2 ={
//   title:"The Fault in Our Stars, by John Green",
//   cover:"https://prodimage.images-bn.com/pimages/9780142424179_p0_v1_s550x406.jpg",
//   synopsis:"Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten.",
//   playlist:"https://open.spotify.com/album/7bXOViTvx6EHXuYFuI2yfj",
// }


// var rbk3 ={
//   title:"Five Feet Apart, by Rachael Lippincott, Mikki Daughtry (With), Tobias Iaconis (With)",
//   cover:"https://prodimage.images-bn.com/pimages/9781534451568_p0_v2_s550x406.jpg",
//   synopsis:"Stella Grant likes to be in control—even though her totally out of control lungs have sent her in and out of the hospital most of her life. At this point, what Stella needs to control most is keeping herself away from anyone or anything that might pass along an infection and jeopardize the possibility of a lung transplant. Six feet apart. No exceptions.The only thing Will Newman wants to be in control of is getting out of this hospital. He couldn’t care less about his treatments, or a fancy new clinical drug trial. Soon, he’ll turn eighteen and then he’ll be able to unplug all these machines and actually go see the world, not just its hospitals.Will’s exactly what Stella needs to stay away from. If he so much as breathes on Stella she could lose her spot on the transplant list. Either one of them could die. The only way to stay alive is to stay apart. But suddenly six feet doesn’t feel like safety. It feels like punishment.What if they could steal back just a little bit of the space their broken lungs have stolen from them? Would five feet apart really be so dangerous if it stops their hearts from breaking too?",
//   playlist:"https://open.spotify.com/album/2ZplpqDl4TDwvfqrUkvE5B",
// }

// console.log(romance[0]);
// var button = document.getElementById("romance")
// button.addEventListener("click", function(){
//   var randomNum = Math.random()
//   console.log(randomNum);
//   var randomNumBig = randomNum * romance.length
//   var randomRound = Math.floor(randomNumBig);
//   // console.log(randomNum);
//   // console.log(randomNumBig);
//   // console.log(randomRound);
//   // console.log(bk1[randomRound]);
//  document.getElementById("titlep").innerHTML = romance[randomRound].title;
//   document.getElementById("imgp").src= romance[randomRound].cover;
//   document.getElementById("synopsisp").innerHTML = romance[randomRound].synopsis;
//   document.getElementById("playlistp").innerHTML = "<a href=" + romance[randomRound].playlist + ">Click for Playlist!</a>"

// })












	
    

// link coding
$("#generate").click(function(){
  var x = $()
})


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// templet
// var poetry= [bk1, bk2, bk3];

// var bk1 ={
//   title:"",
//   cover:"",
//   synopsis:"",
//   playlist:"",
// }

// var bk2 ={
//   title:"",
//   cover:"",
//   synopsis:"",
//   playlist:"",
// }

// var bk3 ={
//   title:"",
//   cover:"",
//   synopsis:"",
//   playlist:"",
// }


// var romance=[rbk1,rbk2,rbk3,];

// var rbk1 ={
//   title: "Divergent, by Veronica Roth", 
//   cover:"https://prodimage.images-bn.com/pimages/9780062387240_p0_v1_s550x406.jpg",
//   synopsis:"One choice can transform you. Beatrice Prior's society is divided into five factions—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). Beatrice must choose between staying with her Abnegation family and transferring factions. Her choice will shock her community and herself. But the newly christened Tris also has a secret, one she's determined to keep hidden, because in this world, what makes you different makes you dangerous.",
//   playlist:"https://open.spotify.com/playlist/2vhRHJq6vlj5SXmflGRukO"
// }
//   var rbk2 = {
//   title:"Children of Blood and Bone, by Tomi Ayedemi",
//   cover:"http://prodimage.images-bn.com/pimages/9781250170972.jpg",
//   synopsis:"Zélie Abedola lives in a world where magic is punished and suppressed, but it wasn’t always this way. When she was small, Orïsha hummed with magic, including that of her mother, a Reaper with the ability to command souls. The ascendance of a ruthless king pushed magic underground and left Zélie orphaned. But now, by the side of a runaway princess in revolt against a brutal crown prince, she may have a chance at restoring magic—if she can ignore the wishes of her own renegade heart. This West African–inspired epic fantasy is tipped as being one of the biggest debuts of the year.",
//   playlist:"https://open.spotify.com/playlist/2Ws6UJIgA8vC5Zx8cSoORr",
//   }
//     var rbk3 = {
//       title: "Miss Peregrine's Home for Peculiar Children, by Ransom Riggs",
// cover:"https://prodimage.images-bn.com/pimages/9781594746031_p0_v4_s550x406.jpg",
//    synopsis: "A mysterious island.  An abandoned orphanage.  A strange collection of very curious photographs.  It all waits to be discovered in Miss Peregrine’s Home for Peculiar Children, an unforgettable novel that mixes fiction and photography in a thrilling reading experience. As our story opens, a horrific family tragedy sets sixteen-year-old Jacob journeying to a remote island off the coast of Wales, where he discovers the crumbling ruins of Miss Peregrine’s Home for Peculiar Children. As Jacob explores its abandoned bedrooms and hallways, it becomes clear that the children were more than just peculiar. They may have been dangerous. They may have been quarantined on a deserted island for good reason. And somehow—impossible though it seems—they may still be alive. A spine-tingling fantasy illustrated with haunting vintage photography, Miss Peregrine’s Home for Peculiar Children will delight adults, teens, and anyone who relishes an adventure in the shadows.",
//       playlist:"https://open.spotify.com/playlist/29jozNjH5LcyAWDWtw2DRC",
//   }


  
   
// console.log(fantasy[0]);
// var button = document.getElementById("fantasy")
// button.addEventListener("click", function(){
//   var randomNum = Math.random()
//   console.log(randomNum);
//   var randomNumBig = randomNum * fantasy.length
//   var randomRound = Math.floor(randomNumBig);
//  document.getElementById("titlef").innerHTML = fantasy[randomRound].title;
//   document.getElementById("imgf").src=fantasy[randomRound].cover;
//   document.getElementById("synopsisf").innerHTML = fantasy[randomRound].synopsis;
//   document.getElementById("playlistf").innerHTML = "<a href=" + fantasy[randomRound].playlist + ">Click for Playlist!</a>"
// })