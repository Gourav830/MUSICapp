"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
  {
    quote:
      "The personalized lessons and support I received here have been incredible. My guitar skills have improved beyond what I thought possible!",
    name: "Jordan Smith",
    title: "Guitar Student",
  },
  {
    quote:
      "I've never felt more supported in my musical journey. The instructors' dedication to my growth as a pianist has been truly inspiring.",
    name: "Emily Brown",
    title: "Piano Student",
  },
  {
    quote:
      "The vocal coaching I received was top-notch. I've gained confidence and improved my technique in ways I never imagined.",
    name: "David Wilson",
    title: "Vocal Student",
  },
  {
    quote:
      "The mentorship and guidance I received as a violinist have been outstanding. My teacher understands my aspirations and challenges perfectly.",
    name: "Sophia Davis",
    title: "Violin Student",
  },
  {
    quote:
      "The music production courses here have been a game-changer for me. I now have a solid foundation and the confidence to pursue my dreams.",
    name: "Aiden Martinez",
    title: "Music Production Student",
  },
  {
    quote:
      "The supportive community and exceptional instruction have made a significant impact on my musical journey. I highly recommend this school!",
    name: "Olivia Garcia",
    title: "Flute Student",
  },
  {
    quote:
      "Learning to play the drums here has been an amazing experience. The instructors are knowledgeable and the facilities are excellent.",
    name: "Liam Thompson",
    title: "Drum Student",
  },
  {
    quote:
      "The comprehensive curriculum and expert teachers have greatly enhanced my understanding and performance as a cellist.",
    name: "Isabella Martinez",
    title: "Cello Student",
  },
  {
    quote:
      "I have learned so much about jazz saxophone and have improved my improvisation skills thanks to the fantastic instruction here.",
    name: "Ethan Johnson",
    title: "Saxophone Student",
  },
  {
    quote:
      "The advanced techniques and personalized feedback I received in my classical guitar lessons have been invaluable to my progress.",
    name: "Mia Lewis",
    title: "Classical Guitar Student",
  },
];

function AutoScrollCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default AutoScrollCards;
