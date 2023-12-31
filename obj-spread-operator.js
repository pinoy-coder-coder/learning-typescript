;
var newkorso = {
    title: "learning typescript journey",
    subtitle: "learning typescript one of the most popular programming language",
    stats: {
        chapter: 10
    }
};
//Deep copy
var Wcourse = {
    title: newkorso.title,
    subtitle: newkorso.subtitle,
    stats: {
        chapter: newkorso.stats.chapter
    }
};
console.log(Wcourse);
