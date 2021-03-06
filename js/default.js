var AjaxForm = {
    initialize: function (e) {
        jQuery().ajaxForm || document.write('<script src="' + e.assetsUrl + 'js/lib/jquery.form.min.js"><\/script>'), jQuery().jGrowl || document.write('<script src="' + e.assetsUrl + 'js/lib/jquery.jgrowl.min.js"><\/script>'), $(document).ready((function () {
            $.jGrowl.defaults.closerTemplate = "<div>[ " + e.closeMessage + " ]</div>"
        })), $(document).off("submit", e.formSelector).on("submit", e.formSelector, (function (r) {
            return $(this).ajaxSubmit({
                dataType: "json", data: {pageId: e.pageId}, url: e.actionUrl, beforeSerialize: function (e) {
                    e.find(":submit").each((function () {
                        e.find('input[type="hidden"][name="' + $(this).attr("name") + '"]').length || $(e).append($('<input type="hidden">').attr({
                            name: $(this).attr("name"),
                            value: $(this).attr("value")
                        }))
                    }))
                }, beforeSubmit: function (e, r) {
                    return ("undefined" == typeof afValidated || 0 != afValidated) && (r.find(".error").html(""), r.find(".error").removeClass("error"), r.find("input,textarea,select,button").attr("disabled", !0), !0)
                }, success: function (e, r, t, s) {
                    var a, o, n;
                    if (s.find("input,textarea,select,button").attr("disabled", !1), e.form = s, $(document).trigger("af_complete", e), e.success) AjaxForm.Message.success(e.message), s.find(".error").removeClass("error"), s[0].reset(), "undefined" != typeof grecaptcha && grecaptcha.reset(); else if (AjaxForm.Message.error(e.message), e.data) for (a in e.data) e.data.hasOwnProperty(a) && (n || (s.find('[name="' + a + '"]').focus(), n = !0), o = e.data[a], s.find(".error_" + a).html(o).addClass("error"), s.find('[name="' + a + '"]').addClass("error"))
                }
            }), r.preventDefault(), !1
        })), $(document).on("keypress change", ".error", (function () {
            var e = $(this).attr("name");
            $(this).removeClass("error"), $(".error_" + e).html("").removeClass("error")
        })), $(document).on("reset", e.formSelector, (function () {
            $(this).find(".error").html(""), AjaxForm.Message.close()
        }))
    }
};
AjaxForm.Message = {
    success: function (e, r) {
        e && (r || (r = !1), $.jGrowl(e, {theme: "af-message-success", sticky: r}))
    }, error: function (e, r) {
        e && (r || (r = !1), $.jGrowl(e, {theme: "af-message-error", sticky: r}))
    }, info: function (e, r) {
        e && (r || (r = !1), $.jGrowl(e, {theme: "af-message-info", sticky: r}))
    }, close: function () {
        $.jGrowl("close")
    }
};