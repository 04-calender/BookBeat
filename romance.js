var romance= [rbk1, rbk2, rbk3, rbk4];

var rbk1 ={
  title:"Me Before You, by Jojo Moyes",
  cover:"https://prodimage.images-bn.com/pimages/9780143109464_p0_v3_s550x406.jpg",
  synopsis:"Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has barely been farther afield than their tiny village. She takes a badly needed job working for ex–Master of the Universe Will Traynor, who is wheelchair bound after an accident. Will has always lived a huge life—big deals, extreme sports, worldwide travel—and now he’s pretty sure he cannot live the way he is.Will is acerbic, moody, bossy—but Lou refuses to treat him with kid gloves, and soon his happiness means more to her than she expected. When she learns that Will has shocking plans of his own, she sets out to show him that life is still worth living.",
  playlist:"https://open.spotify.com/album/3WT1mEcabGFCvUWpeN5dtq",
}

var rbk2 ={
  title:"The Fault in Our Stars, by John Green",
  cover:"https://prodimage.images-bn.com/pimages/9780142424179_p0_v1_s550x406.jpg",
  synopsis:"Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten.",
  playlist:"https://open.spotify.com/album/7bXOViTvx6EHXuYFuI2yfj",
}


var rbk3 ={
  title:"Five Feet Apart, by Rachael Lippincott, Mikki Daughtry (With), Tobias Iaconis (With)",
  cover:"https://prodimage.images-bn.com/pimages/9781534451568_p0_v2_s550x406.jpg",
  synopsis:"Stella Grant likes to be in control—even though her totally out of control lungs have sent her in and out of the hospital most of her life. At this point, what Stella needs to control most is keeping herself away from anyone or anything that might pass along an infection and jeopardize the possibility of a lung transplant. Six feet apart. No exceptions.The only thing Will Newman wants to be in control of is getting out of this hospital. He couldn’t care less about his treatments, or a fancy new clinical drug trial. Soon, he’ll turn eighteen and then he’ll be able to unplug all these machines and actually go see the world, not just its hospitals.Will’s exactly what Stella needs to stay away from. If he so much as breathes on Stella she could lose her spot on the transplant list. Either one of them could die. The only way to stay alive is to stay apart. But suddenly six feet doesn’t feel like safety. It feels like punishment.What if they could steal back just a little bit of the space their broken lungs have stolen from them? Would five feet apart really be so dangerous if it stops their hearts from breaking too?",
  playlist:"https://open.spotify.com/album/2ZplpqDl4TDwvfqrUkvE5B",
}
var rbk4 ={
  title:"Everything, Everything, by Nicola Yoon",
  cover:"https://prodimage.images-bn.com/pimages/9780553496673_p0_v4_s550x406.jpg",
  synopsis:"My disease is as rare as it is famous. Basically, I’m allergic to the world. I don’t leave my house, have not left my house in seventeen years. The only people I ever see are my mom and my nurse, Carla.  But then one day, a moving truck arrives next door. I look out my window, and I see him. He's tall, lean and wearing all black—black T-shirt, black jeans, black sneakers, and a black knit cap that covers his hair completely. He catches me looking and stares at me. I stare right back. His name is Olly. Maybe we can’t predict the future, but we can predict some things. For example, I am certainly going to fall in love with Olly. It’s almost certainly going to be a disaster.",
  playlist:"https://open.spotify.com/playlist/0Qn6j6VFrKFESIkwuuBJMF",
}

console.log(romance[0]);
var button = document.getElementById("romance")
button.addEventListener("click", function(){
  var randomNum = Math.random()
  console.log(randomNum);
  var randomNumBig = randomNum * romance.length
  var randomRound = Math.floor(randomNumBig);
  // console.log(randomNum);
  // console.log(randomNumBig);
  // console.log(randomRound);
  // console.log(bk1[randomRound]);
 document.getElementById("titler").innerHTML = romance[randomRound].title;
  document.getElementById("imgr").src= romance[randomRound].cover;
  document.getElementById("synopsisr").innerHTML = romance[randomRound].synopsis;
  document.getElementById("playlistr").innerHTML = "<a href=" + romance[randomRound].playlist + ">Click for Playlist!</a>"

})


