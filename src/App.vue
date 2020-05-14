<template>
  <div class="App">
    <Button>hello world</Button>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'App',
  components: {
    Button,
  },
  data() { 
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@color1: #123456;
  .App{
    display: flex;
    background-color: @color1;
    font-size: 50px;
  }
</style>
<style lang="scss" scoped>
$color2: #654321;
.App{
  border: 10px solid $color2;
}
</style>
<style scoped>
.App{
  font-size: 50px;
}
</style>