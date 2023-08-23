class Solution {
    public String reorganizeString(String s) {
        int[] freq = new int[26];

        for(char ch : s.toCharArray()){
            freq[ch-'a']+=1;
        }

        int maxfreq = 0, letter = 0;
        
        for(int i =0 ;i<26;i++){
            if (freq[i]>maxfreq){
                maxfreq = freq[i];
                letter = i;
            }
        }

        if (maxfreq > (s.length()+1)/2) return "";

        char[] res=  new char[s.length()];
        int idx = 0;
        while (freq[letter]>0){
            res[idx] = (char) (letter + 97);
            idx+=2;
            freq[letter]-=1;
        }

        for(int i =0 ;i<26;i++){
            while (freq[i]>0){
                if (idx>=s.length()) idx=1;
                res[idx] = (char)(i+97);
                idx+=2;
                freq[i]-=1;
            }
        }

        return new String(res);
    }

}