export type propNav = {
  toggle?: () => void;
  isOpen?: boolean;
};

export type propSlide = {
  slides: {
    title: string;
    discription: string;
    price: string;
    path: string;
    label: string;
    image: string;
    alt: string;
  }[];
};

export type propBtn = { primary: boolean; big: boolean };

export type propInfo = {
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  buttonLable: string;
  image: string;
  reverse: boolean;
  delay: number;
};

export type rev = { reverse: boolean };
