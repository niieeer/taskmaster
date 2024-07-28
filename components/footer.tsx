export default async function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 text-center absolute bottom-0">
      Copyright © {new Date().getFullYear()} Taskmaster
    </footer>
  );
}
