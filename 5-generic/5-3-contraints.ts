{
    interface Employee {
        pay: () => void;
    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log('full time!');
        }

        workFullTime() {

        }
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log('part time!');
        }

        workPartTime() {            
        }
    }

    //  세부적인 타입을 인자로 받아서(세부적인 파생된 자식들을 모두 다 받을 수 있지만)
    // 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    // 제네릭 제약 조건을 이용하여 해결
    function pay<T extends Employee>(employee: T): T {
        employee.pay();
        return employee;
    } 

    const foo = new FullTimeEmployee();
    const bob = new PartTimeEmployee();

    foo.workFullTime();
    bob.workPartTime();

    const fooAfterPay = pay(foo);
    const bobAfterPay = pay(bob);

    fooAfterPay.workFullTime();
    bobAfterPay.workPartTime();

    const obj = {
        name: 'bob',
        age: 20
    }

    const obj2 = {
        animal: '🦣'
    }

    // T 타입 K= T 타입(어떤 오브젝트)안에 있는 키들, 리턴값 T[K] 벨류값 리턴
    const getValue = function <T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    console.log(getValue(obj, 'name'))
    console.log(getValue(obj, 'age'))
    console.log(getValue(obj2, 'animal'))
}