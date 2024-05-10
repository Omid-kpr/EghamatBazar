'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "../ui/switch"
import { FaPlus } from 'react-icons/fa'
import { Formik, useFormik } from "formik"
import * as Yup from 'yup'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

export default function AddSheet() {
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            zone: '',
            area: '',
            standardCapacity: null,
            maxCapacity: null,
            beds: null,
            blankets: null,
            state: '',
            city: '',
            address: '',
            images: [''],
            standardPrice: null,
            weekendPrice: null,
            hotPrice: null,
            extraPersonPrice: null,
            smoking: false,
            pets: false,
            party: false,
            exhbit: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().max(20, 'نام باید کمتر از ۲۰ حرف باشد').required('نام اقامتگاه را وارد کنید'),
            type: Yup.string().required('نوع اقامتگاه را انتخاب کنید'),
            zone: Yup.string().required('منطقه اقامتگاه را انتخاب کنید'),
            area: Yup.number().required('مساحت اقامتگاه را وارد کنید'),
            standardCapacity: Yup.number().required('ظرفیت اقامتگاه را وارد کنید'),
            maxCapacity: Yup.number().required('حداکثر ظرفیت اقامتگاه را وارد کنید'),
            beds: Yup.number().required('تعداد سرویس ها را وارد کنید'),
            blankets: Yup.number().required('تعداد سرویس ها را وارد کنید'),
            state: Yup.string().required('استان را انتخاب کنید'),
            city: Yup.string().required('شهر را انتخاب کنید'),
            address: Yup.string().required('آدرس اقامتگاه را وارد کنید'),
            standardPrice: Yup.number().required('قیمت روز های عادی را وارد کنید'),
            weekendPrice: Yup.number().required('قیمت اخر هفته را وارد کنید'),
            hotPrice: Yup.number().required('قیمت ایام پیک را وارد کنید'),
            extraPersonPrice: Yup.number().required('نرخ هر نفر اضافه را وارد کنید'),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="text-blue-600 text-xs hover:bg-blue-100 hover:text-blue-600">
                    افزودن اقامتگاه
                    <FaPlus style={{ fontSize: "1em" }} className='ml-1' />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-screen overflow-auto'>
                <SheetHeader>
                    <SheetTitle>افزودن اقامتگاه</SheetTitle>
                </SheetHeader>
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col items-end text-end gap-4 py-4">


                        <Label className="text-right text-base">
                            اطلاعات اقامتگاه
                        </Label>

                        <Input
                            id="name"
                            placeholder="نام اقامتگاه"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.name && formik.errors.name ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.name && formik.errors.name ? <p className="text-red-500 text-xs">{formik.errors.name}</p>
                            : null}
                        <select
                            className="border-2 border-gray-200 p-2 rounded-md w-full text-end text-sm placeholder:text-gray-600"
                            name="country"
                            onChange={formik.handleChange}
                            value={formik.values.type}
                        >
                            <option value="" disabled selected hidden>نوع اقامتگاه</option>
                            <option>شهری</option>
                            <option>روستایی</option>
                            <option>جنگلی</option>
                            <option>کوهستانی</option>
                            <option>ساحلی</option>
                        </select>
                        {formik.touched.type && formik.errors.type ? <p className="text-red-500 text-xs">{formik.errors.type}</p>
                            : null}


                        <select
                            className="border-2 border-gray-200 p-2 rounded-md w-full text-end text-sm placeholder:text-gray-600"
                            name="zone"
                            onChange={formik.handleChange}
                            value={formik.values.zone}
                        >
                            <option value="" disabled selected hidden>منطقه اقامتگاه</option>
                            <option>منطقه ۱</option>
                            <option>منطقه ۲</option>
                            <option>منطقه ۳</option>
                        </select>

                        <Input
                            id="area"
                            placeholder="مساحت اقامتگاه"
                            value={formik.values.area}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.area && formik.errors.area ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.area && formik.errors.area ? <p className="text-red-500 text-xs">{formik.errors.area}</p>
                            : null}

                        <hr className="border w-full bg-gray-200" />

                        <Label className="text-right text-base">
                            ظرفیت اقامتگاه
                        </Label>


                        <Input
                            id="standardCapacity"
                            placeholder="ظرفیت اقامتگاه"
                            value={formik.values.standardCapacity}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.standardCapacity && formik.errors.standardCapacity ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.standardCapacity && formik.errors.standardCapacity ? <p className="text-red-500 text-xs">{formik.errors.standardCapacity}</p>
                            : null}
                        <Input
                            id="maxCapacity"
                            placeholder="حداکثر ظرفیت اقامتگاه"
                            value={formik.values.maxCapacity}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.maxCapacity && formik.errors.maxCapacity ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.maxCapacity && formik.errors.maxCapacity ? <p className="text-red-500 text-xs">{formik.errors.maxCapacity}</p>
                            : null}
                        <Input
                            id="beds"
                            placeholder="تعداد تخت"
                            value={formik.values.beds}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.beds && formik.errors.beds ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.beds && formik.errors.beds ? <p className="text-red-500 text-xs">{formik.errors.beds}</p>
                            : null}
                        <Input
                            id="blankets"
                            placeholder="تعداد رخت خواب"
                            value={formik.values.blankets}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.blankets && formik.errors.blankets ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.blankets && formik.errors.blankets ? <p className="text-red-500 text-xs">{formik.errors.blankets}</p>
                            : null}

                        <hr className="border w-full bg-gray-200" />

                        <Label className="text-right text-base">
                            آدرس اقامتگاه
                        </Label>


                        <Input
                            id="state"
                            placeholder="استان"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.state && formik.errors.state ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.state && formik.errors.state ? <p className="text-red-500 text-xs">{formik.errors.state}</p>
                            : null}
                        <Input
                            id="city"
                            placeholder="شهر"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.city && formik.errors.city ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.city && formik.errors.city ? <p className="text-red-500 text-xs">{formik.errors.city}</p>
                            : null}
                        <Input
                            id="address"
                            placeholder="آدرس اقامتگاه"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.address && formik.errors.address ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.address && formik.errors.address ? <p className="text-red-500 text-xs">{formik.errors.address}</p>
                            : null}
                        <Input
                            id="standardPrice"
                            placeholder="قیمت روز های عادی"
                            value={formik.values.standardPrice}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.standardPrice && formik.errors.standardPrice ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.standardPrice && formik.errors.standardPrice ? <p className="text-red-500 text-xs">{formik.errors.standardPrice}</p>
                            : null}
                        <Input
                            id="weekendPrice"
                            placeholder="قیمت اخر هفته"
                            value={formik.values.weekendPrice}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.weekendPrice && formik.errors.weekendPrice ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.weekendPrice && formik.errors.weekendPrice ? <p className="text-red-500 text-xs">{formik.errors.weekendPrice}</p>
                            : null}
                        <Input
                            id="hotPrice"
                            placeholder="قیمت ایام پیک"
                            value={formik.values.hotPrice}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.hotPrice && formik.errors.hotPrice ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.hotPrice && formik.errors.hotPrice ? <p className="text-red-500 text-xs">{formik.errors.hotPrice}</p>
                            : null}
                        <Input
                            id="extraPersonPrice"
                            placeholder="نرخ هر نفر اضافه"
                            value={formik.values.extraPersonPrice}
                            onChange={formik.handleChange}
                            className={`text-end text-sm placeholder:text-gray-600 ${formik.touched.extraPersonPrice && formik.errors.extraPersonPrice ? 'ring-1 ring-red-500' : ''}`} />
                        {formik.touched.extraPersonPrice && formik.errors.extraPersonPrice ? <p className="text-red-500 text-xs">{formik.errors.extraPersonPrice}</p>
                            : null}






                        <Button className='w-full' type="submit">ثبت اقامتگاه</Button>




                    </div>
                </form>
            </SheetContent>
        </Sheet>
    )
}
