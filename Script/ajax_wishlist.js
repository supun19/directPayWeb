/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function (e) {
    jQuery(document).on('click', '.wishlist', function (e) {
        e.preventDefault();
        var $clicked_elem = $(this);
        $clicked_elem.children('.st-icon').html('<i class="fa fa-spinner fa-spin"></i>');
        jQuery.ajax({
            type: "POST",
            dataType: "json",
            url: ST_Ajax_Vars.ajaxurl,
            data: {item_id: $clicked_elem.data('item-id'), action: "st_process_whishlist"},
            success: function (data) {
                if (data.status == "error") {
                    $clicked_elem.attr('title', data.message);
                    $clicked_elem.children('.st-icon').html('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>');
                }
                if (data.status == "success") {
                    $clicked_elem.attr('title', data.message);
                    $clicked_elem.children('.st-icon').html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
                    if (data.action == "add") {
                        $clicked_elem.addClass('active');
                    } else {
                        $clicked_elem.removeClass('active');
                    }
                }
            }
        });
        return false;
    });
});