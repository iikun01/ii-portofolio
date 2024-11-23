import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-[#004581] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} iicchisan. All rights reserved.</p>
          </div>
          <div className="flex space-x-2">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <Image
                src="/icons/icons8-github-400.png"
                alt="Github"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/icons/icons8-linkedin-400.png"
                alt="LinkedIn"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image
                src="/icons/icons8-facebook-400.png"
                alt="Facebook"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Image
                src="/icons/icons8-twitter-400.png"
                alt="Twitter"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
