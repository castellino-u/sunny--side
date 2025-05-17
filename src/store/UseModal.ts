//vamos a crear la store
//para la store, typescript te pide que typees la store para saber que vamos a usar


import { create } from 'zustand';

interface useStoreModal {
    //ponemos lo que va a tener nuestra store y sus tipos
    showModal: boolean,
    setShowModal: (state: boolean) => void;
}


const useStoreModal = create<useStoreModal>((set) => ({
    //vamos a crear un estado para en este caso mostrar el modal del hamburgermodal

    showModal : false,
    setShowModal: (state) => set(()=> ({showModal:state}))

}))

//importamos la store 

export default useStoreModal;