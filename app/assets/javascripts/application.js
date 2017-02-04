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
  var colors = ["#BA55D3","#9370DB","#8A2BE2","#9400D3","#9932CC","	#8B008B","#800080"];
  var colors2 = ["#BA55D3","#9370DB","#8A2BE2","#9400D3","#9932CC","#8B008B","#800080"];
  var colors3 = ["#BA55D3","#9370DB","#8A2BE2","#9400D3","#9932CC","#8B008B","#800080"];
  var colors4 = ["#BA55D3","#9370DB","#8A2BE2","#9400D3","#9932CC","#8B008B","#800080"];

  $('.arrow-left').hover(
    function() {
      var rand = Math.floor(Math.random()*colors.length);
      var rand2 = Math.floor(Math.random()*colors2.length);
      var rand3 = Math.floor(Math.random()*colors2.length);
      var rand4 = Math.floor(Math.random()*colors2.length);
      $(this).css('width', '0px');
      $(this).css('height', '0px');
      $(this).css('border-style', 'solid');
      $(this).css('border-width', '5px');
      $(this).css('border-top-color', colors[rand]);
      $(this).css('border-right-color', colors2[rand2]);
      $(this).css('border-bottom-color', colors3[rand3]);
      $(this).css('border-left-color', colors4[rand4]);
    },
    function () {
    	$(this).removeAttr('style');
    }
  );
});

$(function() {
  var colors = ["#FC3E6B","#24FF00","#0087F9","#F9F900"];

  $('.arrow-left').focus(
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

