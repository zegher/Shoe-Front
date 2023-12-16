<template>
    <div class="bg-black h-screen">
        <h1 class="text-white font-bold text-5xl text-center pt-[125px]">
            SHOES
        </h1>

        
        <div class="flex justify-center m-[5%] gap-6">
            <div>
                <div class="c-green border-2 border-white h-[200px] w-[150px]"></div>
                <p class="text-white">{{ shoes.data[0].shoeOrders[0].brand }}</p>
                <p class="text-white">{{ shoes.data[0].shoeOrders[0].price }}</p>
                <p class="text-black border-2 border-primary bg-primary mt-[30px]">Price</p>
            </div>
           
            <div>
                <div class="c-green border-2 border-white h-[200px] w-[150px]"></div>
                <p class="text-white">{{ shoes.data[0].shoeOrders[1].brand }}</p>
                <p class="text-white">{{ shoes.data[0].shoeOrders[1].price }}</p>
                <p class="text-black border-2 border-primary bg-primary mt-[30px]">Price</p>
            </div>                
        </div>        
    </div>


</template>

<script>
export default {
    data() {
        return {
            shoes: null
        }
    },
    created() {
        fetch('https://shoe-api-cyzq.onrender.com/api/v1/shoes', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' }  })
            .then(response => response.json())
            .then(data => { 
                this.shoes = data;
                console.log(data);
            });
    }
}
</script>