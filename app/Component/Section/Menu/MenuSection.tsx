import Link from "next/link";

 const MenuSection = ( { color } : { color : string } ) => {
 
    return (
        <div className="flex w-full p-2 space-x-4 w-fill">  
            <Link className="transition hover:underline hover:scale-110"  href="/guideline" target="_blank">
                How to build this page? 
            </Link>  
        </div>
    )
}

export default MenuSection;