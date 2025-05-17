import useStoreModal from "../../../store/UseModal";



export const HamburgerModal = () => {

    const {setShowModal} = useStoreModal()

    return (
    <div className="absolute right-0 top-0 bottom-0 bg-black w-[50%] opacity-50 flex "  >
        
        <button className="text-white absolute right-0   w-[20px] h-[20px ] mr-[26px] mt-[15px] hover:bg-white hover:text-black" onClick={()=> setShowModal(false)} >X</button>
        <nav className=" p-6 flex gap-8 flex-col w-[100%]">
            <br />
            <a className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">About</a>
            <a className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">Projects</a>
            <a className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">Services</a>
            <a className="text-white hover:bg-white hover:text-black font-bold w-[100%] p-2">Contacs</a>

        </nav>

    </div>
    );
};

