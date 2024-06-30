

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for conditional class names
import { MenuItem } from "@/types";


type IProps = {
  item: MenuItem;
};

const HeaderLink = ({ item }: IProps) => {
  const linkPath = `${item.path}`;
  const pathName = usePathname();
  const isActive = pathName === linkPath;

  return (
    <Link
      key={item.label}
      href={linkPath}
      className={cn(
        "flex items-center gap-3 rounded-sm px-3 py-2 transition-all whitespace-nowrap",
        isActive
          ? "bg-muted text-primary"
          : "text-muted-foreground hover:text-primary"
      )}
    >
      <span className="truncate">{item.label}</span>
    </Link>
  );
};

export default HeaderLink;
