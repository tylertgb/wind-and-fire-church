import Image from "next/image";

interface Avatar {
  src: string;
  alt: string;
}

interface MemberAvatarStackProps {
  avatars: Avatar[];
  count: string; // e.g. "10K+"
  label?: string; // e.g. "users"
  className?: string;
}

/**
 * Overlapping avatar stack with a member count label.
 * Shows community engagement with animated entrance.
 *
 * Usage:
 * <MemberAvatarStack
 *   avatars={[
 *     { src: "/avatars/1.jpg", alt: "User 1" },
 *     { src: "/avatars/2.jpg", alt: "User 2" },
 *   ]}
 *   count="500+"
 *   label="active members"
 * />
 */
export default function MemberAvatarStack({
  avatars,
  count,
  label = "members",
  className = "",
}: MemberAvatarStackProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-lg ring-2 ring-white/20"
            style={{ zIndex: avatars.length - index }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              sizes="44px"
              className="object-cover"
              quality={100}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white leading-none mb-0.5">
          {count}
        </span>
        <span className="text-xs font-medium text-white/70 leading-none">
          {label}
        </span>
      </div>
    </div>
  );
}
