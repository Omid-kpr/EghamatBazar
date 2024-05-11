import { Label } from "@/components/ui/label"
const FormSelect = ({ formik, value, lable, options }) => {
    return (
        <div className="relative w-full flex flex-col">
            {formik.values[value] !== null
                ? <><Label className='absolute z-20 text-xs text-gray-400 bg-inherit -top-1 right-2'>
                    {lable}
                </Label>
                    <hr className="absolute z-10 border border-t-1 border-white right-1 w-16 top-0" />
                </>
                : null}
            <select
                className="border border-gray-200 p-2 rounded-md w-full text-end text-sm placeholder:text-gray-600"
                name={value}
                onChange={formik.handleChange}
                value={formik.values[value]}
            >
                <option value='' disabled selected hidden>{lable}</option>
                {options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
            {formik.touched[value] && formik.errors[value] ? <p className="text-red-500 text-xs">{formik.errors[value]}</p>
                : null}
        </div>
    )
}

export default FormSelect




