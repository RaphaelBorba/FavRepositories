'use client'
import { FormEvent } from "react"

export default function FormAddRepo() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
    }

    return (
        <form className="flex w-full justify-between gap-3" onSubmit={handleSubmit}>

            <input
                className="h-10 w-[90%] rounded-md border-[1px] border-[#bbbbbbff] pl-3 text-gray-700 focus:outline-none"
                required
                type="text" />
            <button
                className="w-[40px] rounded-md bg-[#233442] text-2xl text-white duration-500 hover:bg-[#3c5469]"
                type="submit">
                +
            </button>
        </form>
    )
}