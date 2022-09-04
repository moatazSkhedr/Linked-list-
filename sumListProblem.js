/*
    sum list 
    write a function sumlist , that takes in the head of linkedlist containing 
    numbers as an argument , the function should return the total sum of all values 
    in the linkedlist .
*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;


const sumList = (head)=>{
    let sum = 0 ;
    let current = head ;
    while(current !=null){
        sum =sum +current.val
        current = current.next;
    }

    return sum ;

}
console.log(sumList(a));

// using recursion  second way to solution  
const sumList2 =(head)=>{
    if(head ===null) return 0 ;
    return head.val +  sumList2(head.next)
};
console.log(sumList2(a));