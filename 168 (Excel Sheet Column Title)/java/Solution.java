class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder res = new StringBuilder();
        while (columnNumber>0){
            columnNumber--;
            res.insert(0,(char)(65+columnNumber%26));
            columnNumber/=26;
        }
        return res.toString();
    }
}