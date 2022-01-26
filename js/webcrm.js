$(document).on("af_complete", (function (a, e) {
    a.preventDefault(), alert(e.message), !0 === e.data.status && (metrika_id = e.data.yandex_metrika_id, goal_name = e.data.success_goal, "undefined" != typeof ym ? ym(metrika_id, "reachGoal", goal_name) : window["yaCounter" + metrika_id].reachGoal(goal_name))
})), $(document).ready((function () {
    AjaxForm.Message.success = function () {
    }, AjaxForm.Message.error = function () {
    }
}));