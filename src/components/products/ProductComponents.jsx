import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addtocart } from '../../redux/actions/Actions';

const ProductComponents = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.ProductReducer.products)
    const Title = (title, num) => {
        return title.length > num ? `${title.substr(0, num - 1)} .....` : title
    }

    const Description = (description, num) => {
        return description.length > num ? `${description.substr(0, num - 1)} .....` : description()
    }

    const addToCart = (product) => {
        dispatch(addtocart(product))
    }
    return (
        <>
            {/* {cart.length} */}
            <div className="grid gap-6 mx-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {
                    products.map(product => (
                        <>

                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" key={product.id}>
                                {/* <NavLink to={`/product/${product.id}`}> */}
                                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: `url(${product.image})` }}>
                                    <button onClick={() => addToCart(product)} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </button>
                                </div>
                                {/* </NavLink> */}
                                <div className="px-5 py-3">
                                    <small>{product.category}</small>
                                    <h3 className="text-gray-700 uppercase font-bold">{Title(`${product.description}`, 25)}</h3>
                                    <p className="text-sm"> {Description(`${product.description}`, 70)} </p>
                                    <span className="text-gray-500 mt-2">${product.price}</span>
                                </div>
                            </div>
                        </>

                    ))
                }
            </div>
        </>
    )
}

export default ProductComponents
