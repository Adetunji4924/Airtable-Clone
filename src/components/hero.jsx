import PrimaryButton from "./prmbtn"
import SecondaryButton from "./secbtn"
import Image from '../assets/image.svg'

const Hero = () => {
    return (
        <div className="bg-hero-background bg-center bg-cover px-[3rem] py-[5rem] flex justify-between items-center gap-8">
            <div className="w-[40%]">
                <div></div>
                <div>
                <h1 className="text-Headtext-0 text-[4rem] font-semibold font-Roboto leading-tight">The fastest way to build apps</h1>
                <p className="text-primary-0 mt-2 text-[1.1rem] font-Roboto font-medium">Empower your team to work faster and more confidently than ever before.</p>
                </div>

                <div className="my-[3rem] flex gap-2">
                    <PrimaryButton text='Sign up for free' />
                    <SecondaryButton text='Contact for sales' />
                </div>
            </div>
            <div className="w-[60%]">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}

export default Hero