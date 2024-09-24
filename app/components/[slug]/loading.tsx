import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    
    return (
      <div className="flex max-w-[1176px] relative">
        <div className="w-[900px]">
          <div className="w-full flex flex-col justify-start items-start gap-2 pb-10">
            <Skeleton className="h-10 w-60 mb-3" />
            <Skeleton className="h-6 w-full" />
            <div className="flex justify-center items-center gap-2 mt-1">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-24" />
            </div>
          </div>
          <Skeleton className="h-[50vh] w-full mt-4" />
          <Skeleton className="h-6 w-96 mt-10" />
          <Separator className="mt-4" />
          <div className="w-full flex flex-col justify-start items-start gap-2 pb-10 pl-4" >
            <div className="flex justify-start items-center gap-2 mt-8">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="h-6 w-60" />
            </div>
            <Skeleton className="h-[50vh] w-full mt-4" />
          </div>
        </div>
        <div className="hidden w-[226px] h-[calc(100vh-theme(spacing.40))] 2xl:flex flex-col justify-start items-start gap-2 pl-12 sticky top-24" >
          <Skeleton className="w-32 h-4" />
          <Skeleton className="w-56 h-4" />
          <Skeleton className="w-56 h-4" />
        </div>
      </div>
    )
  }