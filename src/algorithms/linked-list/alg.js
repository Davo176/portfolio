class Node {
    constructor(content){
        this.next_node = null;
        this.content = content;
    }

    setNextNode(content){
        this.next_node = new Node(content);
    }

}

class LinkedList {
    constructor(content){
        this.head = new Node(content);
    }

    addNode(content){
        let next_node = this.head;
        while (next_node.next_node!==null){
            next_node = next_node.next_node;
        }
        next_node.setNextNode(content);
    }

    print(){
        let next_node=this.head;
        while (next_node!==null){
            console.log(next_node.content);
            next_node=next_node.next_node;
        }
        
    }
}
export {LinkedList};