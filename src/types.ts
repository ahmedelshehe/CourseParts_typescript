interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
interface CoursePartWithDescription {
    description :string;
}
interface CoursePartBasic extends CoursePartBase,CoursePartWithDescription {
    kind: "basic"
  }
  
interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
interface CoursePartBackground extends CoursePartBase,CoursePartWithDescription {
    backgroundMaterial: string;
    kind: "background"
}
interface CoursePartSpecial extends CoursePartBase,CoursePartWithDescription {
    requirements: string[],
    kind: "special"
}
export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;