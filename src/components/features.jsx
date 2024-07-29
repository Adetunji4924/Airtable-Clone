import illustration1 from "../assets/image1.svg"
import video from "../assets/div.BkHtmlVideo-module_bkVideoNoControl__2VSPo.png"


const Features = () => {
    
    return (
        <div>
            {/* first block */}
            <div className="flex justify-between items-center px-[3rem] py-[5rem] gap-2">
                <div className="w-[45%]">
                    <h1 className="font-Roboto text-Headtext-0 text-[2rem] font-medium">Operationalize your critical data, move beyond rigid tools, and reimagine workflows with AI. No code required.</h1>
                </div>
                <div>
                    <img src={illustration1} alt="" />
                </div>
            </div>

            {/* second block */}
            <div className="bg-[#F8FAFC] flex justify-center items-center gap-4 px-[3rem] py-[5rem]">
                <div className="">
                    <img className="" src={video}></img>
                </div>
                <div className="w-[50%]">
                    <h1 className="font-Roboto font-medium text-[3rem] text-Headtext-0">Simple to build.<br />Intuitive to use.</h1>
                    <p className="font-Roboto text-text-0">Enable those closest to the real-world details of your business to customize the apps that accelerate how work gets done.</p>
                    <button className="flex items-center text-primary-0 gap-2 mt-8">Explore the platform <span className="material-symbols-outlined">trending_flat</span></button>
                </div>
            </div>
        </div>
    )
}

export default Features