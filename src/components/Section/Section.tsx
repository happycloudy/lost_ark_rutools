import {ReactNode} from "react";

type IProps = {
    children: ReactNode
    id: string
}

const Section = ({children, id}: IProps) => {
    return (
        <section id={id}>
            {children}
        </section>
    );
};

export default Section;