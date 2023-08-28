class MyStack {
public:

    queue<int> q;
    int peek = -1;
    MyStack() {
        
    }
    
    void push(int x) {
        peek = x;
        q.push(x);
    }
    
    int pop() {
        int n = q.size();
        for(int i = 0;i<n-1;i++){
            peek = q.front();
            q.pop();
            q.push(peek);
        }

        int res = q.front();
        q.pop();
        return res;
    }
    
    int top() {
        return peek;
    }
    
    bool empty() {
        return q.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */