import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="ml-2 tracking-wide flex justify-between">
        <div className="font-bold text-xl text-blue-700">
          <Link href="/">GDG Blog</Link>
        </div>
        <Link href="/about">About Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
