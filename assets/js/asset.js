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
      $('body').addClass('ios-device');
      $(".op").append( "iOS" );
    }
    else if( userAgent.match( /Android/i ) )
    {
      //return 'Android';
      $('body').addClass('android-device');
      $(".op").append( "Android" );
    }
    else
    {
      //return 'unknown'; 
      $('body').addClass('other-device');
      $(".op").append( "other" );
    }
}
  
getMobileOperatingSystem();

// $('.SOS-btn').click(() => {
//     $('.bottom-sheet-wrapper').addClass('show-modal');
//   })
  
//   $('.close, .backdrop').click(() => {
//     $('.bottom-sheet-wrapper').removeClass('show-modal');
//   })