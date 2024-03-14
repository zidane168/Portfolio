import {create} from 'zustand';

const useStore = create((set) => ({
    
    color: '#3498db',
    setColor: (value: string) => set({ color: value}),
})); 

export default useStore;