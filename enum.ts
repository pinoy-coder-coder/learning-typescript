//type enum can be use at numerical and string
enum korsoEnroll {
    free = "FREE",
    premium = "PREMIUM",
    VIP = "VIP",
    studentocoach = "HIDDEN"
}

const korso = {
    titolo:"learning typescript",
    type: korsoEnroll.studentocoach
};
console.log(korso);