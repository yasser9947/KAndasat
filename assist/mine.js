const allmember = [{name : "أحمد العبدالكريم"  , eidText : "لم يكتب بعد" , img : "./assist/img/ahmed2.jpeg"} , 
{name : "عبدالعزيز الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/abdulaziz.jpeg"},
{name : "ناصر المحترش"  , eidText : "لم يكتب بعد" , img : "./assist/img/nasser.jpeg"},
{name : "محمد الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/mohammed2.jpeg"},
{name : "سامي الرومي"  , eidText : "لم يكتب بعد" , img : "./assist/img/smai.jpeg"},
{name : "يزيد الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/yazid.jpeg"},
{name : "باسل الملحم"  , eidText : "لم يكتب بعد" , img : "./assist/img/basil.jpeg"},
{name : "عبدالرحمن الفالح "  , eidText : " كل عام وأنتم بخير والله يعيده علينا وعليكم بالصحة والعافية يا أعز ناس على قلبي" , img : "./assist/img/abdulrrhman.jpeg"}]

let persons = document.getElementById('homes')
console.log(persons)
allmember.forEach(ele => {


    persons.innerHTML+= ` <div class="home">
    <img src="${ele.img}" alt="House 1" class="home__img" style = "height: 400px;">
   
    <svg class="home__like">
   
        <use xlink:href="img/sprite.svg#icon-heart-full"> </use>
    </svg>
    
    <h2 class="home__name"  style = "font-size: 20px; font-family: 'Reem Kufi', sans-serif;">${ele.name}</h2>
 
    <div class="home__rooms" style ="grid-column: 1 / -1">
       
        <p style= "font-size: medium;     text-align: center; font-family: 'Aref Ruqaa', serif;"> ${ele.eidText}</p>
    </div>

   
</div>`
    
});
