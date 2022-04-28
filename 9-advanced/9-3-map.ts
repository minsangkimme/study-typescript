{
  // mapped type을 활용하여 재활용 가능한 타입을 만들어 보자.
  // 기존형태를 활용해서 재사용 하는 타입

  type Video = {
    title: string;
    detail: string;
  };

    // type 안에서 [] 인덱스 기호를 사용하면 for...in 처럼 반복할 수 있다.
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type VideoReadOnly<T> = {
    readonly [P in keyof T]?: T[P];
  };

  const video: Optional<Video> = {
    title: 'zxc',
    detail: 'xzc',
  };

  video.title = 'xxx';

  const video2: VideoReadOnly<Video> = {
    title: 'xxx',
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    title: null,
    detail: null,
  };
}
