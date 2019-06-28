var mystery=[mbk1,mbk2,mbk3,mbk4];

var mbk1 ={
  title: "Murder on the Orient Express, by Agatha Christie", 
  cover:"https://prodimage.images-bn.com/pimages/9780062689665_p0_v2_s550x406.jpg",
synopsis:"Just after midnight, a snowdrift stopped the Orient Ecpress in its tracks. The luxurious train was surprisingly full for the time of year, but by the morning there was one passenger fewer. An American lay dead in his compartment, stabbed a dozen times, his door locked from the inside...Red herrings galore are put in the path of Hercule Poirot to try to keep him off the scent, but in adramtic denouement he succeeds in coming up with not one but two solutions to the crime.",
  playlist:"https://open.spotify.com/playlist/5QgBMnaDNUW0WmLK8hKPjf",
}
  var mbk2 = {
  title:"It, by Stephen King",
  cover:"https://prodimage.images-bn.com/pimages/9781501142970_p0_v3_s550x406.jpg",
synopsis:"Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.",
    playlist:"https://open.spotify.com/album/5tVCAKqFXuBvDMO5Jh3dZF",
  }
    var mbk3 = {
      title: "The Woman in the Window' by A.J. Finn",
cover:"https://imgix.bustle.com/uploads/image/2019/2/6/4396ca79-fe86-4da1-8640-06583473e646-thewomaninthewindow.jpg?w=646&fit=max&auto=format&q=70",
synopsis:"Anna Fox lives alone—a recluse in her New York City home, unable to venture outside. She spends her day drinking wine (maybe too much), watching old movies, recalling happier times . . . and spying on her neighbors.Then the Russells move into the house across the way: a father, mother, their teenaged son. The perfect family. But when Anna, gazing out her window one night, sees something she shouldn’t, her world begins to crumble and its shocking secrets are laid bare.What is real? What is imagined? Who is in danger? Who is in control? In this diabolically gripping thriller, no one—and nothing—is what it seems.",
      playlist:"https://open.spotify.com/playlist/0lBWiSDjWJwyhN1duhDA3T",
  }
    var mbk4 ={
  title:"The Girl with the Dragon Tattoo (Millennium Series #1), by Stieg Larsson, Reg Keeland (Translator)",
  cover:"https://prodimage.images-bn.com/pimages/9780307454546_p0_v3_s550x406.jpg",
  synopsis:"A spellbinding amalgam of murder mystery, family saga, love story, and financial intrigue. It’s about the disappearance forty years ago of Harriet Vanger, a young scion of one of the wealthiest families in Sweden . . . and about her octogenarian uncle, determined to know the truth about what he believes was her murder. It’s about Mikael Blomkvist, a crusading journalist recently at the wrong end of a libel case, hired to get to the bottom of Harriet’s disappearance . . . and about Lisbeth Salander, a twenty-four-year-old pierced and tattooed genius hacker possessed of the hard-earned wisdom of someone twice her age—and a terrifying capacity for ruthlessness to go with it—who assists Blomkvist with the investigation. This unlikely team discovers a vein of nearly unfathomable iniquity running through the Vanger family, astonishing corruption in the highest echelons of Swedish industrialism—and an unexpected connection between themselves.",
  playlist:"https://open.spotify.com/album/3WIaWa0mLGaa2tHuNLhAcw",
}
    
    console.log(mystery[0]);
var button = document.getElementById("mystery")
button.addEventListener("click", function(){
  var randomNum = Math.random()
  console.log(randomNum);
  var randomNumBig = randomNum * mystery.length
  var randomRound = Math.floor(randomNumBig);
 document.getElementById("titlem").innerHTML = mystery[randomRound].title;
  document.getElementById("imgm").src= mystery[randomRound].cover;
  document.getElementById("synopsism").innerHTML = mystery[randomRound].synopsis;
  document.getElementById("playlistm").innerHTML = "<a href=" + mystery[randomRound].playlist + ">Click for Playlist!</a>"

})
