class Solution {
public:

    void solve(int idx, string temp, vector<string> &res, vector<string> &arr){
        if (idx==arr.size()){
            res.push_back(temp);
            return;
        }

        for(int i = 0;i<arr[idx].size();i++){
            solve(idx+1,temp+arr[idx][i], res,arr);
        }
    }
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};

        unordered_map<char, string> dic =  {
            {'2', "abc"}, {'3', "def"}, {'4', "ghi"},
            {'5', "jkl"}, {'6', "mno"}, {'7', "pqrs"},
            {'8', "tuv"}, {'9', "wxyz"}
        };

        vector<string> arr;
        for(char ch: digits){
            arr.push_back(dic[ch]);
        }

        vector<string> res;
        solve(0,"",res,arr);
        return res;
    }
};