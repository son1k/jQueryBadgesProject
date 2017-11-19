$(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/rafael-kinoshita.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed );
    }
  });
}); 
function addCourses(courses){
  var $badges = $('#badges');
  courses.forEach(course => {
    var $course = $('<div />', {'class':'course'}).appendTo(badges);
    $('<h3 />', {text: course.title}).appendTo($course);
    $('<img />', {src: course.badge}).appendTo($course);
    $('<a />', {'class':'btn btn-primary', href: course.url, target:'_blank', text: 'See Course'}).appendTo($course);
  })
  
}