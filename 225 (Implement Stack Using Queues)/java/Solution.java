class MyStack {

    Queue<Integer> q;
    int peek = -1;
    public MyStack() {
        q = new LinkedList<>();
    }
    
    public void push(int x) {
        peek = x;
        q.add(x);
    }
    
    public int pop() {
        int n = q.size();
        for(int i =0;i<n-1;i++){
            peek = q.poll();
            q.add(peek);
        }
        return q.poll();
    }
    
    public int top() {
        return peek;
    }
    
    public boolean empty() {
        return q.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */