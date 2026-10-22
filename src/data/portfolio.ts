export interface ShowItem {
  title: string;
  channel: string;
  dur: string;
  img: string;
  loop: string;
  link: string;
}

export interface TestimonialItem {
  name: string;
  ig: string;
  prev: string;
  full: string;
  poster: string;
}

export const SHOWS: ShowItem[] = [
  {
    title: "Become a Digital Nomad in 2025",
    channel: "Pavlo",
    dur: "16:53",
    img: "/img/work_qMq3I7fVEo0.jpg",
    loop: "/img/loop_qMq3I7fVEo0.mp4",
    link: "https://www.youtube.com/watch?v=qMq3I7fVEo0"
  },
  {
    title: "Bad Decisions in Rio de Janeiro, Brazil",
    channel: "Pavlo",
    dur: "15:02",
    img: "/img/work_ha92KLKeBCo.jpg",
    loop: "/img/loop_ha92KLKeBCo.mp4",
    link: "https://www.youtube.com/watch?v=ha92KLKeBCo"
  },
  {
    title: "Inside Project Nexus and the Citadel AI Team",
    channel: "ACRE Partner",
    dur: "23:03",
    img: "/img/work_tfvrw5VGGOM.jpg",
    loop: "/img/loop_tfvrw5VGGOM.mp4",
    link: "https://www.youtube.com/watch?v=tfvrw5VGGOM"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Jared Curry",
    ig: "officialjaredcurry",
    prev: "/img/testi_jared_prev.mp4",
    full: "/img/testi_jared.mp4",
    poster: "/img/testi_jared.jpg"
  },
  {
    name: "Pavlo",
    ig: "pavels_life",
    prev: "/img/testi_pavel_prev.mp4",
    full: "/img/testi_pavel.mp4",
    poster: "/img/testi_pavel.jpg"
  }
];
