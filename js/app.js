import '../CSS/style.scss';

document.addEventListener("DOMContentLoaded", function(event){
    console.log("ok")

    ready(); //burger menu Functionality

    headerCarousel(); //header automatic slideshow fuctionality

    imgSlider(); //imgsectionslider

    naklik();

    function headerCarousel(){
        var header = document.querySelector("header");

        //automatic slideshow - change background image every 7 sec - without loading background images

        if (header.classList.value.indexOf("debil") !== -1){
            header.classList.remove("debil")
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        }else if (header.classList.value.indexOf("backgroundChange backgroundChange1 backgroundChange2 backgroundChange3") !== -1){
            header.classList.remove("backgroundChange3");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        }else if (header.classList.value.indexOf("backgroundChange backgroundChange1 backgroundChange2") !== -1){
            header.classList.remove("backgroundChange2");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        }else if (header.classList.value.indexOf("backgroundChange backgroundChange1") !== -1){
            header.classList.remove("backgroundChange1");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        }else if (header.classList.value.indexOf("backgroundChange") !== -1){
            header.classList.add("backgroundChange1");
            header.classList.add("backgroundChange2");
            header.classList.add("backgroundChange3");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        }
    }
    



    function ready(){
        const menuTab = document.querySelector(".menu-tab");
        const menuHide = document.querySelector(".menu-hide");
        const menuStrip = document.querySelector(".menuStrip");

        console.log(menuTab);
        console.log(menuHide);
        console.log(menuStrip);


        menuTab.addEventListener("click", function(){
            menuHide.classList.toggle("show")
            menuTab.classList.toggle("active")
        });

        menuStrip.addEventListener("click", function(){
            menuHide.classList.removeClass("show");
            menuTab.classList.removeClass("active");
        });
    }

    function imgSlider() {
        var nextPicture = document.querySelector(".nav");
        var prevPicture = document.querySelector(".nav1");
        var listLi = document.querySelectorAll(".imgList");

        var counter = 0;
        listLi[counter].classList.remove('hidden');

        nextPicture.addEventListener("click", function () {
            listLi[counter].classList.add('hidden');
            if(counter >= listLi.length-1){
                counter = 0;
            }else{
                counter++;
            }
            listLi[counter].classList.remove('hidden');
        });

        prevPicture.addEventListener("click", function () {
            listLi[counter].classList.add('hidden');
            if(counter === 0){
                counter = listLi.length-1;
            }else{
                counter--;
            }
            listLi[counter].classList.remove('hidden');
        });
    }

    function naklik(){
        var napis = document.querySelector(".helloworldbox");
        console.log(napis);
        napis.addEventListener("click", function(){
            console.log("debil");
        })


    }

});