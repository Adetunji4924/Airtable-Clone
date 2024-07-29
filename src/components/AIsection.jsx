import SecondaryButton from "./secbtn"
import Floating from "../assets/floating1.png"

const AISection = () => {
    return (
        <div className="flex justify-between items-center rounded-lg mx-[3rem] my-[5rem] bg-[#F7F2FF]">
            <div>
                <img src={Floating} alt="" />
            </div>
            <div className="px-8 py-[2rem]">
                <span className="font-Roboto text-[1.2rem] text-[#040E20]">In beta</span>
                <p className="text-[1.6rem] font-Roboto text-[#622CA0] my-2">Transform workflows with the power of AI</p>
                <p className="text-text-0 font-Roboto my-4">With our native AI components, dynamic AI functionality is at your fingertips in
                minutes.</p>
                <SecondaryButton text="Learn more"/>
            </div>
        </div>
    )
}

export default AISection