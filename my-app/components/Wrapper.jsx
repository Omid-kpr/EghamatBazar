import { cn } from "@/lib/utils"
import { ReactNode } from "react"

function Wrapper({
    className,
    children,
}) {
    return (
        <div className={cn('flex flex-col justify-around mt-4 mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
            {children}
        </div>
    )
}

export default Wrapper