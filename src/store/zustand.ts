import {create} from 'zustand'

type Store = {
    isMobile : Boolean,
    setMobile : () => void
}

export const useStore = create<Store>((set) => ({
     isMobile : false,
     setMobile : () => set((state) => ({ isMobile : !state.isMobile }))
}))