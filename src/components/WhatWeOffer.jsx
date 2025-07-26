import {
  ChalkboardTeacher,
  Video,
  Clock,
  User,
} from 'lucide-react';

const offerings = [
  {
    icon: <ChalkboardTeacher className="h-8 w-8 text-black" />,
    title: "Classroom",
    subtitle: "SAT Coaching",
  },
  {
    icon: <Video className="h-8 w-8 text-black" />,
    title: "Live Online",
    subtitle: "SAT Prep",
  },
  {
    icon: <Clock className="h-8 w-8 text-black" />,
    title: "Self-Paced",
    subtitle: "SAT Course",
  },
  {
    icon: <User className="h-8 w-8 text-black" />,
    title: "Private",
    subtitle: "SAT Tutor",
  },
];

const  WhatWeOffer=()=> {
  return (
    <section className="bg-gray-100 py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 md:mb-0 w-full md:w-1/5">
          What we offer
        </h2>

        <div className="grid grid-cols-2 md:flex gap-6 w-full md:w-4/5">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              {item.icon}
              <h3 className="text-green-600 font-bold">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default WhatWeOffer;
