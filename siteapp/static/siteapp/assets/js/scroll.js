$(document).ready(function() {
                      $("a.scrollto").click(function() {
                        var elementClick = $(this).attr("href")
                        var destination = $(elementClick).offset().top - 0;
                        jQuery("html:not(:animated),body:not(:animated)").animate({
                          scrollTop: destination
                        }, 800);
                        return false;
                      });
                    });