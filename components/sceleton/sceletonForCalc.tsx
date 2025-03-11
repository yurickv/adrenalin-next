import { SceletonIcon } from '../icons/SceletonIcon';
export default function SceletonForCalc() {
  return (
    <div role="status" className="space-y-8 animate-pulse">
      <div className="w-full">
        <div className="flex  flex-col md:flex-row md:gap-6 justify-center mb-12">
          <div className="h-16 bg-gray-200 rounded-xl dark:bg-gray-700 w-full md:w-[373px] mb-4 md:mb-0"></div>
          <div className="h-16 bg-gray-200 rounded-xl dark:bg-gray-700 w-full md:w-[373px] mb-4 md:mb-0"></div>
          <div className="h-16 bg-gray-200 rounded-xl dark:bg-gray-700 w-full md:w-[373px] mb-4 md:mb-0"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-xl dark:bg-gray-700 w-full mb-12"></div>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 md:gap-6 justify-between lg:justify-evenly">
          <div className="flex justify-center items-center w-full max-w-[500px] h-[750px] bg-gray-300 rounded-xl  dark:bg-gray-700">
            <SceletonIcon />
          </div>
          <div className="">
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-xl dark:bg-gray-700 w-[280px] md:w-[373px] lg:w-[600px]"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
