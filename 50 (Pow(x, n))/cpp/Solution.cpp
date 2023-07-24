class Solution {
public:
    double myPow(double x, int num) {
        if (num<0){
            x = 1/x;
        }
        long n = labs(num);
        double res= 1.0;
        while (n!=0){
            if (n&1) res*=x;
            x*=x;
            n>>=1;
        }
        return res;
    }
};