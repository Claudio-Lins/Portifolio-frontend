interface NavLinkProps {
  href: string;
  text: string;
}

export function NavLink({ href, text }: NavLinkProps) {
  return (
    <li className="flex justify-center items-center">
      <a
        className="text-gray-600 px-4 py-[22px] hover:text-zinc-500 transition-colors duration-200"
       href={href}>{text}</a>
    </li>
  );
}
