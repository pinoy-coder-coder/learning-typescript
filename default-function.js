//typescript default function and initial value
function printkorso(title, subtitle, lessonsCount) {
    if (title === void 0) { title = "TS"; }
    if (subtitle === void 0) { subtitle = "JS"; }
    if (lessonsCount === void 0) { lessonsCount = 0; }
    console.log("Title:".concat(title, " subtitle:").concat(subtitle, " lesson").concat(lessonsCount));
}
//choice for passing data
printkorso("learning typescript", "learning typescipt journey", 10);
printkorso("learning typescript", "learning typescipt journey");
printkorso();
