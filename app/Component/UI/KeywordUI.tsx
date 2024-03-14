import SlideInLeft from "../Animation/SlideInLeft";

export default function KeywordUI({ title }  : { title: string  } ) {
  
    return ( 
        <div className={` `} >
            <SlideInLeft> { title } </SlideInLeft>
        </div>
    )
}