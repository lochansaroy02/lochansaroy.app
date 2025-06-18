
const page = () => {


    const data = [{
        company: "TCS",
        role: "full stack Developer",
        join: {
            from: "NOV 2024",
            to: "Jan 2024"
        },
        goals: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe aperiam perferendis itaque fuga assumenda modi facilis adipisci molestias, sunt nihil fugit unde cupiditate ullam, rerum deserunt, esse temporibus reiciendis.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe aperiam perferendis itaque fuga assumenda modi facilis adipisci molestias, sunt nihil fugit unde cupiditate ullam, rerum deserunt, esse temporibus reiciendis.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe aperiam perferendis itaque fuga assumenda modi facilis adipisci molestias, sunt nihil fugit unde cupiditate ullam, rerum deserunt, esse temporibus reiciendis.",

        ]
    }]

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl">Internships</h1>
            <div className="w-full mt-8  flex  justify-center">
                {
                    data.map((item, index) => (
                        <div key={index} className="w-3/4">
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
                                {
                                    item.goals.map((item, index) => (
                                        <div>
                                            <li className="text-sm text-extralight text-justify  text-gray-300">{item}</li>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default page;