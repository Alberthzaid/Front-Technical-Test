import React, {useState} from 'react';
import './PaymentPopup.css'
import {initMercadoPago , Wallet} from '@mercadopago/sdk-react';
import {PaymentProductSale} from "../../Helpers/ApiConfig/Controllers/ControllersFetch.js";
import {useCartStore} from "../../GlobalState/CartState/CartState.jsx";
import {API_PAYMENT_PRODUCT} from "../../Helpers/ApiConfig/Controllers/Apis.js";

export const PaymentForm = () => {
    const [ idPreference , setIdPreference ] = useState('');
    initMercadoPago('TEST-cd3848fc-a323-4446-b1f3-a7fe24128cac', {locale: 'es-CO'});
    const items = useCartStore((state) => state.cartItems)

    const handleClick = async ()=>{

        const bodyData = items.map(item => ({
            title: item.title,
            quantity: parseInt(item.quantity),
            unit_price: parseInt(item.quantity)
        }));
        console.log(bodyData)


        const {id} =  await  PaymentProductSale(API_PAYMENT_PRODUCT,{ items: bodyData })
        setIdPreference(id);
        console.log(id)

    }

    return(
        <>
            <button onClick={handleClick} className="Btn">
                Pay
                <svg className="svgIcon" viewBox="0 0 576 512">
                    <path
                        d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                </svg>
            </button>
            {idPreference && <Wallet initialization={{preferenceId: idPreference}}/>}
        </>
    )
};




