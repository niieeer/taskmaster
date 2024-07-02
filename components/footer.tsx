export default async function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-4 text-center absolute bottom-0">
      Copyright © {new Date().getFullYear()} Taskmaster
    </footer>
  );
}
