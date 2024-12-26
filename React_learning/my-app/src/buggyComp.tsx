export default function BuggyComp() {

    const handleClick = () => {
        setTimeout(() => {
            throw new Error("I crashed!"); // Intentionally throw an error
        }, 0);
    };
    return (
        <div>
            <h2>Buggy Component</h2>
            <button onClick={handleClick}>Click me to crash!</button>
        </div>
    );
}