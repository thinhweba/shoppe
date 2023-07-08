import { useState } from "react";

const QuantitySelection = ({ initialQuantity, onQuantityChange }) =>{
    const [quantity, setQuantity] = useState(initialQuantity);
    const handleDecrease = () => {
        if (quantity > 1) {
          const newQuantity = quantity - 1;
          setQuantity(newQuantity);
          onQuantityChange(newQuantity);
        }
      };
    
      const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
      };
    
      const handleInputChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
      };

    return (
        
        <div className="flex items-center justify-center border w-fit rounded-full border-black">
            <button
                className="text-gray-700 font-semibold py-1 px-2 rounded-l"
                onClick={handleDecrease}
            >
                -
            </button>
            <input
                className="mx-2 text-center appearance-none text-gray-700 rounded w-24 py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                min="1"
                value={quantity}
                onChange={handleInputChange}
                disabled
            />
            <button
                className=" text-gray-700 font-semibold py-1 px-2 rounded-r"
                onClick={handleIncrease}
            >
                +
            </button>
    
        </div>
       
    )
}

export default QuantitySelection;