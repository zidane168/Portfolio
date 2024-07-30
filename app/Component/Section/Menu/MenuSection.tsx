import Image from "next/image";
import Link from "next/link";

 const MenuSection = ( { color } : { color : string } ) => {
 
    return (
        <div className="flex w-full p-2 space-x-4 w-fill">   
            <Link className="flex items-center gap-4 transition hover:underline hover:scale-110"  href="/guideline" target="_blank">
                How to build this page?     
                <Image src="/next.png" width={50} height={50} alt="next" />
            </Link>  
        </div>
    )
}

export default MenuSection;