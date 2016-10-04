// Link: https://challenge.makerpass.com/c/12f812d24d790da84b5b7eea5cea6dfc

// Description:
// Write a function linkedListIntersection that returns the node at which the intersection of two linked lists begins, or null if there is no such intersection.

// Example:

// Given the following two linked lists list1 and list2, linkedListIntersection(list1,list2) should return D as the node of intersection.

//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
// Given the following two linked lists list1 and list2, linkedListIntersection(list1,list2) should return NULL as there is no point of intersection.

//    A → B → C → D
//    X → Y → Z

// Code:
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

const linkedListIntersection = (list1,list2) => {
  //Your beautiful code here
}