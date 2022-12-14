$('.card-2').click(function() {
    $('#sos-modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('bottom') );
    $('#sos-modal').modal('show');
});

$('.SOS-btn').click(function() {
  $('#learn-more-modal')
      .prop('class', 'modal fade') // revert to default
      .addClass( $(this).data('bottom') );
  $('#learn-more-modal').modal('show');
});


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log(userAgent);
    console.log(platform.name);
    // alert(platform.name);
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
      if (platform.name != 'Safari'){
        alert('open in safari for better experience');
      }  
      var newUrl = $('.install a').attr('href').replace('#', 'https://apps.apple.com/in/app/best-%E0%A4%AA-%E0%A4%B0%E0%A4%B5-%E0%A4%B8-prawas/id1479505664');
      $('.install a').attr('href', newUrl);
     //$(".install a").attr("href", "https://apps.apple.com/in/app/best-%E0%A4%AA-%E0%A4%B0%E0%A4%B5-%E0%A4%B8-prawas/id1479505664")    
    }
    else if( userAgent.match( /Android/i ) )
    {
      //return 'Android';
      var newUrl = $('.install a').attr('href').replace('#', 'https://play.google.com/store/apps/details?id=com.dimts.best.bestapplication&hl=en_IN&gl=US');
      $('.install a').attr('href', newUrl);
     // $(".install a").attr("href", "https://play.google.com/store/apps/details?id=com.dimts.best.bestapplication&hl=en_IN&gl=US")
    }
    else
    {
      //return 'unknown'; 
      var newUrl = $('.install a').attr('href').replace('#', 'https://play.google.com/store/apps/details?id=com.dimts.best.bestapplication&hl=en_IN&gl=US');
      $('.install a').attr('href', newUrl);
    //   $(".install a").attr("href", "https://play.google.com/store/apps/details?id=com.dimts.best.bestapplication&hl=en_IN&gl=US")
    }
}
  
getMobileOperatingSystem();

// $('.SOS-btn').click(() => {
//     $('.bottom-sheet-wrapper').addClass('show-modal');
//   })
  
//   $('.close, .backdrop').click(() => {
//     $('.bottom-sheet-wrapper').removeClass('show-modal');
//   })