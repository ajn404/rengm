<template lang="pug">
.demo1-1 {{s1}}
p 如果Symbol的参数是一个对象，会调用该对象的toString方法，将其转换成字符串，然后才生成Symbol值
p {{s2}}
p Symbol参数只表示对当前Symbol的描述，相同参数的Symbol函数返回值是不相等的
p Symbol('abc')===Symbol('abc' )  =>{{s3}}
p Symbol('abc')==Symbol('abc' )  =>{{s4}}
</template>

<script setup lang="ts">
const s1 = Symbol('s1');

const obj = {
    tar:'obj',
    toString:()=>{
        return 'obj func'
    }
}

const s2 = Symbol(obj)

const s3 =Symbol('abc')===Symbol('abc' )
const s4 = Symbol('abc') == Symbol('abc')

</script>
