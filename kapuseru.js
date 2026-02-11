const gachaList = [
  "一期一会",
  "異口同音",
  "温故知新",
  "自業自得",
  "十人十色",
  "以心伝心",
  "電光石火",
  "一石二鳥",
  "百発百中",
  "前代未聞",
  "完全無欠",
  "試行錯誤",
  "優柔不断",
  "四面楚歌",
  "起死回生",
  "臥薪嘗胆",
  "森羅万象",
  "大器晩成",
  "天真爛漫",
];

function drawGacha() {
  const randomIndex = Math.floor(Math.random() * gachaList.length);
  const result = gachaList[randomIndex];

  const video = document.getElementById("gachaVideo");
  const resultText = document.getElementById("result");

    

  resultText.textContent = "";       
  video.style.display = "block";     
  video.play();                      

  setTimeout(() => {
    video.style.display = "none";   
    resultText.textContent = result; 
  }, 8000); 
}

const button = document.getElementById("gachaButton");
button.addEventListener("click", drawGacha);


