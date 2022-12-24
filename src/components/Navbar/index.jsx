
import { NavLink } from './NavLink';

export function Navbar() {
  return (
    <section className="fixed inset-0 flex justify-center items-center h-16 z-50 bg-primary w-full">
      <div className=" max-w-7xl w-full flex items-center justify-between">
        <a href="/#header">
          {/* <Image  src="/logo.svg" alt="logo" width={100} height={100} /> */}
          <span className="font-bold text-4xl">Claudio Lins</span>
        </a>
        <nav>
          <ul className="flex flex-row justify-end items-center w-full">
            <NavLink href='/#header' text='Home' />
            <NavLink href='/#about' text='About' />
            <NavLink href='/#skills' text='Skills' />
            <NavLink href='/#projects' text='Projetos' />
            <NavLink href='/#contact' text='Contact' />
          </ul>
        </nav>
      </div>
    </section>
  );
}
