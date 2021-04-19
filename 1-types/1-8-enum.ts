{
    /**
     * Enum ?
     * Enum은 여러가지 관련된 상수 값들을 한곳에 모아서 정의할 수 있게 도와주는 타입
     */
        //  Javascript에서 Enum타입이 존재하지 않기 때문에 ,Typescript에서 자체제공하는 타입 중 하나다.
        //  Javascript
        const MAX_NUM = 6;
        const MAX_STUDENT_PER_CLASS = 10;
        const MONDAY = 0;
        const TUESDAY = 1;
        const WEDNESDAY = 2;
        const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
        const dayOfToday = DAYS_ENUM.MONDAY;

        // Typescript
        //  enum으로 정의할 때 앞에글자만 대문자로 하고 뒷글자는 소문자로 해야한다.
        // 관련있는 상수 값이 있다면 enum으로 묶어서 사용하는데.. 결론은..
        // 💩 Typescript에서 enum은 가능한 사용하지 않는게 좋다...
        enum Days {
            Monday, // 0 , 1로 지정하면 1부터 시작한다. 문자열 지정도 가능 대신 문자열은 다음에 뭐가 올지 모르기 때문에 전체 지정해야함
            Tuesday, // 1
            Wednesday, // 2
            Thursday, // 3
            Friday, // 4
            Saterday, // 5
            Sunday, // 6
        }

        console.log(Days.Monday);
        let day:Days = Days.Saterday;
        day = Days.Friday;
        day = 1; // 💩 이런 경우가 가능하기 때문에 enum은 사용하지 않는게 좋다.
        console.log(day);
        // enum을 사용하게 되면 타입이 정확하게 보장되지 않는다.
        // 타입스크립트에서는 상수들을 union type을 이용해서 하는게 좋다.
        type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saaterday' | 'Sunday';
        let dayOfweek: DaysOfWeek;
        dayOfweek = "Friday";
        // 대부분은 union type 을 사용해서 상수들을 묶어서 사용 가능하다.
        // enum을 쓸 수 밖에 없는경우는 다른 모바일 클라이언트 안드로이드나 ios는 코틀린이나 스위프트 같은 언어를 이용하기 때문에
        // 이런 사용자 데이터를 JSON으로 묶어서 다시 다른 클라이언트에게 보내야 될 때, 모바일 프로그래밍에서 사용되는 네이티브 프로그래밍은 union type을 표현할 수 없기 때문에
        // 서로 이해할 수 있는 enum을 쓰지만 웹 클라이언트만 사용하고 다른 모바일 클라이언트와 의사소통할 필요 없다면 union type을 사용하는게 안정적이다.

}