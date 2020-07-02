"use strict";

// import "../script/data.json";
//互动
$(document).on('click', '.item-text', function () {
  //初始化
  $(".item-text").find(".moreText").css({
    "height": '48px'
  });
  $(".item-text").find(".cut").css({
    "width": '300px'
  });
  $(".item-text").find("h3").css({
    "color": '#B2B2B2'
  });
  $(".item-text").find(".ball-1").css({
    "background-color": '#B2B2B2'
  });
  $(".item-text").find(".ball-2").css({
    "background-color": '#B2B2B2'
  });
  $(".item-text").css({
    "border-color": '#B2B2B2'
  });
  $(".item-text").find(".ball-2").html("");
  $(".item-text").find("i").html("+"); //效果

  if ($(this).find(".cut").width() == 300) {
    //
    $(this).find(".moreText").css({
      "height": 'auto'
    }); //

    $(this).find(".cut").css({
      "width": '0px'
    }); //

    $(this).find(".ball-1").css({
      "background-color": '#E1251B'
    }); //

    $(this).find(".ball-2").css({
      "background-color": '#E1251B'
    }); //

    $(this).css({
      "border-color": '#E1251B'
    }); //

    $(this).find("h3").css({
      "color": '#E1251B'
    }); //

    $(this).find(".ball-2").html("✔");
    $(this).find("i").html("-");
  } else {
    $(this).find(".moreText").css({
      "height": '48px'
    });
    $(this).find(".cut").css({
      "width": '300px'
    });
    $(this).find("h3").css({
      "color": '#B2B2B2'
    });
    $(this).find(".ball-1").css({
      "background-color": '#B2B2B2'
    });
    $(this).find(".ball-2").css({
      "background-color": '#B2B2B2'
    });
    $(this).css({
      "border-color": '#B2B2B2'
    });
    $(this).find(".ball-2").html("");
    $(this).find("i").html("+");
  }
});