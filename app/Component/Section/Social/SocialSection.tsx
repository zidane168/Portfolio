import Image from "next/image";
import Link from "next/link";
import SlideInLeft from "../../Animation/SlideInLeft";

export default function SocialSection() {
  return (
    <div className="flex justify-center space-x-2 mt-[10px]">
      
      <div className="transition hover:scale-125"> 
        <Link href="https://learn-tech-tips.blogspot.com/" target="_blank">
          <Image
            src="/blogger.png"
            alt="Webzone Tech Tips"
            className="rounded-full"
            width={30}
            height={30}
          />
        </Link>
      </div> 
 
      <div className="transition hover:scale-125">
        <Link href="https://www.facebook.com/webzonetechtipszidane" target="_blank">
          <Image
            src="/facebook.webp"
            alt="fb"
            className="rounded-full"
            width={30}
            height={30}
          />
        </Link>
      </div> 
 
      <div className="transition hover:scale-125">
        <Link href="https://www.codeproject.com/Articles/5366199/How-to-Monitor-Data-Changes-in-SQL-Server-Tables-w" target="_blank">
          <Image
            src="/codeproject.png"
            alt="code project"
            className="rounded-full"
            width={30}
            height={30}
          />
        </Link>
      </div> 

 
      <div className="transition hover:scale-125">
        <Link href="https://github.com/zidane168/" target="_blank">
          <Image
            src="/github.webp"
            alt="Github"
            className="rounded-full"
            width={30}
            height={30}
          />
        </Link>
      </div> 


      <div className="transition hover:scale-125">
        <Link href="https://www.linkedin.com/in/lyhuuvi/" target="_blank">
          <Image
            src="/linkin.webp"
            alt="Linkedin"
            className="rounded-full"
            width={30}
            height={30}
          />
        </Link>
      </div>
      
      <div className="transition hover:scale-125">
        <Link href="https://www.tiktok.com/@learntechtips" target="_blank">
          <Image
            src="/tiktok.webp"
            alt="Tiktok"
            className="rounded-full"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <div className="transition hover:scale-125">
        <Link href="https://www.youtube.com/@webzonetechtips" target="_blank">
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
  );
}
