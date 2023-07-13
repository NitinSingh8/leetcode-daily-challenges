class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        ArrayList<Integer>[] adj_list = new ArrayList[numCourses];
        for(int i = 0;i<numCourses;i++){
            adj_list[i] = new ArrayList<Integer>();
        }
        int[] degree = new int[numCourses];
        
        for(int[] val: prerequisites){
            adj_list[val[1]].add(val[0]);
            degree[val[0]]++;
        }

        ArrayList<Integer> arr = new ArrayList<>();
        for(int i =0;i<numCourses;i++){
            if (degree[i]==0){
                arr.add(i);
            }   
        }

        for(int i = 0;i<arr.size();i++){
            for(int child: adj_list[arr.get(i)]){
                degree[child]--;
                if(degree[child]==0) arr.add(child);
            }
        }
        return arr.size()==numCourses;
    }
}