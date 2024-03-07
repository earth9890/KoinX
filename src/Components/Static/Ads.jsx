import { FaArrowRightLong } from "react-icons/fa6";

const Ads = () => {
  return (
    <div className="bg-[#0052FE] text-white flex flex-col items-center p-6 rounded-lg">
      <h1 className="font-bold text-3xl text-center mb-6">
        Get started with koinX for Free
      </h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nam
        earum aliquam deleniti at odio molestias
      </p>
      <img
        className="w-[100%] h-[100%] rounded-lg"
        src="https://img.freepik.com/premium-vector/woman-standing-mobile-screen-app-looking-page_82574-12176.jpg"
        alt="image"
      />
      <button className="bg-white text-black px-6 py-2 mt-2 rounded-md font-bold flex items-center gap-4">
        Get started for FREE
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Ads;
