import { CoursePart } from "../types";
import Part from "./Part";
export interface ContentProps {
    courseParts : Array<CoursePart>;
} const Content = (props : ContentProps) =>{
    return (
        <>
            {props.courseParts.map((coursePart,index)=>{
                return <Part key={index} part={coursePart} />
            })}
        </>
    );
}
export default Content;