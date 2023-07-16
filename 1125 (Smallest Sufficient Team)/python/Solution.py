class Solution:
    def smallestSufficientTeam(self, req_skills: List[str], people: List[List[str]]) -> List[int]:

        skill_map = {skill: index for index,skill in enumerate(req_skills)}
        dp = {0: []} # 001 , 010, 011 = [1,3], 100, 111 = [1,3,9]

        for index in range(len(people)):
            person_bits =  0
            for skill in people[index]:
                person_bits |= (1<<skill_map[skill])
            
            tasks = list(dp.keys())
            for i in range(len(tasks)):
                new_task = tasks[i] | person_bits # 011 | 100 = 111

                if new_task not in dp or len(dp[new_task]) > len(dp[tasks[i]])+1:
                    dp[new_task] = dp[tasks[i]]+[index]
            
        # 111
        # 3 => 1*2^(3) = 1000 -1 = 111
        return dp[(1<<len(req_skills))-1]
