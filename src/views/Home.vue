<template>
  <div class="home">
    <div v-if="products.length">
      <div class="container">
        <router-link :to="{ name: 'AddProduct' }" class="addBtn">
          <button class="addColor">新增品項</button>
        </router-link>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>品項名稱</th>
                <th>價格</th>
                <th>尺寸</th>
                <th>備註</th>
                <th>設定</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>$ {{ product.price }}</td>
                <td>{{ product.size }}</td>
                <td>{{ product.notes }}</td>
                <td>
                  <router-link
                    :to="{ name: 'EditProduct', params: { id: product.id } }"
                  >
                    <button class="btnEdit">編輯</button>
                  </router-link>
                  <button
                    @click="handleDeleteProduct(product.id, index)"
                    class="btnDelete"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      products: {
        name: '',
        price: '',
        size: '',
        notes: '',
      },
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/products')
      .then((res) => {
        this.products = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleDeleteProduct(id, index) {
      const target = this.products[index];
      if (window.confirm(`刪除訂單編號${target.id}?`)) {
        axios
          .delete(`http://localhost:3000/products/${id}`)
          .then(() => {
            this.products.splice(index, 1);
            alert('刪除成功');
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/all";

.addBtn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;

  .addColor {
    background: var(--color-primary-light);

    &:hover {
      background: var(--color-primary);
    }
  }
}
.btnDelete {
  background-color: var(--color-primary-dark);

  &:hover {
    background-color: var(--color-primary-light);
  }
}

.btnEdit {
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-light);
  }
}
</style>
