// index2.html

jQuery(function()
{
    jQuery('#outarea_aa').text("*** button_click_monitor.js *** start ***")

    button_click_monitor ()

    jQuery('#outarea_hh').text("*** button_click_monitor.js *** end ***")
})

// -------------------------------------------------------------------
// [8]:
function button_click_monitor ()
{
    jQuery ("button").click (function ()
        {
        window.location.href = "index3.html" + "?id=" + this.id
        })
    }
