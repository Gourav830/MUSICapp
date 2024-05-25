import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Your Musical Journey Begins Here",
    description:
      "Start your musical journey with tailored instruction that nurtures your unique talents. Our supportive environment and expert guidance ensure that your path to musical mastery is as enjoyable as it is educational.",
  },
  {
    title: "Personalized Instruction for Every Musician",
    description:
      "Experience a learning approach that adapts to your individual needs and goals. Our personalized instruction ensures that you receive the attention and guidance necessary to excel in your musical endeavors.",
  },
  {
    title: "Explore Your Musical Potential",
    description:
      "Unlock your full musical potential with our expert-led courses. Our dedicated instructors provide personalized feedback and support, helping you achieve new levels of creativity and skill.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from the best in the industry. Our instructors are not only experienced musicians but also passionate educators dedicated to helping you succeed.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Practice and learn in our state-of-the-art facilities equipped with the latest musical instruments and technology. Our environment is designed to inspire and support your musical journey.",
  },
  {
    title: "Community of Musicians",
    description:
      "Join a vibrant community of fellow musicians. Collaborate, share experiences, and grow together in a supportive and inspiring environment.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Gain real-world experience with regular performance opportunities. Showcase your skills and build confidence through live performances and recitals organized by our music school.",
  },
];

function WhyUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyUs;
