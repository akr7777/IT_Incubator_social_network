
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {
    if (props.value === 1) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>

        );
    }
    if (props.value === 2) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        );
    }
    if (props.value === 3) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        );
    }
    if (props.value === 4) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </>
        );
    }
    if (props.value === 5) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </>
        );
    }
    return (
        <>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>
    );
}

type StarPorpsType = {
    selected: boolean
}
const Star = (props: StarPorpsType) => {
    if (props.selected === true) {
        return <span><b>star-</b></span>;
    } else {
        return <span>star-</span>
    }
}