import image1 from "../assets/AWS-logo-darken4.svg";
import image2 from "../assets/Item.png";
import image3 from "../assets/Vector.png";
import image4 from "../assets/hbo-logo-darken4.svg";
import image5 from "../assets/div.ContentfulImage_imageContainer__eVV0D.png";
import image6 from "../assets/expedia-grayscale.svg.png";

const Partner = () => {

    return (
        <div className="bg-[#F0F6FF] flex justify-between items-center px-[3rem] py-[3rem]">
                <div>
                    <img className="w-20" src={image1} alt="" />
                </div>
                <div>
                    <img className="w-20" src={image2} alt="" />
                </div>
                <div>
                    <img className="w-20" src={image3} alt="" />
                </div>
                <div>
                    <img className="w-20" src={image4} alt="" />
                </div>
                <div>
                    <img className="w-28" src={image5} alt="" />
                </div>
                <div>
                    <img className="w-20" src={image6} alt="" />
                </div>
        </div>
    )
}

export default Partner