<template>
  <div class="editdProduct">
    <form @submit.prevent="handleSubmit" class="form">
      <label>品項名稱:</label>
      <input type="text" v-model="name" required />
      <label>價格:</label>
      <input type="text" v-model="price" required />
      <label>尺寸:</label>
      <select name="size" v-model="size">
        <option value="" disabled>請選擇尺寸</option>
        <option value="L">L</option>
        <option value="M">M</option>
        <option value="S">S</option>
      </select>
      <label>備註:</label>
      <textarea name="notes" id="notes" v-model="notes"></textarea>
      <button class="btnEdit">更新</button>
      <button type="button" class="btnCancel" @click="handleCancel">
        取消
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      name: '',
      price: '',
      size: '',
      notes: '',
      uri: `http://localhost:3000/products/${this.id}`,
    };
  },
  methods: {
    handleSubmit() {
      axios({
        method: 'PATCH',
        url: this.uri,
        data: {
          name: this.name,
          price: this.price,
          size: this.size,
          notes: this.notes,
        },
      })
        .then(() => {
          alert('更新完成');
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
  mounted() {
    axios(this.uri)
      .then((res) => res.data)
      .then((data) => {
        this.name = data.name;
        this.price = data.price;
        this.size = data.size;
        this.notes = data.notes;
      });
  },
};
</script>

<style lang="scss">
@import "../assets/scss/all";
</style>
