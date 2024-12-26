import { useState } from "react"

export function Folder({ explorer }) {

    const [expand , setExpand] = useState(false);
    if (explorer.isFolder) {
        return <div style={{ marginTop: 5 }}>
            <div>
                <span>
                    📁 {explorer.name}
                </span>
            </div>
            <div>
                {explorer.items.map((exp) => {
                    return (
                        <span>
                            {exp.name}
                        </span>
                    )
                })}
            </div>
        </div>
    } else {
        return <span>
            📄 {explorer.name}
        </span>
    }
}