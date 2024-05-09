'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"


export default function ClientNavigationButton({ children, classname, query }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (

        <button
            className={classname}
            onClick={() => { router.push('?' + createQueryString(query.name, query.value), { scroll: false }) }}>
            {children}
        </button>
    )
}