const allmember1 = [{name : "أحمد العبدالكريم"  , eidText : "لم يكتب بعد" , img : "./assist/img/ahmed2.jpeg"} , 
{name : "عبدالعزيز الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/abdulaziz.jpeg"},

{name : "ناصر المحترش"  , eidText : "كل عام وانتم بخير " , img : "./assist/img/nasser4.jpeg"},
{name : "علي المحترش "  , eidText : "💛 عساكم من عواده 💛" , img : "./assist/img/ali.jpeg"},
{name : "محمد الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/mohammed2.jpeg"},
{name : "سامي الرومي"  , eidText : "لم يكتب بعد" , img : "./assist/img/smai.jpeg"},
{name : "محمد الرومي"  , eidText : "كل عام وأعيادكم مسرات وفرح         " , img : "./assist/img/tahnoon.jpeg"},
{name : "عماد الفالح"  , eidText : `ولو انك بالعيد بعيداًما زلت لقلبي قريباً كل عام وانتم بخير واعاده الله علينا وعليكم بالصحة والعافية` , img : "./assist/img/emad.jpeg"},
{name : "يزيد الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/yazid.jpeg"},
{name : "باسل الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/basil.jpeg"},
{name : "عبدالرحمن المحترش"  , eidText : "العيد  بكم ،يكتمل وان لم يسعنا قطار المسافه  لنلتقي. بابتسامتكم يبدأ العيد. كل عام وانتم بخير" , img : "./assist/img/banee.jpeg"},
{name : "عبدالرحمن الفالح "  , eidText : " كل عام وأنتم بخير والله يعيده علينا وعليكم بالصحة والعافية يا أعز ناس على قلبي💛💛💛" , img : "./assist/img/abdulrrhman.jpeg"}]
const allmember = allmember1.map((ele , i) => {
   return {id :i , ...ele}
}

)
console.log(allmember)

let persons = document.getElementById('homes')
console.log(persons)
allmember.forEach(ele => {


    persons.innerHTML+= ` <div class="home">
    <img src="${ele.img}" alt="House 1" class="home__img" style = "height: 400px;">
   
   <div class = "home__like">
   <div class = "toToop">   <h1>  30 </h1>
   <div class="heart"></div></div>
  
   </div>
    
    <h2 class="home__name"  style = "font-size: 20px; font-family: 'Reem Kufi', sans-serif; ">${ele.name}</h2>
 
    <div class="home__rooms" style ="grid-column: 1 / -1">
       
        <p style= "font-size: medium;     text-align: center; font-family: 'Aref Ruqaa', serif;"> ${ele.eidText}</p>
    </div>

   
</div>`
    
});

{/* <svg class="home__like">
   
<use xlink:href="img/sprite.svg#icon-heart-full"> </use>
</svg> */}
$('.heart').on('click', function(){
    if (!$(this).hasClass("clickd")) {
    $(this).toggleClass('is_animating').addClass('clickd').removeClass('dobleclick')
    }
else{
    $(this).removeClass('clickd').addClass("dobleclick").removeClass("is_animating");
}
  });
