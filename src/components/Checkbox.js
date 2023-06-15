import {ErrorMessage, useField} from "formik";
import {FiCheck} from "react-icons/fi";
import classNames from "classnames";
function Checbox({label,...props}) {

    const [field,meta,helpers] = useField(props)

    return (
        <>
            <label className="flex gap-x-2 text-sm cursor-pointer items-center">
                <button type="button" onClick={() => {helpers.setValue(!field.value)}} className={classNames({
                    "w-5 h-5 rounded border border-gray-300 text-transparent flex items-center justify-center" :true,
                    "border-gray-300 text-transparent": !field.value,
                    "border-red-600": meta.error && meta.touched,
                    "border-gray-300 bg-blue-600 text-white": field.value && !meta.error,

                })}>
                    <FiCheck size={16}/>
                </button>
                <div>{label}</div>
            </label>
            <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600"/>
        </>

    );
}

export default Checbox;