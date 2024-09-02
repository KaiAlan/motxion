import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge";

type HeadingPageProps = {
    title: string;
    description: string;
    badges?: string[];
    className?: string
}

const Heading = ({
    title,
    description,
    badges,
    className
}: HeadingPageProps) => {
  return (
    <div className={cn("w-full flex flex-col justify-start items-start gap-2 pb-10", className)}>
        <h1 className="text-3xl text-typeface-1 font-josefinSans">{title}</h1>
        <p className="text-base text-typeface-2 font-openSans text-wrap">{description}</p>
        <div className="flex justify-start items-center gap-2">
            {badges?.map((tag, index) => (
                <Badge key={index} className="bg-foreground text-typeface-2">{tag}</Badge>
            ))}
        </div>
    </div>
  )
}

export default Heading