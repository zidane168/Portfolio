import React from "react";
import useStore from "@/app/Store/store";
import Link from "next/link";
import Image from "next/image";

const GuideDetailPage: React.FC = () => {
  const color = useStore((state: any) => state.color);
  return (
    <div>
      <div className="flex justify-between">
        <div> Guideline </div>
        <div className="transition hover:scale-125">
          <Link href="/">
            <Image src="/back.png" width={50} height={50} alt="back" />{" "}
          </Link>{" "}
        </div>
      </div>

      <ul className="ml-6 list-disc">
        <li> 
          This Portfolio basing on NextJS 14. Thanks for NextJS framework ^_^
        </li>
        <li> Create project with Command: npx create-next-app@latest </li>

        <li> 
          Use Zustand state management
          <ul className="ml-6 list-decimal">
            <li> Installation : npm install zustand </li>
            <li> Create Stored </li>
            <li className="p-2 rounded-md shadow-lg">
              <pre className="overflow-x-scroll">
                <code>
                  {` 
  const useStore = create(  
    persist(        // use persist de dong bo voi cac page khac
        (set) => ({
          color: '#3498db',
          setColor: (value: string) => set({ color: value }),
        }),
      {
        name: 'my-color', // Key to use for storing the state in local storage
      }
    )
  ); `}
                </code>
              </pre>
            </li>

            <li>Use Store</li>
            <li className="p-2 rounded-md shadow-lg">
              <pre className="overflow-x-scroll">
                <code>
                  {`  
  const setColor = useStore((state: any) => state.setColor);
  const color = useStore((state: any) => state.color);
                  `}
                </code>
              </pre>
            </li>
          </ul>
        </li>

        <li>Colors on this page</li>
        <li className="p-2 rounded-md shadow-lg">
          <pre className="overflow-x-scroll">
            <code>
              {` const colors = [ 
        { index: 1, name: 'Pumpkin',      colorValue: '#d35400' },
        { index: 2, name: 'Belize hole',  colorValue: '#3498db' },   
        { index: 3, name: 'Sun flower',   colorValue: '#f1c40f' },
        { index: 4, name: 'Wisteria',     colorValue: '#8e44ad' },
        { index: 5, name: 'Alizarin',     colorValue: '#e74c3c' },
        { index: 6, name: 'Emerald',      colorValue: '#2ecc71' },
  ]; 
`}
            </code>
          </pre>
        </li>
        <li>
          When user choose the color 
          <ul>
            <li className="p-2 rounded-md shadow-lg"> 
              <pre className="overflow-x-scroll">
                <code>
{`<div className="flex space-x-2 rounded-md border-[1px] p-8 h-[50px] items-center shadow-lg" style= { { borderColor: color } }> 
    {colors.map((color) => (  
        <div  
          key={color.index} 
          onClick={ () => handleColorSelect( color.colorValue )}
          style={{ backgroundColor: color.colorValue  }} 
          >   
        </div> 
    ))} 
  </div>
`}
                  </code>
                </pre>
              </li>
            </ul>
        </li>
        
        <li>
          setColor on state in code below
        </li>
        <li className="p-2 rounded-md shadow-lg">
          <pre className="overflow-x-scroll">
            <code>
{` const handleColorSelect = ( color: string ) => {    
    setColor(color)
};`};
            </code>
          </pre>
        
        </li>
        
      </ul>
    </div>
  );
};

export default GuideDetailPage;
