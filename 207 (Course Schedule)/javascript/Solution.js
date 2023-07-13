/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let adj_list = new Array(numCourses);
  let degree = new Array(numCourses);
  for(let i =0;i<numCourses;i++){
      degree[i] = 0;
      adj_list[i] = [];
  }

  for(const courses of prerequisites){
      adj_list[courses[1]].push(courses[0]);
      degree[courses[0]]++;
  }

  let validCourses=  []
  for(let i =0 ;i<numCourses;i++){
      if(degree[i]==0){
          validCourses.push(i);
      }
  }

  for(const val of validCourses){
      for(const child of adj_list[val]){
          degree[child]--;
          if (degree[child]==0) validCourses.push(child);
      }
  }
  return validCourses.length==numCourses;
};