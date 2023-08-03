class Solution {

    void solve(int idx, String temp, List<String> res, List<String> arr){
        if (idx==arr.size()){
            res.add(temp);
            return;
        }

        for(int i = 0;i<arr.get(idx).length();i++){
            solve(idx+1,temp+arr.get(idx).charAt(i), res,arr);
        }
    }

    public List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) return new ArrayList<>();

        Map<Character, String> dic = new HashMap<>();
        dic.put('2', "abc");
        dic.put('3', "def");
        dic.put('4', "ghi");
        dic.put('5', "jkl");
        dic.put('6', "mno");
        dic.put('7', "pqrs");
        dic.put('8', "tuv");
        dic.put('9', "wxyz");

        List<String> arr = new ArrayList<>();
        for(char ch: digits.toCharArray()){
            arr.add(dic.get(ch));
        }

        List<String> res=  new ArrayList<>();
        solve(0,"",res,arr);
        return res;
    }
}