import React from 'react';
import { 
  HiClock,
  HiUserGroup,
  HiWrenchScrewdriver,
  HiCurrencyDollar,
  HiHandThumbUp,
  HiHeart,
  HiDocumentText,
  HiShieldCheck 
} from "react-icons/hi2";

const Whychose = () => {
  const features = [
    {
      icon: <HiClock className="w-16 h-16 text-blue-900" />,
      title: "Fast & Reliable",
      text: "24/7 emergency plumbing service, ensuring quick response times to prevent further damage"
    },
    {
      icon: <HiUserGroup className="w-16 h-16 text-blue-900" />,
      title: "Certified Experts",
      text: "Our team consists of licensed and experienced professionals who bring years of expertise to every job"
    },
    {
      icon: <HiWrenchScrewdriver className="w-16 h-16 text-blue-900" />,
      title: "Latest Technology",
      text: "We use modern tools and technology for accurate diagnostics and high-quality repairs"
    },
    {
      icon: <HiCurrencyDollar className="w-16 h-16 text-blue-900" />,
      title: "Transparent Pricing",
      text: "No hidden costs—just clear, upfront pricing so you know exactly what to expect"
    },
    {
      icon: <HiHandThumbUp className="w-16 h-16 text-blue-900" />,
      title: "Guaranteed Satisfaction",
      text: "Our job isn't done until you're 100% satisfied with our service"
    },
    {
      icon: <HiHeart className="w-16 h-16 text-blue-900" />,
      title: "Locally Trusted",
      text: "We provide free estimates before any work begins, so you can plan your budget confidently"
    },
    {
      icon: <HiDocumentText className="w-16 h-16 text-blue-900" />,
      title: "Upfront Estimates",
      text: "We provide free estimates before any work begins, so you can plan your budget confidently"
    },
    {
      icon: <HiShieldCheck className="w-16 h-16 text-blue-900" />,
      title: "Long-Term Warranties",
      text: "Enjoy peace of mind with service warranties and guaranteed workmanship"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 border-t-2 border-gray-300" />
          <h2 className="font-bold text-lg uppercase tracking-widest text-gray-400">
            WHY CHOOSE US ?
          </h2>
          <div className="w-12 border-t-2 border-gray-300" />
        </div>
        <h1 className="text-4xl font-bold text-[#4A4A4A] mb-6">
          Reliable, Professional, and Always There When You Need Us
        </h1>
        <p className="text-l text-gray-400 max-w-3xl mx-auto">
          We take pride in delivering top-quality plumbing solutions with a commitment to efficiency, transparency, and customer satisfaction. Here's why homeowners and businesses trust us!
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6  bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4 justify-center flex ">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold justify-center flex text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 ml-4 ">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychose;
