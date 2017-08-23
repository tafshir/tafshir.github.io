jQuery(document).ready(function($){

        $(".portfolio-filter li").on('click', function() {

            var filterData = $(this).attr("data-filter");

            $(".portfolio-list").isotope({
                filter: filterData,
               });
            $(".portfolio-filter li").removeClass('active');
            $(this).addClass('active');

        });
        $(".portfolio-list").isotope({
             itemSelector: '.single-portfolio-item',
                percentPosition: true,
                masonry: {
                columwidth: '.single-portfolio-item',
                horizontalOrder:true,
            }
        });
        


    });