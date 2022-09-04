
/*
    Linked list values 
    - write a function ,linkedlistvalues , that takes in the head of a linkedlist 
    as argument.  the function should return array containing all values of the nodes in the linked list 

*/


class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("D");
const d = new Node("C");

a.next = b ;
b.next = c ;
c.next = d ;


 // first way  time O(n);

// const linkedListValue  = (head)=>{
//     let value = [];
//     let current = head ;
//     while(current !==null){
//         value.push(current.val);
//         current = current.next;
//     }
//     return value;

// }
// console.log(linkedListValue(a));   



// second way using recursive 

// const linkedListValue =(head)=>{
//     const values = [];
//     fillvalues(head , values);
//     return values ;
// }


// const fillvalues = ( head , values )=>{
//     if(head === null) return ;
//     values.push(head.val);
//     fillvalues( head.next , values ); 

// }
// console.log(linkedListValue(a));



 // second way using recursive function
const linkedListValue = (head)=>{
    const value = [];
    fillValue(head , value);
    return value 
}
const fillValue = (head , value )=>{
    if(head === null) return ;
    value.push(head.val);
    fillValue(head.next , value );
}
console.log(linkedListValue(a));