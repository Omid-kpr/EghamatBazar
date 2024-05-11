'use client'

import { Button } from "@/components/ui/button"
import { FaPlus } from 'react-icons/fa'
import AddForm from "./AddForm"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const AddCard = () => {
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
                <AddForm />
                <SheetFooter>
                    <SheetClose asChild>
                        <Button id="MobileClose" className="hidden" type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
export default AddCard