import Button from "./ui/Button"

const Projects = ({ project }: any) => {
    return (
        <div >
            <div className="rounded-2xl">
                <img className="rounded-2xl" src={project.image} alt="no image" />
            </div>
            <div className="px-2">
                <h1 className="text-xl py-2 ">{project.name}</h1>
                <div className="flex gap-2 ">
                    {
                        project.techStack.map((item: any) => (
                            <Button text={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects