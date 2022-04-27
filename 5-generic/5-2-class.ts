{
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R> {
        constructor(private leftValue: L, private rightValue: R) { }
        
        left(): L {
            return this.leftValue;
        }

        right(): R {
            return this.rightValue;
        }
    }

    const result = new SimpleEither({name: 'haha'}, 6);
    console.log(result.left());
    console.log(result.right());
}