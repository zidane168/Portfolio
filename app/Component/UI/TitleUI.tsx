
type TitleUI = {
    title: string,
    bgColor: string, 
    id?: string,
}


export default function TitleUI({ title, bgColor, id }  : TitleUI ) {
  
    return (

        // #3498db (Belize hole)
        // #f1c40f (Sun flower)
        // #8e44ad (Wisteria)
        // #e74c3c (Alizarin)
        // #d35400 (pumpkin)
        // #2ecc71 (Emerald)
        <div id={ id || title } className={`font-bold uppercase w-full rounded-full p-2 text-white text-center mb-[20px]`}  style={{ backgroundColor: bgColor  }} >
            { title } 
        </div>
    )
}