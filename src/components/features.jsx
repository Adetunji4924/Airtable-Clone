import illustration1 from "../assets/image1.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Features = () => {
    const arrowRight = <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" size="xs" />
    return (
        <div>
            {/* first block */}
            <div className="flex justify-between items-center px-[3rem] py-[5rem]">
                <div>
                    <h1>Operationalize your critical data, move beyond rigid tools, and reimagine workflows with AI. No code required.</h1>
                </div>
                <div>
                    <img src={illustration1} alt="" />
                </div>
            </div>

            {/* second block */}
            <div className="bg-[#F8FAFC]">
                <div></div>
                <div>
                    <h1>Simple to build.<br />Intuitive to use.</h1>
                    <p>Enable those closest to the real-world details of your business to customize the apps that accelerate how work gets done.</p>
                    <button>Explore the platform <span>{arrowRight}</span></button>
                </div>
            </div>
        </div>
    )
}

export default Features