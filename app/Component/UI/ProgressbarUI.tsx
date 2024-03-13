export default function ProgressbarUI ({ name, percent, width, color } : { name: string, percent: number, width: string, color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={ `text-base font-medium dark:text-white` } >
            { name }
        </span>
        <span className={ `text-sm font-medium ${color} dark:text-white` }>
            { percent }
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="h-2.5 rounded-full" style={{ width : width, backgroundColor: color } } ></div>
      </div>
    </div>
  );
}
