{
    //  요구사항
    //  1. stack 자료구조를 구현한다. LIFO
    //  2. 기본 제공되는 API를 이용하지 않고 구현한다. (배열, push, pop 등) 
    //  stack 클래스에서 push 와 pop을 구현해야함
    // 단일 연결리스트를 이용하여 구현
    

    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;        
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    class StackImpl implements Stack {        
        private _size: number = 0;
        private head?: StackNode;

        get size() {
            return this._size;
        }

        push(value: string): void {
            const node: StackNode = {value, next: this.head}
            this.head = node;
            this._size++;
        }

        pop(): string {
            if (this.head == null) {
                throw new Error('Stack is Empty!!');
            }            
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }



    

}