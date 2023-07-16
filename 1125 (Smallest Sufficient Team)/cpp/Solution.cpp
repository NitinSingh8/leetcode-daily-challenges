class Solution {
public:
    vector<int> smallestSufficientTeam(vector<string>& req_skills, vector<vector<string>>& people) {
        unordered_map<string,int> skill_map;
        for(int i= 0;i<req_skills.size();i++){
            skill_map[req_skills[i]] = i;
        }
        unordered_map<int,vector<int>> dp;
        dp[0] = {};

        for(int index =0;index<people.size();index++){
            int person_bits = 0;
            for(int i = 0;i<people[index].size();i++){
                person_bits |= (1<<skill_map[people[index][i]]);
            }

            vector<int> tasks;
            for(const auto& entry: dp){
                tasks.push_back(entry.first);
            }

            for(int i = 0;i<tasks.size();i++){
                int new_tasks = tasks[i]|person_bits;
                if (dp.find(new_tasks) == dp.end() || (dp[new_tasks].size()>dp[tasks[i]].size()+1)){
                    dp[new_tasks] = dp[tasks[i]];
                    dp[new_tasks].push_back(index);
                }
            }
        }
        return dp[(1<<(req_skills.size()))-1];
    }
};