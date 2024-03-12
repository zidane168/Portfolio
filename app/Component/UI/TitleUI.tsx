export default function TitleUI({ title, bgColor }) {
    return (

        // #3498db (Belize hole)
        // #f1c40f (Sun flower)
        // #8e44ad (Wisteria)
        // #e74c3c (Alizarin)
        // #d35400 (pumpkin)
        // #2ecc71 (Emerald)
        <div className={` bg-[bgColor] w-full rounded-md p-2 text-white`}>
            { title } 
        </div>
    )
}