function TitleBgBlack(props) {
    const {span, title} = props;
    return (
        <>
            <div className="titulo">
                <p className="font-h3 cor-1">{span}</p>
                <h1 className="font-h1 cor-0">{title}<span className="cor-l1">.</span></h1>
            </div>
        </>
    )
}

export default TitleBgBlack;