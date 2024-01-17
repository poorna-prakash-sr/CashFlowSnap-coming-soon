import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Existing code... */}

      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-4xl font-bold text-center text-blue-600`}>
          Coming Soon
        </h2>
        <p className={`m-0 text-lg opacity-70 text-gray-800`}>
          Exciting features are on their way. Stay tuned!
        </p>
      </div>
    </main>
  );
}
