
import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const frontendSkills = ["React", "JavaScript", "TypeScript", "CSS", "SASS", "HTML", "Tailwind CSS"];

    const backendSkills = ["Node.js", "Express.js", "GraphQL", "TypeScript", "MongoDB", "MySQL", "PostgreSQL"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Hi, I'm Owitt. I am a passionate frontend developer with a love for innovative and user-friendly designs. 
                        I have worked on various projects, from small websites to complex web applications, and I 
                        strive to create experiences that are both visually appealing and functional.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">Frontend</h3>

                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                        </div>

                         <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">Backend</h3>

                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="grid gird-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-vold mb-4"> Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Multimedia in Computer Science </strong> - Universiti Teknologi MARA (2023 - 2025)
                            </li>
                            <li>
                                Relevant Coursework : Data Structures, Web Development, Cloud Computing...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-vold mb-4"> Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Intern at Axrail Sdn Bhd [March 2025 - June 2025] </h4>
                                <p> Contributed to updating and testing front-end projects & AI-related features. </p>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Intern at Sabah Net Sdn Bhd [Sept 2023 - Feb 2023] </h4>
                                <p> Install and maintained network provider racks, relocated access points, executed wite wiring tasks as part of a team. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}