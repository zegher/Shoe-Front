<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Login from './components/Login.vue'

//if clicked then hide div
const hideDiv = () => {
    console.log("clicked");
    document.getElementById("hider").style.display = "none";
}

defineExpose({ hideDiv })
</script>

<template class="overflow-hidden">
  <Login />
  <Header />
  <Body />
</template>

