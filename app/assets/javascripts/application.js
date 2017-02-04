// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $(".stuff").hover(function(){
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
      $(this).css("background-color", color);
  });
});

$(function() {
  var colors = ["#FC3E6B","#24FF00","#0087F9","#F9F900"];

  $('.arrow-left').hover(
    function() {
      var rand = Math.floor(Math.random()*colors.length);
      $(this).css('width', '0px');
      $(this).css('height', '0px');
      $(this).css('border-style', 'solid');
      $(this).css('border-width', '5px');
      $(this).css('border-top-color', colors[rand]);
    },
    function () {
    	$(this).removeAttr('style');
    }
  );
});
