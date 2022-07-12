<template>
    <div class="box">
        <h3>flexbox 的两根轴线</h3>
        <p>flex-direction:row</p>
        <div class="box-item first">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
        </div>
        <p>flex-direction:row-reverse</p>
        <div class="box-item second">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
        </div>

        <p>flex-direction:column</p>
        <div class="box-item third">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
        </div>
        <p>flex-direction:column-reverse</p>
        <div class="box-item forth">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
        </div>
    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.box .box-item {
    display: flex;
    width: 100%;
    min-height: 100px;
    gap:10px
}

.box .box-item .item {
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 4em;
}


.box .box-item.first{
    flex-direction: row;
}

.box .box-item.second{
    flex-direction: row-reverse;
}

.box .box-item.third{
    flex-direction: column;
}

.box .box-item.forth{
    flex-direction: column-reverse;
}

</style>
