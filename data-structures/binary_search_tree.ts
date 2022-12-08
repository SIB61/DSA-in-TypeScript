class BstNode {
  constructor(public value: number, public left?: BstNode, public right?: BstNode) { }
}

class BinarySearchTree {

  constructor(private root?: BstNode) { }

  insert(value: number) {
    this.root = this.insertNode(this.root, value)
  }
  remove(value: number) {
    this.root = this.removeNode(this.root, value)
  }
  search(value:number){
    this.searchNode(this.root,value)  
  }
  private searchNode(current: BstNode|undefined,value:number){
    if(!current) {
      console.log(value," not found")
      return
    }
    if(value>current.value){
      this.searchNode(current.right,value) 
    }
    else if(value<current.value){
      this.searchNode(current.left,value) 
    }
    else{
      console.log(value," found")
      return
    }

  }




  private insertNode(current: BstNode | undefined, value: number): BstNode | undefined {
    if (!current) {
      return new BstNode(value)
    }
    if (value < current.value) {
      current.left = this.insertNode(current.left, value)
    }
    else {
      current.right = this.insertNode(current.right, value)
    }
    return current
  }


  private removeNode(current: BstNode | undefined, value: number): BstNode | undefined {
    if (!current) return

    if (value < current.value) {
      current.left = this.removeNode(current.left, value)
      return current
    }
    else if (value > current.value) {
      current.right = this.removeNode(current.right, value)
      return current
    }
    else {
      if (!current.right && !current.left) {
        return
      }
      else if (!current.right) {
        return current.left
      }
      else if (!current.left) {
        return current.right
      }
      else {
        let max = this.findMax(current.left)
        current.value = max.value
        current.left = this.removeNode(current.left, max.value)
        return current
      }
    }
  }

  private findMax(current: BstNode): BstNode {
    if (!current.right) return current
    else return this.findMax(current.right)
  }

}
const bst = new BinarySearchTree()
bst.insert(4)
bst.insert(2)
bst.insert(3)
bst.insert(5)
bst.insert(6)
bst.insert(1)
bst.remove(2)
bst.search(2)
bst.search(1)
console.log(bst)
