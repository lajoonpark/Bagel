interface MenuListProps {
  title: string;
  items: string[];
}

export default function MenuList({ title, items }: MenuListProps) {
  return (
    <div>
      <h3 className="font-heading text-3xl text-white tracking-wide mb-1">
        {title}
      </h3>
      <div className="h-px bg-white/40 mb-5 w-28" />
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-white/90 flex items-start gap-2 text-base">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
