import { PostCard } from "./PostCard";

export function CompoundComponentsDemo() {
    return (
        <div>
            <PostCard post={{
                id: 1,
                content: 'This is first Post',
                title: 'hello', 
                user: {
                    id: 1, 
                    name: 'anirudha'
                }
            }}>
            <PostCard.Title/>
            </PostCard>
        </div>
    )
}