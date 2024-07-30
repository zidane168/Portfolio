import SlideInLeft from "../Animation/SlideInLeft";

export default function KeywordUI({ title }  : { title: string  } ) {
  
    return ( 
        <div className={`mt-6`} >
            <SlideInLeft> { title } </SlideInLeft>
        </div>
    )
}