import useCount from "./store";

const Button = () => {

    const [state, setState] = useCount(0);

    return (
        <div>
            <button
                className="btnStyle"
                onClick={() => setState(pre => pre + 1)}
            >
                Click me - {state}
            </button>
        </div>
    )
}

export default Button