/**
 * Note: in codepen.io, did not website allow reloading, use "Run" Button to reloading.
 **/

 const imageurlshower = document.getElementById("imageaddress");
 const imageArea = document.getElementById("backrgr");
 const images = [
   "https://media.tenor.com/QSMHcjNMtf4AAAAM/creeper-minecraft.gif",
   "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/784a8c6e-bcea-4ea6-9022-71dfdcaf9185/d9cdu65-9db96ca7-a8a4-4e21-babc-81cb96ec105a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc4NGE4YzZlLWJjZWEtNGVhNi05MDIyLTcxZGZkY2FmOTE4NVwvZDljZHU2NS05ZGI5NmNhNy1hOGE0LTRlMjEtYmFiYy04MWNiOTZlYzEwNWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dZpVWvHHVr9372ixLGkx3s2Px6h6SqadMov8iQVIMMY",
   "https://media4.giphy.com/media/r8GMmlV8qGrfZ3txfX/giphy.gif",
   "https://i.pinimg.com/originals/f8/95/3d/f8953d8b42ff5239fa1b850f703d6c5a.gif",
   "https://i.pinimg.com/originals/57/a8/d6/57a8d6712034c2faa5f0e54021161166.gif",
   "https://media.tenor.com/BmEpmBGDfdAAAAAC/minecraft-spider.gif",
   "https://media.tenor.com/bqsJv2IM4RYAAAAC/minecraft-funny.gif",
   "https://i.pinimg.com/originals/92/64/e4/9264e45e96c6725b9e36af434b0d5ae7.gif",
   "https://thumbs.gfycat.com/EachTepidCusimanse-max-1mb.gif",
   "https://media.tenor.com/UPUPXaiISrsAAAAd/roblox-meme.gif",
   "https://www.icegif.com/wp-content/uploads/roblox-icegif-9.gif",
   "https://i.imgflip.com/4cjmqx.gif",
   "https://img.gifmagazine.net/gifmagazine/images/2690123/original.gif",
   "https://media.tenor.com/j6xgaIAWCAcAAAAC/people-playground-funny.gif",
   "https://c.tenor.com/q9cZbgLZ3MQAAAAM/bruh-moai.gif",
   "https://media.tenor.com/sNVbg7QE7NIAAAAC/melon-playground.gif",
   "https://media.tenor.com/JRPJtwvXspUAAAAM/me-lon.gif",
   "https://i.redd.it/wm9or1ubfah91.gif",
   "https://i.pinimg.com/736x/88/16/b9/8816b9d400fc0a9948af47da0613320e.jpg",
   "https://media.tenor.com/Fk4BjZ4toAEAAAAd/pibby.gif",
   "https://media.tenor.com/dtp3vXwTqlYAAAAM/letter-u.gif"
 ];
 
 const imageNo = Math.floor(Math.random() * images.length);
 imageArea.src = images[imageNo];
 imageurlshower.innerHTML = images[imageNo];
 imageurlshower.href = images[imageNo];
 