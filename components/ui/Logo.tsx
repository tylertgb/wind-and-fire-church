import Image from "next/image";

interface LogoProps {
  /** Size of the logo icon */
  size?: number;
  /** Custom className for the container */
  className?: string;
}

/**
 * Logo component - just the favicon.png icon
 * 
 * @example
 * // Default size (36px)
 * <Logo />
 * 
 * @example
 * // Custom size
 * <Logo size={48} />
 * 
 * @example
 * // With custom classes
 * <Logo size={40} className="shadow-xl ring-2 ring-white" />
 */
export default function Logo({
  size = 36,
  className = "",
}: LogoProps) {
  return (
    <div 
      className={`rounded-full overflow-hidden relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/favicon.png"
        alt="Wind & Fire Church Logo"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
