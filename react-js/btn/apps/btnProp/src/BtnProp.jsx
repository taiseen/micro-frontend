// eslint-disable-next-line react/prop-types
const BtnProp = ({ btnName }) => {

    const handleClick = () => alert(`Btn text is:- ${btnName}`);

    return (
        <div>
            <button
                className="btnProp"
                onClick={handleClick}
            >
                {btnName}
            </button>
        </div>
    )
}

export default BtnProp