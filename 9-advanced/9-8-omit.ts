{
  // Omit util T 에 있는 K을 제외하고 만든다.

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'hi',
    };
  }
}
