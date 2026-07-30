import Image from "next/image";
import Link from "next/link";

export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link className="wordmark" href="/" aria-label="GIA Motion, inicio">
      <Image
        src="/images/gia-logo.png"
        alt=""
        width={954}
        height={475}
        priority={priority}
        sizes="(max-width: 560px) 112px, 132px"
      />
    </Link>
  );
}
