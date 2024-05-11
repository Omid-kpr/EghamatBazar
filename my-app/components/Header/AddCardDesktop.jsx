import { Button } from "@/components/ui/button"
import { FaPlus } from 'react-icons/fa'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddForm from "./AddForm"

const AddCardDesktop = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="text-blue-600 text-xs hover:bg-blue-100 hover:text-blue-600">
                    افزودن اقامتگاه
                    <FaPlus style={{ fontSize: "1em" }} className='ml-1' />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] sm:max-h-[600px] overflow-auto">
                <DialogHeader>
                    <DialogTitle className="mx-auto">افزودن اقامتگاه</DialogTitle>
                </DialogHeader>
                <AddForm />
                <DialogFooter>
                    <Button id='DesktopClose' className='hidden' type="submit">Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddCardDesktop



