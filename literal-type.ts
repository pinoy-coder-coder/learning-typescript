//typescript literal with unions
let courseStatus: "draft" | "unpublished" | "published" = "draft";
// console.log(course);

//typescript alias
type Course = {
    title: string,
    subtitle: string,
    chapter: number,
}

let korso: Course = {
    title: "learning typescript journey",
    subtitle: "learning typescript one of the most popular programming language",
    chapter: 2,
}

console.log(korso, courseStatus)