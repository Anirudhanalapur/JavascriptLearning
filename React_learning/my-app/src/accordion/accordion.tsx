import { useState } from "react"
import "./accordion.css"

interface IList {
    title: string,
    discription: string,
    showDescription: boolean,
    isChecked: boolean
}

function useAccordion(initalList: IList[]) {
    const [list, setList] = useState(initalList)
    const toggleAccordion = (index: number) => {
        setList(prevList => prevList.map((item, i) => ({
            ...item,
            showDescription: i === index ? !item.showDescription : false,
            isChecked: i === index ? !item.isChecked: item.isChecked
        })))
    }
    const toggleCheckbox = (index: number) => {
        setList(prevList =>
            prevList.map((item, i) => ({
                ...item,
                isChecked: i === index ? !item.isChecked : item.isChecked
            }))
        )
    }

     return { list, toggleAccordion, toggleCheckbox }
}





function Accordion() {
    const listData: IList[] = [{ title: 'Accordion 1', discription: 'Description Accordion 1', showDescription: false, isChecked: false },
    { title: 'Accordion 2', discription: 'Description Accordion 2', showDescription: false, isChecked: false },
    { title: 'Accordion 3', discription: 'Description Accordion 3', showDescription: false, isChecked: false }]

    const { list, toggleAccordion , toggleCheckbox} = useAccordion(listData);

    return (<form>

        {list.map((item: any, index: number) => (
            <div key={index}>
                <div className="accordion-section">
                    <input type="checkbox" checked={item.isChecked} onChange={() => toggleCheckbox(index)}/>
                    <div className="title" onClick={() => toggleAccordion(index)}>{item.title}</div>
                </div>
                {item.showDescription && (
                    <div>
                        {item.discription}
                    </div>
                )}
            </div>

        ))
        }
        <button type="submit">

        </button>

        </form>
    )
}

export default Accordion