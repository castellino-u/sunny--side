import { HamburgerModal } from "../ui/HamburgerModal/HamburgerModal";
import { Header } from "../ui/Header/Header";

//vamos a usar este mainscreen para meter los componentes y luego exportamos esto solo a la app.tsx
export const MainScreen = () => {
    return (
    <div>
        <Header/>
        <HamburgerModal/>
    </div>
    );
};