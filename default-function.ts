//typescript default function and initial value
function printkorso(title="TS", subtitle="JS", lessonsCount=0) {
    console.log(`Title:${title} subtitle:${subtitle} lesson${lessonsCount}`);
}

//choice for passing data
printkorso(
    "learning typescript",
    "learning typescipt journey",
    10,
);

printkorso(
    "learning typescript",
    "learning typescipt journey",
);

printkorso();