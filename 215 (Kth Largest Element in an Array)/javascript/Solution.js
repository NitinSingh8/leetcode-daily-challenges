/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const mheap = new MinPriorityQueue();

  for(let i = 0;i<k;i++){
      mheap.enqueue(nums[i]);
  }

  for(let i = k;i<nums.length;i++){
      if (nums[i]>mheap.front().element){
          mheap.dequeue();
          mheap.enqueue(nums[i]);
      }
  }
  return mheap.front().element;
};