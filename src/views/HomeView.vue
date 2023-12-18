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

<template>
  <header>
      <ul class="w-full bg-primary flex justify-between p-3">
      <li id="home">
          Home
      </li>
      <li class="ml-[-38%]">
          Profile
      </li>
      <li>
          <img class="absolute left-[50%] translate-x-[-50%] mt-[-2%]" src="../assets/logo.svg" alt="">
      </li>
      <li id="order">
          <img src="../assets/Basket.svg" alt="">
      </li>
  </ul>
  </header>
  

  <div class="bg-black h-screen">
      <h1 class="text-white font-bold text-5xl text-center pt-[125px]">
          SHOE ORDERS
      </h1>

      <div class="flex justify-center m-[5%] gap-6" v-if="shoes">
          <!-- Loop so all shoeorders are shown -->
          <div v-for="(order, index) in shoes.data[0].shoeOrders" :key="index">
              <div class="c-green border-2 border-white h-[200px] w-[150px]"></div>
              <p class="text-white">{{ order.brand }}</p>
              <p class="text-white">{{ order.price }}</p>
              <p class="text-black border-2 border-primary bg-primary mt-[30px]">Details</p>
          </div>
      </div>
  </div> 
</template>
