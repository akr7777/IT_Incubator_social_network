
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}
const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed) {
        return <div> <AccordionTitle title={props.titleValue}/> </div>
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        );
    }
}

type AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}

const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}


export default Accordion;
