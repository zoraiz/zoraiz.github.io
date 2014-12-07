(function() {
var e, t;
e = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i), t = $(window).width() <= 727 || $(window).height() < 400, 
window.runAfterDomBinding.add("persona", function() {
return Bobcat.TH.applyTouchNav(), 0 !== $(".side-header").length && $(".side-header").is(":visible") ? void 0 :$(".offset-three").removeClass("offset-three").addClass("offset-two");
});
}).call(this);