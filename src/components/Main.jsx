import React from "react";
import { ChevronDown } from "lucide-react";
import {
  SiReact,
  SiGmail,
  SiLinkedin,
  SiNextdotjs,
  SiJavascript,
  SiMui,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";

const Main = () => {
  const skills = [
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "React Native", icon: <FaMobileAlt className="text-cyan-300" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Material UI", icon: <SiMui className="text-blue-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-x-hidden">
      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="fixed top-20 right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="fixed bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 z-0"></div>

      {/* ── HERO ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-4xl mx-auto">

          {/* Name — fluid clamp so it never wraps on any screen */}
          <h1
            className="font-bold mt-4 .5 mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight whitespace-nowrap"
            style={{ fontSize: "clamp(1.5rem, 6vw, 5.6rem)" }}
          >
            Vigneshwaran K
          </h1>

          {/* Subtitle — fluid */}
          <p
            className="text-gray-200 mb-8 sm:mb-12 font-light tracking-wide px-2"
            style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.875rem)" }}
          >
            React Frontend Developer | Focused on User Experience
          </p>

          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-16 px-2">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full text-white font-medium hover:bg-white/25 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ fontSize: "clamp(0.75rem, 1.8vw, 1rem)" }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center">
            <div className="animate-bounce">
              <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white/80 hover:text-white transition-colors duration-300" />
            </div>
            <div className="mt-2 text-white/60 font-light" style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}>
              Scroll to explore
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT ME ── */}
      <div className="relative z-10 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-md text-white text-center">
        <h2
          className="font-bold mb-5 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-1"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
        >
          About Me
        </h2>
        <p
          className="max-w-3xl mx-auto leading-relaxed text-white font-light"
          style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
        >
          Software Developer with{" "}
          <span className="text-blue-300 font-medium">
            2.4 years of overall IT experience
          </span>{" "}
          and{" "}
          <span className="text-purple-300 font-medium">
            1.5 years of hands-on development experience
          </span>{" "}
          in React.js, React Native, Node.js, MongoDB, Express.js, JavaScript,
          and Tailwind CSS. Skilled in building responsive web and mobile
          applications, REST APIs, and scalable user interfaces with a strong
          focus on performance, usability, and user experience. Experienced in
          developing ERP systems, e-learning platforms, and real-time
          applications while collaborating in agile development environments.
          Passionate about modern frontend and full-stack development,
          continuously learning and building innovative digital solutions.
        </p>
      </div>

      {/* ── PROJECTS ── */}
      <div className="relative z-10 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-md text-white text-center">
        {/* FIX: overflow-visible + pb-2 so descenders (g, p, y) never clip */}
        <h2
          className="font-bold mb-8 sm:mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent overflow-visible pb-2 leading-[1.3]"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
        >
          Projects &amp; Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto text-left">

          {/* Vconstech Website */}
          <div className="p-5 sm:p-6 bg-white/[0.08] border border-white/15 rounded-xl hover:scale-[1.02] hover:bg-white/[0.12] transition-all duration-300">
            <h3
              className="font-semibold text-white leading-snug mb-2"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              Vconstech – ERP Software Landing Page
            </h3>
            <p
              className="text-white/90 mb-3 leading-relaxed"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
            >
              Marketing and product website for Vconstech's construction ERP
              software, featuring a modern UI, integrated payment via Razorpay,
              and contact/enquiry flow through EmailJS.
            </p>
            <p
              className="text-sky-300 mb-3 font-medium"
              style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
            >
              React + Vite · Tailwind CSS · Razorpay · EmailJS
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-2.5 py-1 rounded-full font-medium">
                🟢 Live
              </span>
              <a
                href="https://vconstech.in/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 hover:underline font-medium transition-colors"
                style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
              >
                vconstech.in ↗
              </a>
            </div>
          </div>

          {/* VSoft Solution */}
          <div className="p-5 sm:p-6 bg-white/[0.08] border border-white/15 rounded-xl hover:scale-[1.02] hover:bg-white/[0.12] transition-all duration-300">
            <h3
              className="font-semibold text-white mb-2 leading-snug"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              VSoft Solution – Company Website
            </h3>
            <p
              className="text-white/90 mb-3 leading-relaxed"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
            >
              Corporate branding website for VSoft Solution, showcasing services
              and team with a polished Material UI design system and EmailJS for
              seamless lead capture.
            </p>
            <p
              className="text-sky-300 mb-3 font-medium"
              style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
            >
              React · Material UI · EmailJS
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-2.5 py-1 rounded-full font-medium">
                🟢 Live
              </span>
              <a
                href="https://thevsoft.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 hover:underline font-medium transition-colors"
                style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
              >
                thevsoft.com ↗
              </a>
            </div>
          </div>

          {/* Vconstech ERP */}
          <div className="p-5 sm:p-6 bg-white/[0.08] border border-white/15 rounded-xl hover:scale-[1.02] hover:bg-white/[0.12] transition-all duration-300">
            <h3
              className="font-semibold text-white mb-2 leading-snug"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              Vconstech ERP – Construction Management
            </h3>
            <p
              className="text-white/90 mb-3 leading-relaxed"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
            >
              Full-scale ERP platform for construction companies, handling
              project tracking, resource allocation, and reporting - secured
              with JWT authentication and a Supabase backend.
            </p>
            <p
              className="text-sky-300 mb-3 font-medium"
              style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
            >
              React · Tailwind CSS · Node.js · Supabase · JWT
            </p>
            <span className="text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2.5 py-1 rounded-full font-medium">
              🟠 In Production
            </span>
          </div>

          {/* Hora Token Booking */}
          <div className="p-5 sm:p-6 bg-white/[0.08] border border-white/15 rounded-xl hover:scale-[1.02] hover:bg-white/[0.12] transition-all duration-300">
            <h3
              className="font-semibold text-white mb-2 leading-snug"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              Hora – Hospital Token Booking App
            </h3>
            <p
              className="text-white/90 mb-3 leading-relaxed"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
            >
              Mobile-first slot and token booking app for hospitals, allowing
              patients to schedule appointments and pay via Razorpay, backed by
              a secure Node + Supabase stack.
            </p>
            <p
              className="text-sky-300 mb-3 font-medium"
              style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
            >
              React Native · Razorpay · Node.js · Supabase · JWT
            </p>
            <span className="text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2.5 py-1 rounded-full font-medium">
              🟠 In Production
            </span>
          </div>

        </div>
      </div>

      {/* ── CERTIFICATIONS ── */}
      <section
        id="certifications"
        className="relative z-10 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-md text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent overflow-visible pb-2 leading-[1.3]"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
          >
            Certifications
          </h2>
          <ul className="space-y-6 text-white">
            <li className="bg-white/10 p-4 sm:p-5 rounded-lg shadow-md hover:bg-white/20 transition-all duration-300 text-left sm:text-center">
              <strong
                className="text-white block mb-1"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
              >
                Certification of Internship in Frontend Development
              </strong>
              <span
                className="text-gray-200"
                style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
              >
                Minerva Softs, Chennai -{" "}
                <span className="italic text-purple-300">
                  August 2024 to October 2024 (3 months)
                </span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── RESUME ── */}
      <div className="relative z-10 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-md text-white text-center">
        <h2
          className="font-bold mb-5 sm:mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent overflow-visible pb-2 leading-[1.3]"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
        >
          Download My Resume
        </h2>
        <p
          className="max-w-xl mx-auto mb-6 text-gray-200 font-light px-2"
          style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
        >
          Please find the resume by clicking below.
        </p>
        <a
          href="/Vigneshwaran%20CV.pdf"
          download
          className="inline-block px-7 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)" }}
        >
          Download Resume
        </a>
      </div>

      {/* ── CONTACT ── */}
      <section className="relative z-10 text-center py-14 sm:py-20 px-4 sm:px-6 bg-slate-950">
        <h2
          className="font-bold mb-3 sm:mb-4 text-white"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
        >
          Get in Touch
        </h2>
        <p
          className="text-gray-300 mb-10 sm:mb-12 px-2"
          style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
        >
          Feel free to connect for collaborations or opportunities!
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5 sm:gap-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <SiGmail className="text-red-400 text-xl flex-shrink-0" />
            <a
              href="mailto:vigneshwaran274mail@gmail.com"
              className="text-gray-100 hover:text-white hover:underline break-all"
              style={{ fontSize: "clamp(0.78rem, 1.8vw, 1rem)" }}
            >
              vigneshwaran274mail@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-400 text-lg flex-shrink-0" />
            <a
              href="tel:9489370083"
              className="text-gray-100 hover:text-white hover:underline"
              style={{ fontSize: "clamp(0.78rem, 1.8vw, 1rem)" }}
            >
              +91 94893 70083
            </a>
          </div>
          <div className="flex items-center gap-3">
            <SiGithub className="text-gray-200 text-xl flex-shrink-0" />
            <a
              href="https://github.com/Vigneshkarthik2729"
              target="_blank"
              className="text-gray-100 hover:text-white hover:underline"
              style={{ fontSize: "clamp(0.78rem, 1.8vw, 1rem)" }}
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-3">
            <SiLinkedin className="text-blue-400 text-xl flex-shrink-0" />
            <a
              href="https://www.linkedin.com/in/vigneshwaran-k-29a502215"
              target="_blank"
              className="text-gray-100 hover:text-white hover:underline"
              style={{ fontSize: "clamp(0.78rem, 1.8vw, 1rem)" }}
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Floating ping elements */}
      <div className="fixed top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping z-5"></div>
      <div className="fixed top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500 z-5"></div>
      <div className="fixed bottom-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000 z-5"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Main;