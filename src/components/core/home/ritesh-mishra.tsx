import Link from "next/link";

const RitesMishra = () => {
  return (
    <div className="w-fit mx-auto">
      <Link
        href="/"
        className={`group inline-flex items-center font-headline-mozi text-6xl sm:text-8xl  font-bold leading-none tracking-tight`}
      >
        <span className="text-text-primary transition-colors duration-300 group-hover:text-accent-green">
          Ritesh
        </span>

        <span className="ml-1 text-accent-green">Mishra</span>
      </Link>
    </div>
  );
};

export default RitesMishra;
