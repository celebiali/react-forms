import {useField} from "formik";

function Input({label,...props}) {

    const [field,meta,helpers] = useField(props)

    return (
        <label className="block w-full">
            <div className="text-sm text-gray-600">{label}</div>
            <input className="w-full h-10 rounded border-b outline-none focus:border-black" {...field} {...props}/>
        </label>
    );
}

export default Input;