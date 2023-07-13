class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> adj_list(numCourses);
        vector<int> degree(numCourses,0);
        for(auto val: prerequisites){
            adj_list[val[1]].push_back(val[0]);
            degree[val[0]]++;
        }

        queue<int> validCourses;
        unordered_set<int> isVisited;
        for(int i =0;i<numCourses;i++){
            if (degree[i]==0) {
                validCourses.push(i);
                isVisited.insert(i);
            }
        }

        while(!validCourses.empty()){
            int data = validCourses.front();
            validCourses.pop();
            for(int child : adj_list[data]){
                degree[child]--;
                if (degree[child]==0) {
                    validCourses.push(child);
                    isVisited.insert(child);
                }
            }
        }

        return isVisited.size()==numCourses;
    }
};