import Projects from "@/components/Projects";
import { freelancingProjects, jobData } from "@/utils/ProjectData";



const page = () => {




    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl ">Internships</h1>

            <div className="w-full mt-8  flex flex-col gap-8 items-center justify-center">
                {
                    jobData.map((item, index) => (
                        <div key={index} className="w-3/4 border-b pb-6  border-gray-700">
                            <div className="flex justify-between w-full">

                                <div className="flex flex-col">
                                    <h1 className="text-2xl">
                                        {item.company}
                                    </h1>
                                    <h1 className="text-lg text-gray-400">
                                        {item.role}
                                    </h1>
                                </div>
                                <div>
                                    <h1>{item.join.from} - {item.join.to} </h1>
                                </div>
                            </div>
                            <div>
                                {/* {
                                    item.goals.map((item, index) => (
                                        <div key={index}>
                                            <li className="text-sm text-extralight text-justify  text-gray-300">{item}</li>
                                        </div>
                                    ))
                                } */}
                            </div>

                            <div className="w-1/2 border-b border-slate-700">

                                <h1 className="mt-4 text-2xl  ">Projects</h1>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-4  ">
                                {
                                    item.projects.map((project, index) => (
                                        <Projects key={index} project={project} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-4 w-3/4 flex  flex-col items-center ">
                <h1 className="text-3xl">Freelancing projects</h1>
                <div className="grid grid-cols-2 gap-4 mt-2  ">
                    {
                        freelancingProjects.map((item, index) => {
                            return <Projects key={index} project={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default page;