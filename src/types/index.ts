export interface Quote {
  content: string;
  author: string;
}

export interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

export interface ApiError {
  error: string;
}