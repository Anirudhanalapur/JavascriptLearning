import { useState, useDeferredValue, useEffect } from "react";
import SlowList from "./slowList";

const Demo = () => {
    const [query, setQuery] = useState('test');
    const deferredQuery = useDeferredValue(query)

    useEffect(() => {
        console.log('query', query);
        console.log('deferered query', deferredQuery)
        console.log('-------end of query-----------',)

    }, [query, deferredQuery])

    return (<div className="flex flex-col justify-center">
        <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text" 
        value={query} 
        onChange={(e: any) => setQuery(e.target.value)}/>
      <SlowList text={deferredQuery}/>
    </div>)
}

export default Demo