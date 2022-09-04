
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


// the time complexty : O(n);
// space complexty : O(1)
const targetList = (head , target)=>{
    if(head === target) return true;
    let current = head;
    while(current.val !== target){
        if(current.next === null) return false ;
        current = current.next;
    }
    if(current.val === target) return true;


}
console.log(targetList(a , "F")); // false ;


// using recursive way 
// timecomplexty : O(N);
// space complexty : O(n)
const targetList2 = (head , target)=>{
    if(head === null) return false ;
    if(head.val === target) return true;
    return targetList2(head.next , target);
}
console.log(targetList2(a , "C")); // true ;