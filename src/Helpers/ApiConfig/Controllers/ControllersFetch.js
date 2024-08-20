export const getProduct = async (url)=>{
    try{
        const request = await  fetch(url);
        const response = await request.json();
        return response;
    }catch(error){
        throw error
    }

}

export const PaymentProductSale = async (url, data) => {
    try {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const result = await request.json();
        const  {id} = result



    } catch (error) {
        console.error("PaymentProductSale error:", error.message);
        return null;
    }


}


