<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>



<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Connect Wallet</h3>
    <div v-if="!currentAccount">
        <button class="primaryButton" v-on:click="connectWallet2">Connect Wallet</button>
    </div>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://v2.vuejs.org/">Vue 2</a>.
    </h3>
  </div>
</template>

<script>

export default {
  data() {
    return {
    currentAccount: null,
    currentContract : null,
    contractAddress: "<Your deployed contract Address>"
    }
  },
  mounted(){
      this.checkConnectedWalletExist();
  },
  methods:{
 
  connectWallet2: async function(){
    try {
      const { ethereum } = window;
      if (!ethereum) {
          alert("Get MetaMask!");
          return;
      }
      const accounts = await ethereum.request({
            method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      this.currentAccount = accounts[0];
    } catch (error) {
      console.log(error);
    }
  },
     checkConnectedWalletExist: async function(){
     try {
      const { ethereum } = window;
      if (!ethereum) {
          alert("Make sure you have metamask!");
          return false;
        } else {
          console.log("We have the ethereum object", ethereum);
      }
     const accounts = await ethereum.request({ method: "eth_accounts" });
     if (accounts.length !== 0) {
         const account = accounts[0];
         console.log("Found an authorized account:", account);
         this.currentAccount = account;
         return true;
     } else {
         console.log("No authorized account found");
         return false;
      }
   } catch (error) {
      console.log(error);
      return false;
   }
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
