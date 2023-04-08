import { CoursePart } from "../types";
interface PartProps {
    part : CoursePart
}
const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
const Part =({part} : PartProps) => {
    switch (part.kind) {
        case "basic":
            return (
                <>
                <h4>
                  Name :  {part.name} Exercise No. : {part.exerciseCount}
                </h4>
                <p>{part.description}</p>
                <hr />
                </>
            )
        case "group":
            return <>
                    <h4>
                        Name :  {part.name} Exercise No. : {part.exerciseCount}
                    </h4>
                    <p> project   {part.groupProjectCount}</p>
                    <hr />
                </>
        case "background":
            return   <>
                <h4>
                    Name :  {part.name} Exercise No. : {part.exerciseCount}
                </h4>
                <p>{part.description}</p>
                <p>submit to {part.backgroundMaterial}</p>
                <hr />
            </>
        case "special":
            return (
                <>
                <h4>
                  Name :  {part.name} Exercise No. : {part.exerciseCount}
                </h4>
                <p>{part.description}</p>
                <p>required skill {part.requirements.join(' , ')}</p>
                <hr />
                </>
            )
        default:
            return assertNever(part)
    }
}
export default Part;