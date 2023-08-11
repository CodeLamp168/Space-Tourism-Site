

export default function Label({labelNumber, labelHeader, labelWebClass = ''}){

    return(
        <div className={`page-label ${labelWebClass}`}>
            <h2>{labelNumber}</h2>
            <h1>{labelHeader}</h1>
        </div>
    )
}