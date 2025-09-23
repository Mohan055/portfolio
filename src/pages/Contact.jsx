import React from 'react';

const Contact = () => {
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
    <div className="min-h-screen bg-transparent from-emerald-50/80 to-green-100/80 dark:from-zinc-900/90 dark:to-zinc-800/90 py-12 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Mohan Kumar
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            Bangalore Karnataka | 8073284924 | mohankumar96k@gmail.com
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.github.com/Mohan055" className="text-green-600 dark:text-green-400 hover:underline">GitHub</a>
            <span className="text-zinc-400">•</span>
            <a href="https://www.linkedin.com/in/mohan-kumar-07650a293" className="text-green-600 dark:text-green-400 hover:underline">LinkedIn</a>
            <span className="text-zinc-400">•</span>
            <a onClick={handleDownload} className="text-green-600 dark:text-green-400 hover:underline">Resume</a>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Column - About & Skills */}
          <div className="md:col-span-2 space-y-8">
            {/* About Card */}
            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30 dark:border-zinc-700/30">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                About Me
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                Enthusiastic Python and MERN stack developer with a passion for crafting high-quality code.
                Proficient in database management, user authentication, and developing intricate web applications.
                Ready to contribute skills to diverse projects as a quick learner and adept problem-solver.
              </p>
            </div>

            {/* Skills Card */}
            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30 dark:border-zinc-700/30">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Technical Skills
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-zinc-800 dark:text-zinc-200">Programming Languages:</h3>
                  <p className="text-zinc-700 dark:text-zinc-300">Python</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 dark:text-zinc-200">Web Development:</h3>
                  <p className="text-zinc-700 dark:text-zinc-300">HTML, CSS, JavaScript, Bootstrap, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 dark:text-zinc-200">Database:</h3>
                  <p className="text-zinc-700 dark:text-zinc-300">SQL, PostgreSQL, MongoDB Atlas</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 dark:text-zinc-200">Frameworks:</h3>
                  <p className="text-zinc-700 dark:text-zinc-300">Django, React JS, Node.js - Express.Js</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30 dark:border-zinc-700/30">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-800 dark:text-zinc-200">Bachelor in Computer Science</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">December 2019</p>
                  <p className="text-zinc-700 dark:text-zinc-300">Vijaya Degree College, Bangalore, KA</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 dark:text-zinc-200">PUC in Commerce (GEBA)</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">May 2015</p>
                  <p className="text-zinc-700 dark:text-zinc-300">Yediyur Pre-University College, Bangalore, KA</p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30 dark:border-zinc-700/30">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Full Stack Web Development Internship, Sash Info Services PVT. LTD., April 2024 - July 2024</li>
                <li>Python Full Stack, Pyspider Basavanagudi, February 2023 - November 2023</li>
                <li>Python & Django-Framework, Infosys Springboard, May 2023 - July 2023</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="md:col-span-3">
            {/* Experience Card */}
            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30 dark:border-zinc-700/30">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Experience
              </h2>

              <div className="space-y-8">
                {/* Experience 1 */}
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-green-500 before:rounded-full before:ring-4 before:ring-green-200/50 before:dark:ring-green-900/30">
                  <div className="absolute left-2.5 top-6 bottom-0 w-0.5 bg-green-200/50 dark:bg-green-900/30"></div>

                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Web Application Developer</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">SLG Digi Pvt Ltd., Bangalore (Remote)</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">January 2025 - Current</p>

                  <ul className="mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Designed and developed responsive pages, including the landing page for the online trading course website
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Developed and maintained an online trading course platform with CRM for three employee roles
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Built user and admin dashboards with secure authentication and role-based permissions
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Integrated Razorpay for seamless payments
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Implemented modules for attendance tracking, leave management, document and course management
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full mr-2">
                      MERN Stack
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full mr-2">
                      MongoDB Atlas
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                      Razorpay
                    </span>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-green-200/50 dark:bg-green-900/30"></div>

                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Full Stack Web Development</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">Contracted, Remote</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">October 2023 - December 2024</p>

                  <ul className="mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Successfully developed and deployed websites and applications using WordPress, Django, and React
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Built interactive user interfaces with React while ensuring seamless integration with back-end APIs
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full mr-2">
                      Django
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full mr-2">
                      React
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                      WordPress
                    </span>
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="relative pl-8">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Full Stack Web Development Intern</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">Sash Info Services PVT. LTD., Bangalore</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">April 2024 - July 2024</p>

                  <ul className="mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Played a key role in developing the React-based application ClientCtrl
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Built and optimized RESTful APIs using Laravel framework
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full mr-2">
                      React.js
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full mr-2">
                      Laravel
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <button
              onClick={handleDownload}
              className="w-full mt-8 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;