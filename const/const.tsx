interface navBarL {
  name: string;
  href: string;
}
const navBarLinks: navBarL[] = [
  { name: "בית", href: "/" },
  { name: "עלינו", href: "/about" },
  { name: "פרויקטים", href: "/projects" },
  { name: "צור קשר", href: "/contact" },
];

export { navBarLinks };
