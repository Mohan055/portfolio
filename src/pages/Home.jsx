import ProfileCard from "../components/ProfileCard";
import DecryptedText from '../components/DecryptedText';
import ShinyText from '../components/ShinyText';
import LanguageIcons from "../components/LanguageIcons";
import EducationAndCertifications from "../components/EducationAndCertifications";
import RelatedExperience from "../components/RelatedExperience";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleDownload = () => {
  const pdfPath = '/mohankumar.pdf';
  window.open(pdfPath, '_blank');

  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'mohan-kumar-resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
        
        {/* Left - Introduction */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 mt-0 md:mt-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
            <ShinyText text="Hi, I am Mohan Kumar" speed={5} />
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            <DecryptedText
              text="I’m a developer who loves bringing ideas to life on the web, passionate about crafting meaningful digital experiences that blend creativity with problem-solving. Curiosity drives me to explore new ways to make projects more engaging and impactful, while a commitment to continuous learning, adaptability, and pushing boundaries helps me deliver my best work. Guided by both creativity and curiosity, I strive to build projects that leave a lasting impression."
              speed={50}
              maxIterations={20}
              characters="!@#)$]%^[&*(?"
              className="revealed"
              encryptedClassName="encrypted"
            />
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate("/projects")} className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              View Projects
            </button>
            <button  onClick={handleDownload}  className="px-5 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <ShinyText text="Resume" speed={3} />
            </button>
          </div>
        </div>

        {/* Right - Profile Card */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <div className="max-w-sm">
            <ProfileCard
              name="Mohan Kumar"
              title="Web Developer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              // avatarUrl="profile4.png"
              avatarUrl=""
              miniAvatarUrl="src\assets\images\avatar3.png"
              showUserInfo={true}
              showBehindGradient={true}
              innerGradient={true}
              enableTilt={true}
              iconUrl="iconpattern.png"
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="mt-6 md:mt-8">
        <RelatedExperience />
      </section>

      {/* Education & Certifications */}
      <section className="mt-6 md:mt-10">
        <EducationAndCertifications />
      </section>

      {/* Skills / Languages */}
      <section className="mt-6 md:mt-10">
        <LanguageIcons />
      </section>
    </div>
  );
}
