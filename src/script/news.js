
    $(document).on('mouseenter','.news',
        function(){
            $(this).find('.news_text p').css('color','#fff')
            $(this).find('.news_text h4').css('color','#fff')
            $(this).find('.news_bg').css('opacity',"1")
            $(this).find('.news_img img').css('transform',"scale(1.03)")
    })
    $(document).on('mouseleave','.news',
        function(){
        $(this).find('.news_text p').css('color','#808080')
        $(this).find('.news_text h4').css('color','#808080')
        $(this).find('.news_bg').css('opacity','0')
        $(this).find('.news_img img').css('transform',"scale(1)")
    })
   

  
