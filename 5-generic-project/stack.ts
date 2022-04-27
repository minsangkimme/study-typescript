{
    //  요구사항
    // string 타입만 받을 수 있던것을 제네릭을 이용하여 개선한다.
    

    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StackNode<T>;

        get size() {
            return this._size;
        }

        push(value: T): void {
            const node = { value, next: this.head }
            this.head = node;
            this._size++;
        }

        pop(): T {
            if (this.head == null) {
                throw new Error('Stack is Empty!!');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl();
    stack.push('123')
    stack.push({ name: 'a' })
    stack.push(3)
    stack.push(false)
}