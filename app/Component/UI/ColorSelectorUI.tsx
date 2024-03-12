'use client'
import useStore from "../../Store/store";

const ColorSectorUI = () => { 
    const setColor = useStore((state) => state.setColor);

    const handleColorSelect = ( { color } : { color: string } ) => {
      setColor(color);
    };
    
    const colors = [ 
        { index: 1, name: 'Pumpkin',      colorValue: '#d35400' },
        { index: 2, name: 'Belize hole',  colorValue: '#3498db' },   // '#3498db'
        { index: 3, name: 'Sun flower',   colorValue: '#f1c40f' },
        { index: 4, name: 'Wisteria',     colorValue: '#8e44ad' },
        { index: 5, name: 'Alizarin',     colorValue: '#e74c3c' },
        { index: 6, name: 'Emerald',      colorValue: '#2ecc71' },
    ];
    
    
    return ( 
        <div className="flex space-x-2 rounded-md border-[2px] p-6 h-[50px] items-center"> 
          {colors.map((color) => (  
              <div  
                key={color.index}
                className="w-10 h-10 transition-all rounded-full cursor-pointer hover:scale-125"  
                onClick={ () => handleColorSelect( color.colorValue )}
                style={{ backgroundColor: color.colorValue  }} 
                >   
              </div> 
          ))} 
        </div>
    )
}

 // {colors.map((color, index) => ( 
//   <div className="flex flex-col items-center"> 
//   <div 
//     key={ index }
//     className="w-10 h-10 transition-all rounded-full cursor-pointer hover:scale-125"  
//     // onClick={ () => handleColorSelect(color.colorValue )}
//     style={{ backgroundColor: color.colorValue }} 
//     >   
//   </div>
// </div>
  // ))}  
export default ColorSectorUI;