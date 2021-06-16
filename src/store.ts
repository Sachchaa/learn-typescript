import { createContext } from 'react'

const initialState = {
    first: "Sachin",
    last: "Kanishka"

}

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)

export default context