class ListNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None
        self.prev= None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.left = ListNode(-1,-1)
        self.right = ListNode(-1,-1)
        self.left.next = self.right
        self.right.prev= self.left
        self.dic = {}

    def get(self, key: int) -> int:
        if key in self.dic:
            self.remove(self.dic[key])
            self.insert(self.dic[key])
            return self.dic[key].val
        
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.dic:
            self.remove(self.dic[key])
        self.dic[key] = ListNode(key,value)
        self.insert(self.dic[key])

        if len(self.dic)>self.capacity:
            lru = self.left.next
            self.remove(lru)
            del self.dic[lru.key]

    def insert(self,node):
        prevnode, nextnode = self.right.prev, self.right
        prevnode.next = node
        node.prev = prevnode
        node.next = nextnode
        nextnode.prev= node
    
    def remove(self,node):
        prevnode, nextnode = node.prev, node.next
        prevnode.next = nextnode
        nextnode.prev = prevnode
    

        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)