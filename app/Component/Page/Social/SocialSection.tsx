import Image from "next/image";
import Link from "next/link";

export default function SocialSection() {
    return (
        <div className="flex justify-center space-x-2 mt-[10px]">
              <div className="transition hover:scale-110"> 
                <Link href="https://www.facebook.com/learntechtips168/"  target="_blank"> 
                    <Image
                      src="/facebook.webp"
                      alt="fb"
                      className="rounded-full"
                      width={30}
                      height={30} 
                    />    
                </Link> 
              </div>

              <div className="transition hover:scale-110"> 
                <Link href="https://github.com/zidane168/"  target="_blank"> 
                    <Image
                      src="/github.webp"
                      alt="Github"
                      className="rounded-full"
                      width={30}
                      height={30} 
                    />    
                </Link> 
              </div>

              <div className="transition hover:scale-110"> 
                <Link href="https://www.linkedin.com/in/lyhuuvi/" target="_blank"> 
                    <Image
                      src="/tiktok.webp"
                      alt="Tiktok"
                      className="rounded-full"
                      width={30}
                      height={30} 
                    />    
                </Link> 
              </div>

              <div className="transition hover:scale-110"> 
                <Link href="https://www.youtube.com/@learntechtips3434"  target="_blank"> 
                    <Image
                      src="/youtube.webp"
                      alt="Youtube"
                      className="rounded-full"
                      width={30}
                      height={30} 
                    />    
                </Link> 
              </div>
        </div>
    )
}