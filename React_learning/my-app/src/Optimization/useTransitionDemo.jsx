// import { useTransition } from "react";
// import { useState } from "react";

// function UseTrans() {
//     const [input, setInput] = useState('');
//     const [list, setList] = useState([]);
//     const [isPending, startTransition] = useTransition([]);


//     let listsize = 20000;

//     function handleChange(e) {
//         setInput(e.target.value)
//         startTransition(() => {
//             let op = [];
//             for(let i = 0; i<listsize; i++) {
//                 op.push(e.target.value)
//             }
//             setList(op);
//         })
//     }

//     return <>
//         <input className="outline" type="text" value={input}  onChange={handleChange}/>
//         {list.map((item, i) => {
//             return <div key={i}>
//                 {item}
//             </div>
//         })
//     }
//     </>

// }

// export default UseTrans


import { useState, useTransition, useEffect } from "react";

function UseTrans() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [debouncedInput, setDebouncedInput] = useState(); // For debounced value

    let listsize = 20000;
    const debounceDelay = 300; // Delay in ms

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(input); // Update debounced input after delay
        }, debounceDelay);

        // Clear timeout if input changes (to debounce properly)
        return () => {
            clearTimeout(handler);
        };
    }, [input]); // Effect runs every time `input` changes

    // When debouncedInput changes, start a transition to update the list
    useEffect(() => {
        startTransition(() => {
            let op = [];
            for (let i = 0; i < listsize; i++) {
                op.push(debouncedInput);
            }
            setList(op);
        });
    }, [debouncedInput]);

    function handleChange(e) {
        setInput(e.target.value); // Always update the input immediately
    }

    return (
        <>
            <input
                className="outline"
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type something"
            />
            {isPending ? <p>Updating list...</p> : null}
            {list.map((item, i) => (
                <div key={i}>
                    {item}
                </div>
            ))}
        </>
    );
}

export default UseTrans;
