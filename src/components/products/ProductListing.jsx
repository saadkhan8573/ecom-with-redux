import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { setProducts } from '../../redux/actions/Actions';
import ProductComponents from './ProductComponents';

const ProductListing = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const ProductsList = await axios.get("https://fakestoreapi.com/products/")
                dispatch(setProducts(ProductsList.data));
            }
            catch (err) {
                alert(err)
            }

        }
        fetchProducts()
    }, [])

    return (
        <>
            <ProductComponents/>
        </>
    )
}

export default ProductListing
