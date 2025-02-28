import Counter from "./Counter/Counter";

// Example with multiple components
function HelloReact() {
    return (
        <div className="container">
            <h2>Hello React! - using <code>state</code> and <code>props</code>.</h2>
            {/*Another imported component*/}
            <Counter/>
        </div>
    )
}

export default HelloReact
