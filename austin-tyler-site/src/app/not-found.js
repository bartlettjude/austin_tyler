import Button from "@/components/Button";

export const metadata = { title: "Lost frame — Austin Tyler" };

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex flex-col items-center justify-center text-center px-5 pt-24">
      <p className="eyebrow mb-5">Error 404</p>
      <h1 className="display text-[22vw] md:text-[14rem] leading-none">404</h1>
      <p className="font-display italic text-2xl text-brown mt-2 mb-8">
        This frame didn’t develop.
      </p>
      <Button href="/" variant="dark">Back home</Button>
    </section>
  );
}
