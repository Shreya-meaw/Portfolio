import { Card, CardContent } from "@/components/ui/card";

const BlogCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative overflow-hidden bg-muted shimmer h-48" />
      
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-3 w-24 bg-muted shimmer rounded" />
          <div className="h-3 w-20 bg-muted shimmer rounded" />
        </div>
        
        <div className="h-6 bg-muted shimmer rounded mb-3 w-3/4" />
        <div className="h-4 bg-muted shimmer rounded mb-2" />
        <div className="h-4 bg-muted shimmer rounded mb-2 w-5/6" />
        <div className="h-4 bg-muted shimmer rounded w-2/3" />
      </CardContent>
    </Card>
  );
};

export default BlogCardSkeleton;
