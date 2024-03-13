import Link from "next/link";

 const MenuSection = ( { color } : { color : string } ) => {
 
    return (
        <div className="flex space-x-4  p-2 w-fill w-full">  
            <Link className="hover:underline hover:scale-110 transition"  href="/" target="_blank">
                How to build this page? 
            </Link>  
        </div>
    )
}

export default MenuSection;