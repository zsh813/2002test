"use strict";

$.ajax({
  url: "../script/list.json",
  success: function success(msg) {
    for (var j = 0; j < msg[0].img.length; j++) {
      var str = "\n            <div class=\"swiper-slide\">\n                <li>\n                    <a href=\"\">\n                        <div class=\"food-img\">\n                        <img src=\"".concat(msg[0].img[j], "\"alt=\"").concat(msg[0].name[j], "\">\n                        </div>\n                        <div class=\"food-name\">\n                        ").concat(msg[0].name[j], "\n                        </div>\n                    </a>\n                </li>\n            </div>\n            ");
      $(".scroll>div .swiper-wrapper").eq(0).append(str);
      $(".scroll>div .swiper-wrapper").eq(5).append(str);
    }

    for (var _j = 0; _j < msg[1].img.length; _j++) {
      var str = "\n                <div class=\"swiper-slide\">\n                    <li>\n                        <a href=\"\">\n                            <div class=\"food-img\">\n                            <img src=\"".concat(msg[1].img[_j], "\"alt=\"").concat(msg[1].name[_j], "\">\n                            </div>\n                            <div class=\"food-name\">\n                            ").concat(msg[1].name[_j], "\n                            </div>\n                        </a>\n                    </li>\n                </div>\n                ");
      $(".scroll>div .swiper-wrapper").eq(1).append(str);
      $(".scroll>div .swiper-wrapper").eq(4).append(str);
      $(".scroll>div .swiper-wrapper").eq(6).append(str);
    }

    for (var _j2 = 0; _j2 < msg[2].img.length; _j2++) {
      var str = "\n                <div class=\"swiper-slide\">\n                    <li>\n                        <a href=\"\">\n                            <div class=\"food-img\">\n                            <img src=\"".concat(msg[2].img[_j2], "\"alt=\"").concat(msg[2].name[_j2], "\">\n                            </div>\n                            <div class=\"food-name\">\n                            ").concat(msg[2].name[_j2], "\n                            </div>\n                        </a>\n                    </li>\n                </div>\n                ");
      $(".scroll>div .swiper-wrapper").eq(2).append(str);
      $(".scroll>div .swiper-wrapper").eq(3).append(str);
    }
  }
});