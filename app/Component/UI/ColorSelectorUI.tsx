const ColorSectorUI = ({   }) => {
    const colors = [
        { name: 'Belize hole',  value: '#3498db' },   // '#3498db'
        { name: 'Sun flower',   value: '#f1c40f' },
        { name: 'Wisteria',     value: '#8e44ad' },
        { name: 'Alizarin',     value: '#e74c3c' },
        { name: 'Pumpkin',      value: '#d35400' },
        { name: 'Emerald',      value: '#2ecc71' },
    ];

    return ( 
         
        <div className="flex space-x-8">
          {colors.map((index, color) => ( 
            <div 
          
              className={`w-10 h-10 rounded-full cursor-pointer bg-[${color.value}]`} >  
                {color.name}
            </div>
          ))}  

        </div>
    )
}

export default ColorSectorUI;