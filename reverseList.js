class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// iterative way 
// timecomplexty : O(n);
// spacecomplexty : O(1);

const reverseList = (head)=>{
    let current = head ;
    let prev = null;
    while(current !==null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next ;
    }
    return prev;
}

console.log(reverseList(a));


const reverseList2 = (head ,prev = null)=>{
    if(head === null) return prev;
    const next = head.next;
    head.next =prev;
    return reverseList2(next , head);
}
console.log(reverseList2(a));