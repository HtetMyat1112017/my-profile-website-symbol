// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })
$('.home--js').waypoint(function(direction){
    
    if(direction == "down"){
        
        $('.navbar').addClass('sticky');
        
    }
    else{
        $('.navbar').removeClass('sticky')
    }
   
},{
    offset: '25px'
});

// $('.navbar-nav li a').click(function(event){
   
//     let current_link=$(this);
//     let currnet_link_href=current_link.attr('href');
//     $('.navbar-nav a').removeClass('active');
//     current_link.addClass('active')

    
// });
$('.home').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#home']").addClass('active');
  
    
},{
    offset:'20px'
});
$('.about').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#about']").addClass('active');
   
   
},{
    offset:'100px'
});
$('.service').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#service']").addClass('active');
     
   
},{
    offset:'100px'
});
$('.experience').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#experience']").addClass('active');
 
},{
    offset:'100px'
});
$('.work').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#work']").addClass('active');
   
},{
    offset:'100px'
})
$('.blog').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#blog']").addClass('active');
   
},{
    offset:'100px'
})
$('.contact').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#contact']").addClass('active');
  
},{
    offset:'100px'
})
$('.home').waypoint(function(direction){
    $('.nav-link').removeClass('active');
    $(".nav-link[href='#home']").addClass('active');
  
    
},{
    offset:'20px'
});