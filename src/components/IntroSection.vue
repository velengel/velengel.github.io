<template>
  <div class="link-collection">
    <h1>velinks</h1>
    <p>{{ description }}</p>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: 'エンジニアリングマネージャー見習い',
      links: [
        { id: 1, name: '📝技術ブログ', url: 'https://www.velengel.com/blog/' },
        { id: 2, name: '💻GitHub', url: 'https://github.com/velengel' },
      ]
    };
  }
};
</script>

<style scoped>
.link-collection {
  max-width: 800px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
