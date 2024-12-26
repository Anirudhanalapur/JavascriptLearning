import { useRef, useState } from "react"

export function Test1() {
    const useRefValue = useRef(0);
    const [count, SetCount] = useState(0);
    return (<>
        <p>useRefValue: {useRefValue.current}</p>
        <button onClick={() => useRefValue.current += 1}>Use Ref Example</button>
        <p>Count State: {count}</p>
        <button onClick={() =>
            {
                SetCount((count) => count+ 1)
                SetCount((count) => count+ 1)
            }
            }>Count State</button>
    </>)
}