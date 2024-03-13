export default function ProgressbarUI ({ name, num } : { name: string, num: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={ ` first-line: dark:text-white` } >
            { name }
        </span>
        <span className={ `dark:text-white` }>
            { num }
        </span>
      </div>
   
    </div>
  );
}


{/* <span className={ ` first-line: dark:text-white` } >
{ name }
</span>
<span className={ ` ${color} dark:text-white` }>
{ percent }
</span> */}
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
// <div className="h-2.5 rounded-full" style={{ width : width, backgroundColor: color } } ></div>
// </div> 