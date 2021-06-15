import React, {useState} from 'react'

export default function UseStateHook() {
    const [array, setArray] = useState<number[]>([])
    const [name, setName] = useState<string | null >('')

    return (
        <div>
            <div>
                <button onClick={() => setArray([...array, array.length +1])}>Add to Array</button>
                {JSON.stringify(array)}
            </div>
            <div>
                <button onClick={() => setName("Sachin")}>Set Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}