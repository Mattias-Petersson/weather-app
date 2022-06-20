export default function Selection(props) {
    return (
        <div className="mb-4">
            <h3 className="fs-5">{props.cName}</h3>
            <select
                required
                onChange={props.onChange}
                name={props.cName}
                className="w-25"
                value={props.selected || ""}
            >
                <option value="" disabled></option>
                {props.elements.map((name) => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
        </div>
    );

}