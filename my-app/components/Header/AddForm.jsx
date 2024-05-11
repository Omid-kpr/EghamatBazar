'use client'

import { useFormik } from "formik"
import * as Yup from 'yup'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import FormInput from "./FormInput"
import FormSwitch from "./FormSwitch"
import FormSelect from "./FormSelect"
import { useState, useId } from 'react'
import axios from 'axios';


const AddForm = () => {
    function getRandomID(max) {
        return Math.floor(Math.random() * max);
    }

    const [isLoading, setIsLoading] = useState(false);

    const closeMobileButton = document.getElementById('MobileClose')

    const formik = useFormik({
        initialValues: {
            name: null,
            type: null,
            zone: null,
            area: null,
            standardCapacity: null,
            maxCapacity: null,
            beds: null,
            blankets: null,
            state: null,
            city: null,
            address: null,
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
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                const response = await axios.post('/api/updateData', {
                    name: values.name,
                    active: true,
                    id: getRandomID(1000000),
                    imageUrl: "http://picsum.photos/300?random=17"
                });
                console.log(response.data); // Handle the response as needed
            } catch (error) {
                console.error('Error updating isActive:', error);
            } finally {
                setIsLoading(false);
            }
        },
    })

    // console.log(formik.errors)

    const typeOptions = ["شهری", "روستایی", "جنگلی", "کوهستانی", "ساحلی"]
    const zoneOptions = ["منطقه ۱", "منطقه ۲", "منطقه ۳", "منطقه ۴", "منطقه ۵", "منطقه ۶",]
    const CapacityOptions = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="relative flex flex-col items-end text-end gap-4 py-4">


                <Label className="text-right text-base">
                    اطلاعات اقامتگاه
                </Label>

                <FormInput formik={formik}
                    type={"text"} value={'name'} placeholder={"نام اقامتگاه"} unit={null} />

                <FormSelect formik={formik}
                    value={"type"} lable={"نوع اقامتگاه"} options={typeOptions} />

                <FormSelect formik={formik}
                    value={"zone"} lable={"منطقه اقامتگاه"} options={zoneOptions} />

                <FormInput formik={formik}
                    type={"number"} value={'area'} placeholder={"مساحت کل زمین"} unit={"متر مربع"} />

                <hr className="border w-full bg-gray-200" />

                <Label className="text-right text-base font-black">
                    ظرفیت اقامتگاه
                </Label>

                <FormSelect formik={formik}
                    value={"standardCapacity"} lable={"ظرفیت استاندارد"} options={CapacityOptions} />

                <FormSelect formik={formik}
                    value={"maxCapacity"} lable={"حداکثر ظرفیت"} options={CapacityOptions} />

                <FormSelect formik={formik}
                    value={"beds"} lable={"تعداد تخت خواب"} options={CapacityOptions} />

                <FormSelect formik={formik}
                    value={"blankets"} lable={"تعداد رخت خواب"} options={CapacityOptions} />

                <hr className="border w-full bg-gray-200" />

                <Label className="text-right text-base font-black">
                    آدرس اقامتگاه
                </Label>

                <FormInput formik={formik}
                    type={"text"} value={'state'} placeholder={"استان"} unit={null} />

                <FormInput formik={formik}
                    type={"text"} value={'city'} placeholder={"شهر"} unit={null} />

                <textarea
                    type="textarea"
                    id="address"
                    placeholder="آدرس اقامتگاه"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    className={`border border-gray-200 w-full h-32 p-2 text-end text-sm placeholder:text-gray-600 ${formik.touched.address && formik.errors.address ? 'ring-1 ring-red-500' : ''}`} />
                {formik.touched.address && formik.errors.address ? <p className="text-red-500 text-xs">{formik.errors.address}</p>
                    : null}

                <Label className="text-right text-base font-black">
                    نرخ گذاری و قیمت
                </Label>

                <FormInput formik={formik}
                    type={"number"} value={'standardPrice'} placeholder={"قیمت روزهای عادی"} unit={'تومان'} />

                <FormInput formik={formik}
                    type={"number"} value={'weekendPrice'} placeholder={"قیمت آخر هفته"} unit={"تومان"} />

                <FormInput formik={formik}
                    type={"number"} value={'hotPrice'} placeholder={"قیمت ایام پیک"} unit={"تومان"} />

                <FormInput formik={formik}
                    type={"number"} value={'extraPersonPrice'} placeholder={"نرخ هر نفر اضافه"} unit={"تومان"} />


                <Label className="text-right text-base font-black">
                    قوانین و مقررات
                </Label>

                <div className="flex flex-col w-full gap-4">
                    <FormSwitch formik={formik} value={'smoking'} text={"استعمال دخانیات مجاز می باشد"} />
                    <FormSwitch formik={formik} value={'pets'} text={"ورود حیوان خانگی مجاز می باشد"} />
                    <FormSwitch formik={formik} value={'party'} text={"برگزاری مراسم مجاز می باشد"} />
                    <FormSwitch formik={formik} value={'exhbit'} text={"همراه داشتن مدارک محرمیت الزامیست"} />
                </div>


                <Button disabled={isLoading} className='w-full' type="submit" onClick={() => {
                    if (Object.keys(formik.errors).length === 0) {
                        closeMobileButton.click();
                    }
                }}>ثبت اقامتگاه</Button>

            </div>
        </form>
    )
}

export default AddForm




