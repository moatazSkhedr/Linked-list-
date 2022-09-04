



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

//recursive way  
// time complexty : O(n)
// space complexty :O(n)
const getValue = (head , index)=>{
    if(head === null) return null;
    if(index === 0) return head.val;
    return getValue(head.next , index-1)


}
console.log(getValue(a , 4));  // null ;

const getValue2 = (head , index)=>{
    let current = head ;
    let count = 0 ;
    while(current !==null) {
        if(count === index) return current.val;
        count++;
        current = current.next;
    }

}
console.log(getValue2(a , 2));  // C