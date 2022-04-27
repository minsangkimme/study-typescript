{
    function checkNotNullBad(arg: number | null) {
        if (arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    function checkNotNull<T>(arg: T | null): T {
          if (arg == null) {
            throw new Error('not valid number!');
        }

        return arg;
    }

    const result: number = checkNotNull(123);
    const result2: boolean = checkNotNull(false);
}