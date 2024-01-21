interface HasID {
    id: string,
}

interface HasTitleID{
    title: string,
    description: string,
}
type Course = HasID & HasTitleID;

const course: Course = {

}