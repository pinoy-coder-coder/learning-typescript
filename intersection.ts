interface HasID {
    id: string,
}

interface HasTitle{
    title: string,
    description: string,
}
type Course = HasID & HasTitle;

const course: Course = {

}