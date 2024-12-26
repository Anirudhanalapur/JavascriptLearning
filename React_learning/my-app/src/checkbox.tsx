import { useCallback, useState } from "react"

export function CheckBoxImplementation() {
    
    const [checkBoxState, setCheckBoxState] = useState([
        { isChecked: true },
        { isChecked: true },
        { isChecked: true },
        { isChecked: true },
    ])

    const allChecked = checkBoxState.every((item) => item.isChecked)

    const handleCheckboxClick = useCallback((index: number) => {
        setCheckBoxState(prevState =>
            prevState.map((item, i) =>
                i === index ? { ...item, isChecked: !item.isChecked } : item
            ))
    }, []);

    function handleAllCheckbox() {
        setCheckBoxState(prevState =>
            prevState.map((items) => ({
                ...items,
                isChecked: !allChecked
            }))
        )
    }

    return (<>
        <input type="checkbox" checked={allChecked} onClick={handleAllCheckbox} />
        {checkBoxState.map((data, index) => <input type="checkbox" key={index} onClick={(() => handleCheckboxClick(index))} checked={data.isChecked} ></input>)}

    </>)
}