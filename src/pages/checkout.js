import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from 'react-currency-formatter'
import { useSession } from "next-auth/client";

function Checkout() {

    const items = useSelector(selectItems)
    const [session] = useSession()
    const total = useSelector(selectTotal)

    return (
        <div className='bg-gray-100'>
            <Header/>
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left Section */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image src='https://bit.ly/3jrpll2' width={1020} height={250} objectFit='contain'/>
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? 'Your Cart is Empty' : 'Your Cart'}
                    </h1>
                    {items.map((item, i) => (
                        <CheckoutProduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            description={item.description} 
                            category={item.category}
                            image={item.image}
                            isPrime={item.isPrime}
                        />
                    ))}
                </div>
                </div>
                
                {/* Right Section */}
                <div className={`flex flex-col bg-white p-10 shadow-md ${!items.length && 'hidden'}`}>
                   {items.length > 0 && (
                       <>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{" "}
                        <span className='font-bold'>
                            <Currency quantity={total} currency='CAD'/>
                        </span>
                        </h2>
                        <button
                        disabled={!session}
                         className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-300 text-gray-300 cursor-not-allowed'}`}>
                            {!session ? 'Sign in to checkout' : 'Proceed to Checkout'}
                        </button>
                       </>
                   )} 
                </div>
            </main>
        </div>
    )
}

export default Checkout
