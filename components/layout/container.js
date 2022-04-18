export default function LgContainer({ children }) {
  return (
    <section className=" pt-12 flex flex-col gap-6 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </section>
  );
}
