import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const ComponentsPage = async() => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(),20000))
  return (
    <div className="flex flex-col justify-start items-start w-full relative">
    <Skeleton className="h-10 w-60" />
    <div className="flex flex-wrap w-full h-full justify-start items-center gap-x-4 gap-y-2 mt-4">
      <Skeleton className=" h-10 w-32 rounded-full" />
      <Skeleton className=" h-10 w-32 rounded-full" />
      <Skeleton className=" h-10 w-32 rounded-full" />
      <Skeleton className=" h-10 w-32 rounded-full" />
      <Skeleton className=" h-10 w-32 rounded-full" />
      <Skeleton className=" h-10 w-32 rounded-full" />
      <Skeleton className=" h-10 w-32 rounded-full" />
    </div>
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-4 gap-y-8 w-full">
      <div className="flex flex-col justify-start items-start max-w-[600px] w-full gap-2" >
        <Skeleton className=" h-64 max-w-[600px] w-full rounded-sm" />
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex flex-col justify-start items-start max-w-[600px] w-full gap-2" >
        <Skeleton className=" h-64 max-w-[600px] w-full rounded-sm" />
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex flex-col justify-start items-start max-w-[600px] w-full gap-2" >
        <Skeleton className=" h-64 max-w-[600px] w-full rounded-sm" />
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex flex-col justify-start items-start max-w-[600px] w-full gap-2" >
        <Skeleton className=" h-64 max-w-[600px] w-full rounded-sm" />
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex flex-col justify-start items-start max-w-[600px] w-full gap-2" >
        <Skeleton className=" h-64 max-w-[600px] w-full rounded-sm" />
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex flex-col justify-start items-start max-w-[600px] w-full gap-2" >
        <Skeleton className=" h-64 max-w-[600px] w-full rounded-sm" />
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  </div>
  )
}

export default ComponentsPage