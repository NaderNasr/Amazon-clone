import { StarIcon } from "@heroicons/react/outline";
import { CurrencyDollarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  isPrime,
}) {
  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //     setCount(prevCount => prevCount + 1);

  //   };

  //   //Create handleDecrement event handler
  //   const handleDecrement = () => {
  //     setCount(prevCount => prevCount - 1);
  //   };

  const dispatch = useDispatch();

  const AddItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      isPrime,
    };
    //push into redux
    dispatch(addToCart(product));
  };

  const RemoveItemToCart = () => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        {/* <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div> */}
        <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="CAD" />
        {isPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              loading="lazy"
              src="https://bit.ly/3fDEqip"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* add and remove items */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={AddItemToCart}>
          Add to Cart
        </button>

        <button className="button" onClick={RemoveItemToCart}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
