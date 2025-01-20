"use client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Expert in developing modern web applications using cutting-edge technologies like Next.js, ensuring high performance, scalability, and seamless user experiences.",
    href: "/web-development", // Added valid href
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "Specialized in crafting modern, dynamic, and responsive front-end applications with cutting-edge technologies like Figma, ShadCN, and React, delivering seamless UI/UX experiences.",
    href: "/ui-ux", // Added valid href
  },
  {
    num: "03",
    title: "SAAS",
    description:
      "Skilled in developing modern SaaS products with integrated payment gateways, dynamic responsive applications, and scalable architectures using the latest technologies.",
    href: "/saas", // Added valid href
  },
  {
    num: "04",
    title: "Blockchain Development",
    description:
      "Expertise in blockchain development, offering secure and decentralized solutions for smart contracts, DApps, and crypto integration, leveraging cutting-edge technologies to drive innovation in Web3 and beyond.",
    href: "/blockchain-development", // Added valid href
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-semibold text-outline text-transparent
                                  group-hover:text-outline-hover transition-all duration-500
                                  "
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                                              group-hover:bg-accent transition-all duration-500
                                              justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* des */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"> </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
