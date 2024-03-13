import {create} from 'zustand';

const useStore = create((set) => ({
    color: '#d35400',
    setColor: (value: string) => set({ color: value}),
}));

export default useStore;