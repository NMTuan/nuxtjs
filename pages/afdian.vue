<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-04-03 16:35:22
 * @LastEditTime: 2023-04-04 15:07:44
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtjs-touxiang\pages\afdian.vue
-->
<template>
  <div>
    <h1>afdian api</h1>

    <p><button @click="fetchOrders">检测订单</button></p>
    <pre>{{ resMsg }}</pre>
  </div>
</template>
<script setup>
const resMsg = ref({})

const fetchOrders = async () => {
  console.log('fetchOrders');

  const res = await $fetch('/api/afdian/order', {
    method: 'POST',
    body: {
      page: 1,
    }
  })
  resMsg.value = res
}
</script>
