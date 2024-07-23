import logo from '../assets/Link.svg'
import PrimaryButton from './prmbtn'
import SecondaryButton from './secbtn'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-[3rem] py-[1rem]'>
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div></div>
            </div>
            <div className='flex justify-between gap-2 items-center'>
                <SecondaryButton text='Request a demo' />
                <PrimaryButton text="Sign up for free" />
                <button className='font-Roboto text-text-0 font-medium px-4 hover:text-primary-0'>Sign In</button>
            </div>
        </div>
    )
}
export default Header