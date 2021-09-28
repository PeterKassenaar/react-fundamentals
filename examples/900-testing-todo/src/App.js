import TodoList from "./components/TodoList";
// Uncomment to also load/show the HackerNewsList Component w/ async API call and tests.
// import HackerNewsList from "./components/HackerNews/HackerNewsList";

const App = () => {
    return (
        <div className="container">
            <TodoList/>
            {/*<hr/>*/}
            {/*<HackerNewsList />*/}
        </div>
    );
}

export default App;
