
        $('.card').click(function(){
          $(this).toggleClass('flipped');
        });


        $('.img-video').click(function(){
          var video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
          $(this).replaceWith(video);
      });

//Video


      

