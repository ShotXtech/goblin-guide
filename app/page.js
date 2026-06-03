export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-6">
        Goblin Guide
      </h1>

      <p className="text-center max-w-md text-lg mb-8 text-slate-300">
        Say hello to the best guide in Teyvat.
        <br />
        She has seen things.
        <br />
        Now she's coping with sass.
      </p>

      <button className="rounded-full bg-white text-slate-950 px-8 py-4 font-bold hover:scale-105 transition">
        HELLO
      </button>
    </main>
  );
}