

export default function Label({labelNumber, labelHeader}){

    return(
        <div className="page-label">
            <h2>{labelNumber}</h2>
            <h1>{labelHeader}</h1>
        </div>
    )
}