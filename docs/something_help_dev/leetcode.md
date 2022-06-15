---
pageClass: leetCode
---
## [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
::: tip 描述
所求的最优值为： Max{a[i]+a[i+1]+…+a[j]},1<=i<=j<=n 例如，当（a[1],a[2],a[3],a[4],a[5],a[6]）=(-20,11,-4,13,-5,-2)时，最大子段和为20。
:::
### 尝试（菜鸡的错误尝试）:
::: details 查看代码
```js
var maxSubArray = function (nums) {
    let max = nums[0]
    if (nums.length == 1) {
        return max
    }
    let arrayMax = Function.prototype.apply.bind(Math.max, null);
    if (!nums.find(item => item > 0)) {
        return arrayMax(nums)
    }
    let temp = [],lastSum;
    let sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        lastSum = sum;
        sum += nums[i];
        if (sum < 0) {
            sum = nums[i];
        }else{
            temp.push(sum);
        }
    }
    console.log(temp)
};
// console.log(maxSubArray([1,-1,2,4,-4,5,-1]))
// console.log(maxSubArray([5,4,-1,7,8]))
console.log(maxSubArray([-2,-10, 2, 10, 11, 22, -100,100, 102]))
//leetcode submit region end(Prohibit modification and deletion)
```
:::
- 该方法只能取到小范围内的最大和，一旦碰到使自己变成负数的子项便立马停止，然后重新统计，但下一个又马上让自己变成了比自己还大的集合，这就有点眼界狭隘了哈
### 网上找的爆搜
::: details 查看代码
```js
var maxSubArray = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    let sum = 0, max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
            }
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max
};
```
:::
- 但是超时了，毕竟爆搜嘛
### 减去一层循环
::: details 查看代码
```js
var maxSubArray = function (nums) {
  // console.time()
  if(nums.length ===1){
          return nums[0]
      }
      let sum = 0 , max =nums[0];
      for(let i=0;i<nums.length;i++){
          sum = 0;
          for(let j=i;j<nums.length;j++){
              sum+=nums[j];
              if(sum>max){
                  max =sum;
              }
          }
      }
      // console.timeEnd()
      return max;
};
    
```
:::
### 扫描法
::: details 查看代码
```js
 let sum = nums[0];
    let current = nums[0];
    for(let i=1;i<nums.length;i++){
        if(current<0){ current =nums[i]}
        else current+=nums[i];
        if(sum<current){sum = current}
    }
    return  sum
```
:::
## [最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)
::: tip 描述
给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
:::
### 多行
- 用js函数实现的垃圾
::: details 查看代码
```js
var lengthOfLastWord = function(s) {
    let res=s.split(" ")
    res=res.filter(item=>{
        return item!==""
    })
    return (res[res.length-1]).length
};
```
:::
### 单行
- 单行的垃圾
::: details 查看代码
```js
var lengthOfLastWord = function(s) {
    return s.match(/\S+/g)[s.match(/\S+/g).length-1].length
};
```
:::
> 解答成功:
>
> 执行耗时:72 ms,击败了48.33% 的JavaScript用户
>
> 内存消耗:38.1 MB,击败了11.73% 的JavaScript用户

### 遍历
- 下面这个解法，嗯，天才！
::: details 查看代码
```js
var lengthOfLastWord = function(s) {
    let res ;
    let arr=s.split('');
    let tag=0;
    let j=0;
    for(let i = arr.length-1;i>=0;i--){
        if(arr[i]==" "&&tag!=2){
            tag=1;
        }
        if(arr[i]!=" "){
            j++
            console.log(j)
            tag=2;
        }
        if(arr[i]==" " && tag==2){
            res=i;
            break;
        }
    }
    return  j
};
```
:::
>解答成功:
>
>执行耗时:104 ms,击败了5.54% 的JavaScript用户
>
>内存消耗:39.3 MB,击败了5.00% 的JavaScript用户

:smile::smile::smile::smile::smile::smile::smile::smile::smile::smile:

### 优秀的js函数
- trim()方法用于删除字符串的头尾空格
::: details 查看代码
```js
var lengthOfLastWord = function(s) {
    let sa = s.trim();
    sa = sa.split("").reverse().join("")
    return sa.indexOf(" ")!==-1?sa.indexOf(" "):sa.length
};
```
:::

### 更优秀的函数
- lastIndexOf() 返回指定字符串最后出现的位置
::: details 查看代码
```js
var lengthOfLastWord = function(s) {
    let sa = s.trim();
    return sa.lastIndexOf(" ")!==-1?(sa.length-sa.lastIndexOf(" ")-1):sa.length
};
```
:::
> 解答成功:
>
>执行耗时:84 ms,击败了9.51% 的JavaScript用户
>
>内存消耗:37.7 MB,击败了73.01% 的JavaScript用户

### 上述变成单行
::: details 查看代码
```js
var lengthOfLastWord = function(s) {
    return s.trim().lastIndexOf(" ")!==-1?(s.trim().length-s.trim().lastIndexOf(" ")-1):s.trim().length
};
```
:::
- 意外的性能很好
>解答成功:
>
>执行耗时:60 ms,击败了95.44% 的JavaScript用户
>
>内存消耗:37.8 MB,击败了53.38% 的JavaScript用户
  		
## [加1](https://leetcode-cn.com/problems/plus-one/)
::: tip 描述
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
:::

### 单行
::: details 查看代码
```js
var plusOne = function(digits) {
    return `${BigInt(digits.toString().replace(new RegExp( ',' , "g" ),''))+BigInt(1)}`.split('')
};
```
:::
### 多行
::: details 查看代码
```js
var plusOne = function(digits) {
    let len = digits.length;
    let res=0;
    for(let i=0;i<len;i++){
        let inz=len-i-1;
        let inx=Math.pow(10,inz);
        res+=digits[i]*inx
    }
    res+=1
    let trueRes = [];
    while (res){
        trueRes.unshift(res%10);
        res=parseInt(res/10);;
    }
    return trueRes
};
```
:::

::: warning 解答失败:
测试用例:[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]<br>
测试结果:[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,6,6,2,8]<br>
期望结果:[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]<br>
:::
js的安全计算大概在16位，超过16位就出错了<br>
:smile::smile::laughing::laughing::blush::blush:<br>
<!--
:smiley::smiley::relaxed::relaxed::smirk::smirk:
:heart_eyes::heart_eyes::kissing_heart::kissing_heart:<br>
:kissing_closed_eyes::kissing_closed_eyes::flushed::flushed:
:relieved::relieved::satisfied::satisfied::grin::grin::wink::wink:<br>
:stuck_out_tongue_winking_eye::stuck_out_tongue_winking_eye:
:stuck_out_tongue_closed_eyes::stuck_out_tongue_closed_eyes::grinning::grinning:
-->
## [二进制求和](https://leetcode-cn.com/problems/add-binary/)
::: tip 描述
给你两个二进制字符串，返回它们的和（用二进制表示<br>
输入: a = "11", b = "1"<br>
输出: "100"
:::
### 尝试单行
::: details 查看代码
```js
var addBinary = function(a, b) {
    return (BigInt(parseInt(a,2))+BigInt(parseInt(b,2))).toString(2)
};
```
:::
> 测试用例:"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
>
>"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
>
>测试结果:"110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"
>
>期望结果:"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"			

- 尝试失败

### 暴力解决
::: details 查看代码
```js
var addBinary = function(a, b) {
    let tarA = a.split("").reverse();
    let tarB = b.split("").reverse();
    let lenA = a.length;
    let lenB = b.length;
    let res = []
    let tag = 0;
    tarA=tarA.map((item)=>{
        return parseInt(item)
    })
    tarB=tarB.map((item)=>{
        return parseInt(item)
    })
    for(let i= 0;typeof tarA[i]==='number'||typeof tarB[i]==='number'||tag>0;i++){
        if(typeof tarA[i]!=='number'){
            tarA[i]=0
        }
        if(typeof tarB[i]!=='number'){
            tarB[i]=0
        }
        let sum = tarA[i]+tarB[i]+tag;
        if(sum>1){
            tag=1;
            if(sum>2){
                sum=1
            }
        else{
            sum=0
            }
        }else{
            tag=0;
        }
        res.unshift(sum)
    }
    console.log(res)
    res=res.toString()
    while (res.indexOf(',')!=-1){
        res=res.replace(',','')
    }
    return res
};
```
:::

### 优化
::: details 查看代码
```js
var addBinary = function (a, b) {
    let tarA = a.split("").reverse();
    let tarB = b.split("").reverse();
    let res = []
    let tag = 0;
    tarA = tarA.map((item) => {
        return parseInt(item)
    })
    tarB = tarB.map((item) => {
        return parseInt(item)
    })
    for (let i = 0; typeof tarA[i] === 'number' || typeof tarB[i] === 'number' || tag > 0; i++) {
        if (typeof tarA[i] !== 'number') {
            tarA[i] = 0
        }
        if (typeof tarB[i] !== 'number') {
            tarB[i] = 0
        }
        let sum = tarA[i] + tarB[i] + tag;
        if (sum > 1) {
            tag = 1;
            if (sum > 2) {
                sum = 1
            } else {
                sum = 0
            }
        } else {
            tag = 0;
        }
        res.unshift(sum)
    }
    return res.join("")
};
```
:::
### 继续优化
::: details 查看代码
```js
var addBinary = function (a, b) {
    let tarA = a.split("").reverse();
    let tarB = b.split("").reverse();
    let res = []
    let tag = 0;
    for (let i = 0; typeof tarA[i] === 'string' || typeof tarB[i] === 'string' || tag > 0; i++) {
        if (typeof tarA[i] !== 'string') {
            tarA[i] = 0
        }
        if (typeof tarB[i] !== 'string') {
            tarB[i] = 0
        }
        let sum = parseInt(tarA[i]) + parseInt(tarB[i]) + tag;
        if (sum > 1) {
            tag = 1;
            if (sum > 2) {
                sum = 1
            } else {
                sum = 0
            }
        } else {
            tag = 0;
        }
        res.unshift(sum)
    }
    return res.join("")
};
```
:::




## [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
::: tip 描述
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
:::

### 滑动窗口

```js:no-line-numbers
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    let temp = s.split('')
    let window = [temp[0]];
    let max = 1;
    for(let i=1;i<temp.length;i++){
        window.push(temp[i]);
        if([...new Set(window)].length===window.length){
            if(window.length>max){
                max = window.length;
                console.log(window)
            }
        }else{
            window.shift()
        }
    }
    return max
};

```

### 查找无重复子串使用filter方法
```js 
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    let temp = s
    let window = [];
    let max = 0;
    function is_minest(window) {
        return window.filter((s,i,o)=>o.indexOf(s)===i).length===window.length
    }

    for(let i=0;i<temp.length;i++){
        window.push(temp[i]);
        if(is_minest(window)){
            if(window.length>max){
                max = window.length;
            }
        }else{
            window.shift();
        }
    }
    return max;
};

```

## [最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

::: tip 描述
给你一个字符串 s，找到 s 中最长的回文子串。
:::

### 中心扩散
::: details 查看详情
```js:no-line-numbers
var longestPalindrome = function(s) {
    if(!s||s.length===1) return s;
    let len=s.length;
    s=s.split('')
    let left =0;
    let right = 0;
    let maxLength =0 ;
    let maxStart = 0 ;

    let tempLen=1
    for(let i=0;i<len;i++){
        left = i-1;
        right = i+1;
        while (left>0&&s[left]===s[i]){
            tempLen++;
            left--
        }
        while (right<len&&s[right]===s[i]){
            tempLen++;
            right++
        }
        while (left>=0&&right<len&&s[right]===s[left]){
            tempLen+=2;
            left--;
            right++;
        }
        if(tempLen>maxLength){
            maxStart=left;
            maxLength=tempLen;
        }
        tempLen=1
    }
    s=s.join('')
    return s.slice(maxStart+1,maxStart+maxLength+1)
};
```
:::

<!-- <ClientOnly>
<stack></stack>
</ClientOnly> -->
