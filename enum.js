//type enum can be use at numerical and string
var korsoEnroll;
(function (korsoEnroll) {
    korsoEnroll["free"] = "FREE";
    korsoEnroll["premium"] = "PREMIUM";
    korsoEnroll["VIP"] = "VIP";
    korsoEnroll["studentocoach"] = "HIDDEN";
})(korsoEnroll || (korsoEnroll = {}));
var korso = {
    titolo: "learning typescript",
    type: korsoEnroll.studentocoach
};
console.log(korso);
