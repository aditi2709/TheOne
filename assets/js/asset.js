$('.btn').click(function() {
    $('.modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('bottom') );
    $('.modal').modal('show');
});


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log(userAgent);
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
      //return 'iOS';  
      $(".mobile-install a").attr("href", "https://apps.apple.com/in/app/best-%E0%A4%AA-%E0%A4%B0%E0%A4%B5-%E0%A4%B8-prawas/id1479505664")    
    }
    else if( userAgent.match( /Android/i ) )
    {
      //return 'Android';
      $(".mobile-install a").attr("href", "https://play.google.com/store/apps/details?id=com.dimts.best.bestapplication&hl=en_IN&gl=US")
    }
    else
    {
        $(".mobile-install a").attr("href", "https://play.google.com/store/apps/details?id=com.dimts.best.bestapplication&hl=en_IN&gl=US")
      //return 'unknown'; 
    //   $('body').addClass('other-device');
    //   $(".op").append( "other" );
    }
}
  
getMobileOperatingSystem();

// $('.SOS-btn').click(() => {
//     $('.bottom-sheet-wrapper').addClass('show-modal');
//   })
  
//   $('.close, .backdrop').click(() => {
//     $('.bottom-sheet-wrapper').removeClass('show-modal');
//   })