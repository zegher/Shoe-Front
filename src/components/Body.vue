<template>
    <div class="bg-black h-screen">
        <h1 class="text-white font-bold text-5xl text-center pt-[125px]">
            SHOES
        </h1>

        <div>
            <div border>

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