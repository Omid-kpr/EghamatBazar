import { Label } from "@/components/ui/label"
import { Switch } from "../ui/switch"
const FormSwitch = ({ formik, value, text }) => {
    return (
        <div className="flex justify-between w-full">
            <Switch
                name={value}
                type="checkbox"
                checked={formik.values[value]}
                onCheckedChange={(e) => formik.values[value] = e}
            />
            <Label className="text-right text-sm">{text}</Label>
        </div>
    )
}

export default FormSwitch