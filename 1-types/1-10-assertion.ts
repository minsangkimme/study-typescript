{
    /**
     * Type Assertions π© 
     * λ΄κ° μ λ§μ λ§ 100% μ₯λ΄ν λ νμμ νμ νκ³  μΊμ€ννλ€.
     */
    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //π¨

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!; // μ λμ λ μ«μλ°°μ΄μ λ°λλ€.
    numbers.push(2); //π¨
    // !λ μ λμ λ undefinedλ null μ΄ μλμΌλΌκ³  νμ νλ λ¬Έλ²
    // μ λμ μΌλ‘ κ°μ΄ μλ€κ³  νμ ν  λ ! λ₯Ό λΆμ¬μ νμ νλ€. ? μ΅μλ μ²΄μ΄λμ΄λ λ°λλλ μλ―Έ

    // ! μ’μμ 100% μνμΌ λ μ¬μ©ν¨ κ·Έ μΈλ νΌν΄μ μ¬μ©νλκ² μ’λ€.
    const button = document.querySelector('class')!;    
}