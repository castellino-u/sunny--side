import useStoreModal from "../../store/UseModal";
import { HamburgerModal } from "../ui/HamburgerModal/HamburgerModal";
import { Header } from "../ui/Header/Header";
import { SectionImageText } from "../ui/SectionImageText/SectionImageText";


//vamos a usar este mainscreen para meter los componentes y luego exportamos esto solo a la app.tsx
export const MainScreen = () => {
    const {showModal} = useStoreModal();

    return (
    <div>

        <Header/>
        <SectionImageText/>


        {showModal && <HamburgerModal/> }
        
    </div>
    );
};

