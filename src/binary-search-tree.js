const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.r = null;
  }

  root() {
    return this.r;
  }

  add(data) {
    let n = new Node(data);
    function insertNode(n1, n2) {
      if(n1.data > n2.data) {
        if(n1.left !== null) {
          insertNode(n1.left, n2);
        }
        else {
          n1.left = n2;
        }
      }
      if(n1.data < n2.data) {
        if(n1.right !== null) {
          insertNode(n1.right, n2);
        }
        else {
          n1.right = n2;
        }
      }
      if(n1.data == n2.data) {
        return;
      }
    }

    if(this.root()==null) {
      this.r = n;
    }
    else {
      insertNode(this.r, n);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    function findNode(n, d) {
      if(n.data == d) {
        return n;
      }
      if(n.data > d) {
        if(n.left !== null) {
          return findNode(n.left, d);
        }
        else {
          return null;
        }
      }
      if(n.data < d) {
        if(n.right !== null) {
          return findNode(n.right, d);
        }
        else {
          return null;
        }
      }
    }
    return findNode(this.root(), data);
  }

  remove(data) {
   /* let child = this.find(data);
    let root = this.root();
    function findParent(p,n) {
      if(p.left == n || p.right == n) {
        return p;
      }
      if(p.data > n.data) {
          return findParent(p.left, n);
      }
      if(p.data < n.data) {
          return findParent(p.right, n);
      }
    }
    //if deleting Node is root
    if(child == root){
      if(child.left == null && child.right == null) {
        this.r = null;
      }
      if(child.left == null && child.right !== null) {
        this.r = child.right;
      }

      if(child.left !== null && child.right == null) {
        this.r = child.left;
      }

      if(child.left !== null && child.right !== null) {
        let minRight = child.right;
        while(minRight.left !== null) {
          minRight = minRight.left;
        }
        if(minRight == child.right) {
          child.right.left = this.r.left;
          this.r = child.right;
        }
        else{
          let parent = findParent(this.root(),minRight);
          minRight.left = this.r.left;
          minRight.right = this.r.right;
          this.r = minRight;
          if(parent.left == minRight) {
            parent.left = null;
          }
          else {
            parent.right = null;
          }
        }
      }
    }
    //if deleting Node is NOT root
    if(child && child !== root){
      let parent = findParent(this.root(),child);
      if(child.left == null && child.right == null) {
        if(parent.left == child) {
          parent.left = null;
        }
        else {
          parent.right = null;
        }
      }

      if(child.left == null && child.right !== null) {
        if(parent.left == child) {
          parent.left = child.right;
        }
        else {
          parent.right = child.right;
        }
      }

      if(child.left !== null && child.right == null) {
        if(parent.left == child) {
          parent.left = child.left;
        }
        else {
          parent.right = child.left;
        }
      }

      if(child.left !== null && child.right !== null) {
        let minRight = child.right;
        while(minRight.left !== null) {
          minRight = minRight.left;
        }
        if(parent.left == child) {
          parent.left = minRight;
        }
        else {
          parent.right = minRight;
        }
        this.remove(minRight.data);
      }
    }*/
  }

  min() {
    let res = this.root();
    while(res.left !== null) {
      res = res.left;
    }
    return res.data;
  }

  max() {
    let res = this.root();
    while(res.right !== null) {
      res = res.right;
    }
    return res.data;
  }
}

module.exports = {
  BinarySearchTree
};