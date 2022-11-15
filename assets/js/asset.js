$('.btn').click(function() {
    $('.modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('bottom') );
    $('.modal').modal('show');
});

// $('.SOS-btn').click(() => {
//     $('.bottom-sheet-wrapper').addClass('show-modal');
//   })
  
//   $('.close, .backdrop').click(() => {
//     $('.bottom-sheet-wrapper').removeClass('show-modal');
//   })