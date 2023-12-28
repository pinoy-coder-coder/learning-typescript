//typescript interface
interface Course {
    readonly title:string,
    subtitle:string,
    // chapter:number,
}

//typescript interface is open to extend which the deffirent of alias
interface Course {
    chapter:number,
}

let korso: Course = {
    title: "learning typescript journey",
    subtitle: "learning typescript one of the most popular programming language",
    chapter: 2,
}

let korsoDose: Course = {
    title: "learning typescript journey v2",
    subtitle: "learning typescript one of the most popular programming language",
    chapter: 3,
}

console.log(korso, korsoDose);