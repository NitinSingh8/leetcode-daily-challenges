class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj_list = [[] for _ in range(numCourses)]
        degree = [0 for _ in range(numCourses)]

        for c1,c2 in prerequisites:
            adj_list[c2].append(c1)
            degree[c1]+=1
        
        validCourses = [val for val in range(numCourses) if degree[val]==0]

        isVisited = set(validCourses)

        while validCourses:
            course = validCourses.pop()

            for child in adj_list[course]:
                degree[child]-=1
                if degree[child]==0:
                    isVisited.add(child)
                    validCourses.append(child)

        return len(isVisited)==numCourses