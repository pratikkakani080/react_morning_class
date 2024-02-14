import { useContext } from "react"
import ButtonContext from "../../myContext"

export default function Button(props) {
    const data = useContext(ButtonContext)
    // console.log('data_button***********>>>', data);
    const handleButtonClick = () => {
        data.setCartItem(data.cartItem + 1)
        // props.handleOnClick(props.submitLabel === 'Label changed' ? 'Submit' : 'Label changed')
    }
    return (
        <button
            onClick={() => handleButtonClick()}
        >
            {'test' || data.label || props.label}
        </button>
    )
}