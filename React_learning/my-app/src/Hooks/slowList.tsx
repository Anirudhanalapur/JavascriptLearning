import { memo } from "react";

const SlowList = memo(({ text }: { text: string }) => {
    const items = [];
    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />)
    }
    return <ul>{items}</ul>
})


const SlowItem = ({ text }: { text: string }) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {

    }
    return <li>Text: {text}</li>

}

export default SlowList