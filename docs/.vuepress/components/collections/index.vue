<template>
  <div>
      <ol class="items">

          <li class="item">
            <div class="item-box">
                <a href="https://www.free-api.com/" type="primary" target='_blank'> 
                    接口大全
                </a>
                <a href="">
                    实践
                </a>
                
            </div>
          </li>


      </ol>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang='scss' scopped>
    .items{
        display: flex;
        flex-wrap: wrap;
        .item{
            margin-bottom: 2em;
            flex:0 0 30%;
            .item-box{
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>