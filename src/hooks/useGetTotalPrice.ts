import { useContext, useState, useEffect } from 'react'

import { OrderContext } from '../context'

const useGetSingleOrderTotalPrice = () => {
    const { orderData } = useContext(OrderContext);

    const [totalPrice, setTotalPrice] = useState(0)

    const calculateTotalPrice = () => {
        let price = 0;

        if(orderData.size)
            price = orderData.size.price;

        if(orderData.extraIngredients?.length){
            orderData.extraIngredients.forEach(ingredient => {
                price += ingredient.price;
            });
        }

        return setTotalPrice(price);
    }

    useEffect(() => {
        calculateTotalPrice();
    },[orderData]);

    return [totalPrice];
}

export default useGetSingleOrderTotalPrice;
