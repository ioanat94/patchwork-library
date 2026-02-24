import { Badge } from "@/components/ui/badge";
import Header from "./Header";
import Library from "./Library";
import type { Resource } from "@/utils/types";

type ResourceItemProps = {
  resource: Resource;
};

export default function ResourceItem({ resource }: ResourceItemProps) {
  return (
    <div className="border-b border-slate-200 py-4 last:border-b-0">
      <div className="flex flex-col gap-2">
        <a
          href={resource.url}
          rel="noopener noreferrer"
          target="_blank"
          className="text-5xl font-semibold text-blue-600 hover:text-blue-800 hover:underline"
        >
          {resource.title}
        </a>
        <p className="text-sm text-slate-600 break-all">{resource.url}</p>
        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <Badge key={resource.id} variant="secondary" className="text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
