export default function Currency(props) {
    return <div className="border shadow w-36 m-4 p-2">
        <p className="font-bold">{props.description} ({props.code}) </p>
        <p>{props.rate_float}
            <span dangerouslySetInnerHTML={{ __html: props.symbol }}></span>
        </p>
    </div>
}
