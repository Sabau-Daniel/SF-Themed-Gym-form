$(document).ready(function() {
  $('#sfForm').on('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Add more jQuery functionalities here
  });

  $('#name').hover(
    function() {
      $(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
    },
    function() {
      $(this).css('background-color', 'rgba(255, 255, 255, 0.1)');
    }
  );

  // Example: Animate form fields on focus
  $('input').focus(function() {
    $(this).animate({ borderWidth: '3px' }, 300);
  }).blur(function() {
    $(this).animate({ borderWidth: '1px' }, 300);
  });
});

// Add event listener for input focus
$('.form-control').focus(function() {
  $(this).removeClass('dark-bg').addClass('light-text');
});

// Add event listener for input blur
$('.form-control').blur(function() {
  $(this).removeClass('light-text').addClass('dark-bg');
});

