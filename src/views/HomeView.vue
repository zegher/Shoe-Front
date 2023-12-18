<script>
export default {
    data() {
        return {
            shoes: null,
            selectedShoe: null,
            shoeCount: 0,
        }
    },
    created() {
        fetch('https://shoe-api-cyzq.onrender.com/api/v1/shoes', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' }  })
            .then(response => response.json())
            .then(data => { 
            this.shoes = data;
            this.shoeCount = data.reduce((total, shoe) => total + shoe.orders, 0);
            });
        },
    methods: {
        selectShoe(shoe){
            this.selectedShoe = shoe;
            console.log(this.selectedShoe._id);
        },
        updateShoeStatus() {
            if (this.selectedShoe) {
                // Update the status of the selected shoe
            }
        },
        async updateShoeStatusInApi() {
        if (this.selectedShoe) {
            const updatedStatus = { status: this.selectedShoe.status };

            const response = await fetch(`https://shoe-api-cyzq.onrender.com/api/v1/shoes/${this.selectedShoe._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedStatus),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedShoe = await response.json();
            this.selectedShoe.status = updatedShoe.status;

            // Optionally, update other properties if needed

            // Find the updated shoe in the shoes array and replace it with the updated shoe
            const index = this.shoes.findIndex(shoe => shoe._id === updatedShoe._id);
            if (index !== -1) {
                this.shoes.splice(index, 1, updatedShoe);
            }
        }
    },
    }
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
          <!-- amount of orders -->
          <p class="text-xs" v-if="shoes">{{ shoeCount }}</p>
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

    <div v-if="selectedShoe" class="absolute left-[50%] translate-x-[-50%] bg-primary mt-[-150px] p-[5%] h-[400px] w-[500px]">
        <!-- an X that closes this div -->
        <p class="text-black text-1xl font-bold ml-[-55px] mt-[-60px]" @click="selectedShoe = null">X</p>

        <p><strong>Shoe ID:</strong> {{ selectedShoe._id }}</p>
        <p><strong>Status:</strong> {{ selectedShoe.status }}</p>
        <p><strong>Change status:</strong></p>
            <select class="bg-primary border-2 border-black text-black" v-model="selectedShoe.status" @change="updateShoeStatusInApi" value="Change status">
                <option value="verzonden">Verzonden</option>
                <option value="geannuleerd">Geannuleerd</option>
                <option value="productie">In Productie</option>
            </select>
        <p><strong>Made on:</strong> {{ selectedShoe.createdAt }}</p>
        <p><strong>Price:</strong> {{ selectedShoe.price }}</p>
        <p><strong>Sole 1 color:</strong> {{ selectedShoe.sole_1Color }}</p>
        <p><strong>Sole 2 color:</strong> {{ selectedShoe.sole_2Color }}</p>
        <p><strong>Inside color:</strong> {{ selectedShoe.insideColor }}</p>
        <p><strong>Outside 1 color:</strong> {{ selectedShoe.outside_1Color }}</p>
        <p><strong>Outside 2 color:</strong> {{ selectedShoe.outside_2Color }}</p>
        <p><strong>Size color:</strong> {{ selectedShoe.size }}</p>
    </div>
</template>
