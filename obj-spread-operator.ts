//object type operator
interface Course {
    readonly title:string,
    subtitle:string,
    stats:{
        chapter:number,
    }
};

let newkorso: Course = {
    title: "learning typescript journey",
    subtitle: "learning typescript one of the most popular programming language",
    stats: {
        chapter:10
    }
}

//Deep copy
const  Wcourse: Course = {
    title: newkorso.title,
    subtitle: newkorso.subtitle,
    stats: {
        chapter:newkorso.stats.chapter
    }

};

console.log(Wcourse);