import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const FormInput = ({ formik, value, placeholder, type, unit }) => {
    return (

        <div className="relative w-full flex flex-col">
            {formik.touched[value] && !formik.errors[value]
                ? <><Label className='absolute z-20 text-xs text-gray-400 bg-inherit -top-1 right-2'>
                    {placeholder}
                </Label>
                    <hr className="absolute z-10 border border-t-0 border-white right-1 w-16 top-0" />
                </>
                : null}
            <Input
                id={value}
                type={type}
                placeholder={placeholder}
                value={formik.values[value]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`text-end text-sm mb-1 placeholder:text-gray-600 ${formik.touched[value] && formik.errors[value] ? 'ring-1 ring-red-500 placeholder:text-red-500' : ''}`} />
            {formik.touched[value] && formik.errors[value] ? <p className="text-red-500 text-xs">{formik.errors[value]}</p>
                : null}
            {unit === null ? null : <p className="absolute left-2 top-3 text-gray-600 text-xs">{unit}</p>}
        </div>
    )
}

export default FormInput