import { Link } from "react-router-dom"

const LinkLogo = ({ urlWebProyect }) => {

    return (
        <div className=" flex ">
            <Link to={urlWebProyect} >
                <div className="GitHub flex text-gray-950  hover:text-blue-600 hover:italic gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>

                    {/*  <p className="underline  hover:text-blue-600">{nameProyect}</p> */}
                </div>
            </Link>
        </div>

    )
}

export default LinkLogo