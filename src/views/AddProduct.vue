<template>
  <div class="AddProduct">
    <form @submit.prevent="handleSubmit" class="form">
      <label>品項名稱:</label>
      <input type="text" v-model="name" placeholder="請輸入名稱" required />
      <label>價格:</label>
      <input type="text" v-model="price" placeholder="請輸入價格" required />
      <label>尺寸:</label>
      <select name="size" v-model="size">
        <option value="" disabled>請選擇尺寸</option>
        <option value="L">L</option>
        <option value="M">M</option>
        <option value="S">S</option>
      </select>
      <label>備註:</label>
      <textarea name="notes" id="notes" v-model="notes"></textarea>
      <button class="btnEdit">新增</button>
      <button type="button" class="btnCancel" @click="handleCancel">
        取消
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      price: '',
      size: '',
      notes: '',
      uri: 'http://localhost:3000/products',
    };
  },
  methods: {
    handleSubmit() {
      const product = {
        name: this.name,
        price: this.price,
        size: this.size,
        notes: this.notes,
      };
      axios
        .post(this.uri, product)
        .then(() => {
          alert('新增成功');
          this.$router.push('/');
        })
        .catch((err) => console.log(err));
    },
    handleCancel() {
      this.name = '';
      this.price = '';
      this.size = '';
      this.notes = '';
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/all";
</style>
