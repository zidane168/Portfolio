import {create} from 'zustand';

const useStore = create((set) => ({
    color: '',
    setColor: (value: string) => set({ color: value}),
}));

export default useStore;