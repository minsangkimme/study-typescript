{

  // record 는 키와 벨류의 타입을 각각의 타입으로 지정할 수 있게 한다.
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: ' About ' },
    contact: { title: 'Contact' },
  };
}
