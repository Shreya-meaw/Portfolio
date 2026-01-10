import { Card, CardContent } from "@/components/ui/card";

const ProjectCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative overflow-hidden bg-muted shimmer h-48" />
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-muted shimmer rounded w-1/2" />
          <div className="h-5 w-20 bg-muted shimmer rounded" />
        </div>
        
        <div className="h-4 bg-muted shimmer rounded mb-2" />
        <div className="h-4 bg-muted shimmer rounded mb-2 w-5/6" />
        <div className="h-4 bg-muted shimmer rounded mb-4 w-3/4" />
        
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-16 bg-muted shimmer rounded-full" />
          <div className="h-6 w-20 bg-muted shimmer rounded-full" />
          <div className="h-6 w-24 bg-muted shimmer rounded-full" />
        </div>
        
        <div className="h-4 bg-muted shimmer rounded mb-2" />
        <div className="h-4 bg-muted shimmer rounded w-4/5" />
      </CardContent>
    </Card>
  );
};

export default ProjectCardSkeleton;
