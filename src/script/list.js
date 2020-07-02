$.ajax({
    url: "../script/list.json",
    success: function(msg){
            for(let j=0;j<msg[0].img.length;j++){
            var str = `
            <div class="swiper-slide">
                <li>
                    <a href="">
                        <div class="food-img">
                        <img src="${msg[0].img[j]}"alt="${msg[0].name[j]}">
                        </div>
                        <div class="food-name">
                        ${msg[0].name[j]}
                        </div>
                    </a>
                </li>
            </div>
            `
            $(".scroll>div .swiper-wrapper").eq(0).append(str)
            $(".scroll>div .swiper-wrapper").eq(5).append(str)
            }


            for(let j=0;j<msg[1].img.length;j++){
                var str = `
                <div class="swiper-slide">
                    <li>
                        <a href="">
                            <div class="food-img">
                            <img src="${msg[1].img[j]}"alt="${msg[1].name[j]}">
                            </div>
                            <div class="food-name">
                            ${msg[1].name[j]}
                            </div>
                        </a>
                    </li>
                </div>
                `
                $(".scroll>div .swiper-wrapper").eq(1).append(str)
                $(".scroll>div .swiper-wrapper").eq(4).append(str)
                $(".scroll>div .swiper-wrapper").eq(6).append(str)
            }

            for(let j=0;j<msg[2].img.length;j++){
                var str = `
                <div class="swiper-slide">
                    <li>
                        <a href="">
                            <div class="food-img">
                            <img src="${msg[2].img[j]}"alt="${msg[2].name[j]}">
                            </div>
                            <div class="food-name">
                            ${msg[2].name[j]}
                            </div>
                        </a>
                    </li>
                </div>
                `
                $(".scroll>div .swiper-wrapper").eq(2).append(str)
                $(".scroll>div .swiper-wrapper").eq(3).append(str)
            }





    }
 });