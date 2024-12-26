import { createContext, PropsWithChildren, useContext } from "react";

type PostCardContent = {
    post: Post
}

const PostCardContext = createContext<PostCardContent | undefined>(undefined)

type Post = {
    id: number;
    title: string;
    content: string
    user: {
        id: number;
        name: string
    }
}

type PostCardProps = PropsWithChildren & {
    post: Post
}


function UsePostCardContext() {
    const context = useContext(PostCardContext)
    if(!context) {
        throw new Error('UsePostCardContext must be used within PostCard')
    }
    return context;
}


export function PostCard({ children, post }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2">
                {children}
            </div>
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    const {post} = UsePostCardContext();
    return  <h2 className="text-lg font-semibold">{post.title}</h2>
}

PostCard.Content = function PostCardContent() {
    const {post} = UsePostCardContext();
    return  <p>{post.content}</p>
}

PostCard.User = function PostCardUser() {
    const {post} = UsePostCardContext();
    return  <p className="text-sm text-neutral-400">By {post.user.name}</p>
}

PostCard.Buttons = function PostCardUser() {
   return ( <div className="flex flex-row gap-2">
    <button>read More</button>
    <button>Comments</button>
</div>)
}