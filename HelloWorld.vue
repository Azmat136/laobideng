<template>
  <div class="hello">
    <h3>跨域解决方案</h3>
    <p>{{ title }}</p>
    <p>{{ wenduan.message }}</p>


  </div>
</template>

<script>
import axios from 'axios';

// "https://jsonplaceholder.typicode.com/posts/1"
export default {
  name: 'HelloWorld',
  data(){
    return{
      title:"hello",
      wenduan:[]
    }
  },
  mounted(){
    axios.get("/api/data").then(res =>{
      this.title=res.data.title;
      this.wenduan=res.data;
      console.log(res.data.text);
    });
  },
}
</script>
