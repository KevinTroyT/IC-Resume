import "./js/index"
import "./css/index.css"
import { mysite } from "../../declarations/mysite";

async function getNum(){
  const nums = await mysite.getNum();
  document.getElementById("thumbsUp").innerText = "点赞 " + greeting;
}

async function click(){
  mysite.thumbsUp()
}