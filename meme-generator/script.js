const title = document.querySelector("h3");
const authorName = document.querySelector("span");
const img = document.querySelector("img");
const generateMemeBtn = document.querySelector("button");

async function getMemes() {
try { const res = await fetch(`https://meme-api.com/gimme/wholesomememes`);
  const data= await res.json();
  console.log(data);
  title.innerText=data.title;
  authorName.innerText=`${data.author}`;
  img.src=data.url;
}
  catch(err){
    console.error(err);
  }

}

generateMemeBtn.addEventListener("click", () => {
    getMemes();
//   const memeData= 
//   console.log(memeData);
});
