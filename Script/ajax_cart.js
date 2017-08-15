/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (e) {

        $(document).on('confirmation', '.remodal', function () {
            $('#size-n-color-form').submit();
        });

        $(document).on('click', '.addtocart', function () {
            var $item_id = $(this).data('item-id');
            var $redirect_url = $(this).data('redirect-url');
            $('#size-n-color').html('<h1><i class="fa fa-spinner fa-spin"></i> Loading inventory...</h1>');

            jQuery.ajax({
                type: "POST",
                dataType: "json",
                url: ST_Ajax_Vars.ajaxurl,
                data: {item_id: $item_id, redirect_url: $redirect_url, action: "st_checkout"},
                success: function (data) {
                    if (data.status == "error") {
                        $('#size-n-color').html(data.html);
                    }

                    if (data.status == "success") {
                        $('#size-n-color').html(data.html);
                    }
                }
            });
            return false;
        });
    });