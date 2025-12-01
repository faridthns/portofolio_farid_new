import { subtitle } from "@/components/primitives";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="flex items-center justify-center">
        <div className="my-5">
          <span className={subtitle({ class: "my-0" })}>
            &copy; {currentYear} Farid Ramadhan. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
