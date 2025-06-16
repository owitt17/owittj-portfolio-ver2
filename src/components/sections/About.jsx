
import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const programmingSkills = ["React", "JavaScript", "TypeScript", "CSS", "C++", "HTML", "C#", "Python", "PHP", "Lua", ];

    const softwareSkills = ["Blender", "Aseprite", "Unity", "Godot", "Visual Studio Code", "Git", "Figma", "OBS Studio", "AWS"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Hello, you already know my name, Owitt. I don't have much projects, but I will continue to work on them 
                        and improve myself with new technologies. I work in fast paced environments, making sure I deliver high quality work on time.
                        I also enjoy my hobbies such as playing games and listening to music.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">Frontend</h3>

                            <div className="flex flex-wrap gap-2">
                                {programmingSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                        </div>

                         <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">Software</h3>

                            <div className="flex flex-wrap gap-2">
                                {softwareSkills.map((tech, key) => (
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
                                Relevant Coursework : Data Structures, Object-Oriented Programming, Special Topics in Computer Science
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-vold mb-4"> Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Intern at Axrail Sdn Bhd [March 2025 - June 2025] </h4>
                                <p> Develop and testing Retail management system and testing AI-related project modules. </p>
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