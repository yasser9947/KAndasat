if (!localStorage.id) localStorage.setItem('id', uuid())

const allmember1 = [{ name: "أحمد العبدالكريم", eidText: "لم يكتب بعد", img: "./assist/img/ahmed2.jpeg" },
{ name: "عبدالعزيز الملحم", eidText: "لم يكتب بعد", img: "./assist/img/abdulaziz.jpeg" },

{ name: "ناصر المحترش", eidText: "كل عام وانتم بخير ", img: "./assist/img/nasser4.jpeg" },
{ name: "علي المحترش ", eidText: "💛 عساكم من عواده 💛", img: "./assist/img/ali.jpeg" },
{ name: "محمد الملحم", eidText: "لم يكتب بعد", img: "./assist/img/mohammed2.jpeg" },
{ name: "سامي الرومي", eidText: "لم يكتب بعد", img: "./assist/img/smai.jpeg" },
{ name: "محمد الرومي", eidText: "كل عام وأعيادكم مسرات وفرح         ", img: "./assist/img/tahnoon.jpeg" },
{ name: "عماد الفالح", eidText: `ولو انك بالعيد بعيداًما زلت لقلبي قريباً كل عام وانتم بخير واعاده الله علينا وعليكم بالصحة والعافية`, img: "./assist/img/emad.jpeg" },
{ name: "يزيد الملحم", eidText: "لم يكتب بعد", img: "./assist/img/yazid.jpeg" },
{ name: "باسل الملحم", eidText: "لم يكتب بعد", img: "./assist/img/basil.jpeg" },
{ name: "عبدالرحمن المحترش", eidText: "العيد  بكم ،يكتمل وان لم يسعنا قطار المسافه  لنلتقي. بابتسامتكم يبدأ العيد. كل عام وانتم بخير", img: "./assist/img/banee.jpeg" },
{ name: "عبدالرحمن الفالح ", eidText: " كل عام وأنتم بخير والله يعيده علينا وعليكم بالصحة والعافية يا أعز ناس على قلبي💛💛💛", img: "./assist/img/abdulrrhman.jpeg" }]
let allmember
function sortByAge(arr) {
    arr.sort((a, b) => a.likes.length > b.likes.length ? 1 : -1);
  }
axios.get('https://sei12.herokuapp.com/kandasat')
    .then(res => {
        allmember = res.data
       
          sortByAge(allmember)
          allmember = allmember.reverse() 
        let persons = document.getElementById('homes')
        console.log(persons)
        allmember.forEach(ele => {


            persons.innerHTML += ` <div class="home">
            <img src="${ele.img}" alt="House 1" class="home__img" style = "height: 400px; object-fit: cover;">
   
             <div class = "home__like">
              <div class = "toToop">   <h1 style = "color : Blue ;  background-color: #f9f7f6"> ${ele.likes.length} </h1>
             <div class="heart ${ele.likes.includes(localStorage.id) ? "clickd" : ""}" id =${ele._id}></div></div>
  
             </div>
    
          <h2 class="home__name"  style = "font-size: 20px; font-family: 'Reem Kufi', sans-serif; ">${ele.name}</h2>
 
          <div class="home__rooms" style ="grid-column: 1 / -1">
       
        <p style= "font-size: medium;     text-align: center; font-family: 'Aref Ruqaa', serif;"> ${ele.eidText}</p>
              </div>

   
        </div>`

        });
        $('.heart').on('click', function () {

            let id = $(this).attr('id')
            if (!$(this).hasClass("clickd")) {
              
                $(this).toggleClass('is_animating').addClass('clickd').removeClass('dobleclick')
             
                $(this).parent().find("h1").text( (Number($(this).parent().find("h1").text()) + 1).toString())

    
                axios.post('https://sei12.herokuapp.com/kandasat/likes', { id: id, like: localStorage.id, off: false }).then(

                    console.log()
                )
            }
            else {
                $(this).parent().find("h1").text( (Number($(this).parent().find("h1").text()) -1).toString())

                $(this).removeClass('clickd').addClass("dobleclick").removeClass("is_animating");
                axios.post('https://sei12.herokuapp.com/kandasat/likes', { id: id, like: localStorage.id, off: true }).then(

                    console.log()
                )
            }
        });



        var touchtime = 0;
        $(".home__img").on("click", function () {
            if (touchtime == 0) {
                // set first click

                touchtime = new Date().getTime();
            } else {
                // compare first click to this click and see if they occurred within double click threshold
                if (((new Date().getTime()) - touchtime) < 800) {
                    // double click occurred
                    $(this).parent().find(".heart").toggleClass('is_animating').addClass('clickd').removeClass('dobleclick')
                    let id = $(this).parent().find(".heart").attr('id')
                    console.log(Number($(this).parent().find("h1").text()))
                    $(this).parent().find("h1").text( (Number($(this).parent().find("h1").text()) + 1).toString())
                    // console.log($(this).parent().find(".heart").toggleClass('is_animating').addClass('clickd').removeClass('dobleclick'))
                    touchtime = 0;
                    axios.post('https://sei12.herokuapp.com/kandasat/likes', { id: id, like: localStorage.id, off: false }).then(

                        console.log()
                    )
                } else {
                    // not a double click so set as a new first click
                    touchtime = new Date().getTime();
                }
            }
        });
    })



{/* <svg class="home__like">
   
<use xlink:href="img/sprite.svg#icon-heart-full"> </use>
</svg> */}

