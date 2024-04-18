$(document).ready(function() {
  
    function sumSection() {
      return $(".container").height();
    }
  
    function setDimensionBar() {
      $(".bar").css({
        "height": ($(window).height() / sumSection()) * 100 + "%"
      });
    }
  
    function setSection() {
      $("section").each(function(i, element) {
        $(element).css({
          "min-height": $(window).height()
        });
      });
    }
  
    function addBehaviours() {
      let sections = $("section");
      $(".node").each(function(i, element) {
        $(element).on("click", function(e) {
          e.preventDefault();
          let scroll = $(sections[i]).offset().top;
          $('html, body').animate({
            scrollTop: scroll
          }, 500);
        });
      });
    }
  
    function arrangeNodes() {
      $(".node").remove();
      $("section").each(function(i, element) {
        let name = $(element).data("name");
        let node = $("<li class='node'><span>" + name + "</span></li>");
        $(".timeline").append(node);
  
        $(node).css({
          "top": ($(".timeline").height() / $(document).height()) * $(element).offset().top
        });
      });
      addBehaviours();
    }
  
    $(window).on("scroll", function() {
      let top = (window.scrollY / sumSection()) * 100;
      $(".bar").css({
        "top": top + "%"
      });
    });
  
    $(window).on("resize", function() {
      setSection();
      arrangeNodes();
      setDimensionBar();
    });
  
    setTimeout(function() {
      setSection();
      arrangeNodes();
      setDimensionBar();
    }, 200);
  
  });
  