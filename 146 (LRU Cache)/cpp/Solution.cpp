class DoubleNode{
    public:
    int key, val;
    DoubleNode* next;
    DoubleNode* prev;
    DoubleNode(int key, int val){
        this->key = key;
        this->val = val;
        prev= nullptr;
        next = nullptr;
    }
};


class LRUCache {
public:
    int capacity;
    unordered_map<int, DoubleNode*> dic;
    DoubleNode* left;
    DoubleNode* right;
    LRUCache(int capacity) {
        this->capacity = capacity;
        left = new DoubleNode(-1,-1);
        right = new DoubleNode(-1,-1);
        left->next = right;
        right->prev = left;
    }
    
    int get(int key) {
        if (dic.find(key)!=dic.end()){
            remove(dic[key]);
            insert(dic[key]);
            return dic[key]->val;
        }
        return -1;
    }

    
    void put(int key, int value) {
        if (dic.find(key)!= dic.end()){
            remove(dic[key]);
        }
        dic[key] = new DoubleNode(key,value);
        insert(dic[key]);

        if (dic.size()>capacity){
            DoubleNode* lru = left->next;
            remove(lru);
            dic.erase(lru->key);
        }
    }

    void remove(DoubleNode* node){
        DoubleNode* prevnode = node->prev;
        DoubleNode* nextnode = node->next;
        prevnode->next = nextnode;
        nextnode->prev = prevnode;
    }

    void insert(DoubleNode* node){
        DoubleNode* prevnode = right->prev;
        DoubleNode* nextnode=  right;
        prevnode->next = node;
        node->prev=  prevnode;
        node->next = nextnode;
        nextnode->prev = node;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */