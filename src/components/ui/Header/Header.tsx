import useStore from "../../../store/UseModal"



export const Header = () => {

    const {setShowModal, showModal} = useStore()

    return (
    <>
    <header className=" py-3 px-6 justify-between items-center bg-transparent absolute  flex w-[100%]"   >
        <h1 className="text-white font-bold text-xl ">sunny side</h1>
        <nav> 
            {/* agregamos el showmodal negado para hacer el condicional y así hacer que no se muestre el icono de la hamburger desaparezca cuando se abra el navbar así no se ve  */}
            { !showModal && <img src="/images/icon-hamburger.svg" alt=" icono navegacion " onClick={()=> setShowModal(true) }  /> }
            
        </nav>
    </header>
        <h2 className="absolute  top-[25%] text-white font-extrabold text-6xl left-1/2 -translate-x-1/2   text-center">WE ARE <span>CREATIVES</span> <span className="opacity-35">CREATIVES</span> <span className="opacity-25">CREATIVES</span> </h2>
        <img src="/images/mobile/image-header.jpg" alt="" className="h-[100vh] w-[100%] object-cover"/>


    </>
    )
}


