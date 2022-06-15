import java.util.HashSet;
import java.util.Set;


class Solution {
    public int findRepeatNumber(int[] nums) {
        int n = nums.length;
        Set<Integer> set = new HashSet<>();     //1、如何new一个set

        for(int i = 0; i < n; i++) {
            if(set.contains(nums[i])) {     //2、set.contains方法判断是否包含元素
                return nums[i];
            }
            set.add(nums[i]);   //3、set添加用add方法
        }
        return -1;
    };

    public static void main(String[] args){
        Solution s =new Solution();
        int [] a = {1,2,3};
        int res = s.findRepeatNumber(a);
        System.out.println(res);

        int [] b = {1,2,1,2,3,3};
        int resb = s.findRepeatNumber(b);
        System.out.println(resb);
    };
}