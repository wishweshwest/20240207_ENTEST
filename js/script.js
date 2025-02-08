$(function(){

    var slideCurrentIndex = 0;
    var totalSlides = $(".slide_box").length;

    function moveSlide(index) {
        var moveAmount = -index * (100 / totalSlides); 
        $(".slide_wrap").css("transform", "translateX(" + moveAmount + "%)"); 
    }

    function startAutoSlide() {
        setInterval(function () {
            if (slideCurrentIndex < totalSlides - 1) {
                slideCurrentIndex++; 
            } else {
                slideCurrentIndex = 0; 
            }
            moveSlide(slideCurrentIndex); 
        }, 4000);
    }


    $(".right_btn").click(function () {
        if (slideCurrentIndex < totalSlides - 1) {
            slideCurrentIndex++; 
        } else {
            slideCurrentIndex = 0;
        }
        moveSlide(slideCurrentIndex);
    });

    $(".left_btn").click(function () {
        if (slideCurrentIndex > 0) {
            slideCurrentIndex--; 
        } else {
            slideCurrentIndex = totalSlides - 1;
        }
        moveSlide(slideCurrentIndex);
    });


    startAutoSlide();




  
    
        let list = $("#list");
    
        let maxItems = 15;
    
        let btnCurrentIndex = 0;
    
        let itemsToAppend = [
            `<li><div class="obj"><img src="./img/img2.jpg" alt=""></div><p>새로운 아이템 1</p></li>`,
            `<li><div class="obj"><img src="./img/img2.jpg" alt=""></div><p>새로운 아이템 2</p></li>`,
            `<li><div class="obj"><img src="./img/img2.jpg" alt=""></div><p>새로운 아이템 3</p></li>`,
            `<li><div class="obj"><img src="./img/img3.jpg" alt=""></div><p>새로운 아이템 4</p></li>`,
            `<li><div class="obj"><img src="./img/img3.jpg" alt=""></div><p>새로운 아이템 5</p></li>`,
            `<li><div class="obj"><img src="./img/img3.jpg" alt=""></div><p>새로운 아이템 6</p></li>`,
            `<li><div class="obj"><img src="./img/img4.jpg" alt=""></div><p>새로운 아이템 7</p></li>`,
            `<li><div class="obj"><img src="./img/img4.jpg" alt=""></div><p>새로운 아이템 8</p></li>`,
            `<li><div class="obj"><img src="./img/img4.jpg" alt=""></div><p>새로운 아이템 9</p></li>`
        ];
    
        $("#more_btn").click(function () {
            let currentItems = list.children("li").length;
    
            if (currentItems < maxItems) {
                for (let i = btnCurrentIndex; i < btnCurrentIndex + 3; i++) {
                    if (i < itemsToAppend.length) {
                        $(itemsToAppend[i]).hide().appendTo(list).fadeIn(500);
                    }
                }

                btnCurrentIndex += 3;

                if (list.children("li").length >= maxItems) {
                    $('#more_btn').css('display','none');
                }
            }
        });
  
});