import { title } from "@/components/primitives";
import { Divider } from "@heroui/react";

export default function Socialmedia() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title({ color: "violet", class: "my-0" })}>
          Social Media
        </h1>
        <Divider className="mx-auto my-4 h-1 bg-primary rounded-full w-20" />
      </section>
    </>
  );
}
