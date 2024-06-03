import Seconds from "./seconds";

export default function Success() {
  return (
    <div className="bg-black w-full h-screen shadow-md relative overflow-hidden">
      <div className="flex flex-col absolute text-center w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300/20 rounded h-60 max-w-full p-6 px-12">
        <h1 className="text-xl sm:text-3xl font-semibold tracking-wider gradientNtense gradientClipText">
          Success!
        </h1>
        <p className="text-lg sm:text-xl py-3">Form has been submitted</p>

        <div className="mt-auto">
          <Seconds />
        </div>
        <div className="left-0 right-0 bottom-0 h-1 absolute w-full bg-primary rounded-b"></div>
      </div>
    </div>
  );
}
