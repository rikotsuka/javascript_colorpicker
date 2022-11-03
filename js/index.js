// index2.html
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add").addEventListener("click", function (e) {
        // 追加する処理をして、追加後に下記で画面遷移
        const url = location.href
        parameters = url.split("?")
        params = parameters[1].split("&")
        const paramsArray = []
        for (it = 0; it < params.length; it++) {
            neet = params[it].split("=")
            paramsArray.push(neet[0])
            paramsArray[neet[0]] = neet[1]
        }
        const categoryKey = paramsArray["id"]
        return categoryKey
    }

// jQuery(function()
// {
//     jQuery('#outarea_aa').text("*** button_click_monitor.js *** start ***")

//     button_click_monitor ()

//     jQuery('#outarea_hh').text("*** button_click_monitor.js *** end ***")
// })

// // -------------------------------------------------------------------
// // [8]:
// function button_click_monitor ()
// {
//     jQuery ("button").click (function ()
//         {
//         window.location.href = "index3.html" + "?id=" + this.id
//         })
