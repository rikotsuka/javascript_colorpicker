// index3.html
function getParam()
{
    var url   = location.href
    parameters    = url.split("?")
    params   = parameters[1].split("&")
    var paramsArray = []
    for ( it = 0; it < params.length; it++ ) {
        neet = params[it].split("=")
        paramsArray.push(neet[0])
        paramsArray[neet[0]] = neet[1]
        }
    var categoryKey = paramsArray["id"]
    return categoryKey
}

// -------------------------------------------------------------------
jQuery(function()
{
    jQuery('#outarea_aa').text("*** bb01.js *** start ***")

    const idx = getParam()

    var str_tmp = ""
    str_tmp += "Getパラメータ「id」の値は、"+  idx  +" です。<br />"
    jQuery('#outarea_bb').html(str_tmp)

    const value = idx

    jQuery("#category").val(value)

    jQuery('#outarea_hh').text("*** bb01.js *** end ***")
})
