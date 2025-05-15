export const HamburgerModal = () => {
    return (
    <div className="absolute right-0 top-0 bottom-0 bg-black w-[50%] opacity-50 flex "  >
        
        <button className="text-white absolute right-0   w-[20px] h-[20px ] mr-[26px] mt-[15px] hover:bg-white hover:text-black"  >X</button>
        <div className=" p-6 flex gap-8 flex-col w-[100%]">
            <br />
            <h3 className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">About</h3>
            <h3 className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">Projects</h3>
            <h3 className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">Services</h3>
            <h3 className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">Contacs</h3>

        </div>

    </div>
    );
};

