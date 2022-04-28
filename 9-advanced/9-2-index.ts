{
    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name'] // string type
    const text: Name = 'bob';

    type Gender = Animal['gender']; // 'male' | 'female' type

    type Keys = keyof Animal; // 'name' | 'age'' | 'gender' 
    const key: Keys = 'age'; 

    type Person = {
      name: string;
      gender: Animal['gender']; // 'male' | 'female';
    };

    const person: Person = {
        name: 'bob',
        gender: 'male'
    }
}