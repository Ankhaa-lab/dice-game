//тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;

// Тоглогчдын цуглуулсэн оног хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
//DOM -ийг хэрхэн өөрчлөх талаар доорх харуулна. querySelector нь DOM дотроос өгөгдсөн обьектыг хайж олох үйлдлийг хийнэ. window.document нь дэлгэцэнд байгаа обьектуудыг зааж байгаа:
// textcontent бол манай жишээний хувьд div ийн өгөгдөл буюу 43-ийг зааж банйа.
window.document.querySelector("#score-0").textContent = diceNumber;

// <div class="player-name" id="name-1">Player 2</div>
//textcontent дээр HTML бичиж болохгүй тул HTML бичихээр болвол textcontent ийн оронд innerHTML гэж бичнэ.
//Жнь: window.document.querySelector("#score-1").innerHTML = "<em>haha</em>";

window.document.querySelector("#score-1").textContent = diceNumber;
// дээрх бичиглэлийг доорх байдалтай window обьектгүй бичиж болно. учир нь window нь глобал обьект тул функцийг гадна, дотор бүгдэд нь харагдах тул түүнийг зарлах шаардлагагүй. бид өмнө нь энэ талаар үзсэн.
//document.querySelector("#score-1").textContent = dice;

//<img src="dice-5.png" alt="Dice" class="dice" />
// css -ийн style -руу хандах даа style гэж хандана. Түүний ард нь сонгосон selector дотроо ямар үлдэл хийх гэж байгаагаа бичээд утга олгож өгнө. Доорх жишээ нь DOM дотроос dice классруу хандаад тухайн dice классын style буюу css рүү хандаж тухайн dice класст нь display операторт none утга олгож тухайн dice класстай div -ийг дэлгэцэнд харагдахгүй болгож байна.
//window.document.querySelector(".dice").style.display = "none";

//Програм эхлэхэд бэлтгэе.
document.querySelector("#score-0").textContent = 0;
//getElementById нь querySelector ижил үүрэг гүйцэтгэдэг. Мөн илүү олон дахин хурдтай ажилладаг. гэхдээ getElementById функц нь DOM-оос зөвхөн ID орж ирнэ гэдгийг мэддэг тул DOM -оос зөвхөн ID нуудыг л хайж олдог тул хурдан байдаг. Иймд бид DOM -оос ID хайж байгаа тохиодолд getElementById функц ашиглах нь тохиромжтой юм.
//АНХААРАХ ЗЙЛ:  getElementById функц нь ID -аар хайдаг тул ID -ийн нэрний өмнө # тэмдэг тавьж өгөх шаардлагагүй.
// -Мөн DOM - оос обьектоо JS олоогүй тохиолдод NULL утгыг авдаг.
document.getElementById("score-1").textContent = 0;
//<div class="player-current-score" id="current-1">0</div>
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

//document.querySelector(".dice").style.display = "none";

// Eventlistener дуудах: Доорх код дахь addEventListener функц нь Eventlistener дуудаж ажиллуулж байна. Ажиллуулахдаа mouse click хийхэд shooShid функцыг дуудаж ажиллуулах байдлаар зааж байна.  Гэхдээ бид түүний доорх байдлаар anonymous функц болгоод бичиж байна. Учир нь shooShid функцыг бид нэг л газар дуудаж ашиглах учир тэр газар нь anonymous функц байдлаар тодорхойлж өгч байгаа юм.

/* document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //alert("Шоо буулаа + : " + diceNumber);
  // Одоо шооын зургийг гаргая. 
  document.querySelector(".dice").style.display = "block";
  //доорх код нь img тагийн dice класстай src атрибутад зургыг нэрийг олгох замаар <img src="dice-5.png" alt="Dice" class="dice" /> html кодод утга олгож байна.
  document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
});
*/
// Одоо бид querySelector ашиглан .dice классыг олон дахин олж байдлыг дараах байдлаар хялбар болгож, программаа хурдан болгож болно.
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //alert("Шоо буулаа + : " + diceNumber);
  // Одоо шооын зургийг гаргая.
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});

/* function shooShid() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    alert("Шоо буулаа: " + diceNumber);
  } */

console.log("Шоо : " + diceNumber);

/* Шоо шиддэг товчоо ажилладаг болгоё
Програмчлах дараалал: 
    - Roll dice товчийг DOM -с авна.
    - Уг товч дээр хулганаар CLICK хийхэд ажиллах эвэнт листенер функц бичиж холбоно.
    - Клик хийхэд:
        * 1-6 хооронд санамсаргүй тоо үүсгэнэ.
        * DOM -с шооны зургийг обьектийг авна. 
        * Уг обьектийг вэб дээр харагддаг болгоно.
        * Уг обьектийн зургийг өөрчилнө. */
