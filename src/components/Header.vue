<template>
    <ul>
        <li id="home">
            Home
        </li>
        <li id="order">
            Order
        </li>
    </ul>
</template>

<style scoped>
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        background-color: #64F243;
        padding: 0;
    }

    li {
        padding: 10px;
        cursor: pointer;
    }

    li:hover {
        background-color: #198900;
        color: white;
    }

    li.active {
        background-color: #ccc;
    }
</style>