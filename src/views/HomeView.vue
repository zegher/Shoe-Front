<script>
export default {
    data() {
        return {
            shoes: null,
            selectedShoe: null
        }
    },
    created() {
        fetch('https://shoe-api-cyzq.onrender.com/api/v1/shoes', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' }  })
            .then(response => response.json())
            .then(data => { 
                this.shoes = data;
                console.log(data);
            });
    },
    methods: {
        selectShoe(shoe){
            this.selectedShoe = shoe;
        },
    },
}
</script>

<template class="overflow-x-hidden">
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
              <p class="text-black border-2 border-primary bg-primary mt-[30px]" @click="selectShoe(order)">Details</p>          </div>
      </div>
  </div> 

  <div v-if="selectedShoe" class="bg-primary">
    <p>Shoe ID: {{ selectedShoe.id }}</p>
    <p>Made on: {{ selectedShoe.createdAt }}</p>
    <p>Price: {{ selectedShoe.price }}</p>
    <p>Sole 1 color: {{ selectedShoe.sole_1Color }}</p>
    <p>Sole 2 color: {{ selectedShoe.sole_2Color }}</p>
    <p>Inside color: {{ selectedShoe.insideColor }}</p>
    <p>Outside 1 color: {{ selectedShoe.outside_1Color }}</p>
    <p>Outside 2 color: {{ selectedShoe.outside_2Color }}</p>
    <p>Size color: {{ selectedShoe.size }}</p>

  <!-- Display other properties of the selected shoe... -->
</div>


</template>
