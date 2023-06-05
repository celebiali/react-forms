import {useField} from "formik";
import {FiCheck} from "react-icons/fi";
function Checbox({label,...props}) {

    const [field,meta,helpers] = useField(props)

    return (
        <label>
            <div>{label}</div>
            <input {...field} {...props}/>
        </label>
    );
}

export default Checbox;