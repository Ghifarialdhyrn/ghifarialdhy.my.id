import Link from "next/link";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function HeroSocial() {
  return (
    <div className="mt-10 flex gap-5">
      <Link href="#">
        <IconBrandGithub stroke={1.5} />
      </Link>

      <Link href="#">
        <IconBrandLinkedin stroke={1.5} />
      </Link>

      <Link href="#">
        <IconMail stroke={1.5} />
      </Link>
    </div>
  );
}