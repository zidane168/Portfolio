import {create} from 'zustand';
import { persist } from 'zustand/middleware';

// const useStore = create((set) => ({
    
//     color: '#3498db',
//     setColor: (value: string) => set({ color: value}),
// })); 

const useStore = create(
    persist(        // use persist de dong bo voi cac page khac
      (set) => ({
        color: '#3498db',
        setColor: (value) => set({ color: value }),
      }),
      {
        name: 'my-color', // Key to use for storing the state in local storage
      }
    )
  );


export default useStore;