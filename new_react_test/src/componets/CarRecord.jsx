function CarRecord(props){

    return(
        <div>
        <h1>{props.make}</h1>
        <h2>{props.model}</h2>
        <h2>{props.miles}</h2>
        <h2>{props.color}</h2>

        </div>
    );
}
export default CarRecord;