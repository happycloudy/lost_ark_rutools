type IProps = {
    text: string
}

const Guide = ({text}: IProps) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default Guide;