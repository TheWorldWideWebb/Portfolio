import './App.css';

function App() {
  return (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8">
          <h2 className="text-center text-base/7 text-xl font-semibold text-indigo-600">It's me Tom Webb</h2>
          <div className="mt-5 grid gap-4 sm:mt-10 lg:grid-cols-2 lg:grid-rows-2">

            <div className="relative max-lg:row-start-1 ">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                <h3 className="pt-2 text-lg font-medium tracking-tight max-lg:text-center">Professional</h3>
              <div
                  className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>

            <div className="relative max-lg:row-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
                <h3 className="pt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Stats</h3>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>


            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-2 sm:px-10 sm:pb-0 sm:pt-2">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Coding Projects
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Want to see the coding projects I've done or started and never finished ?
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div
                      className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-600/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-white">

                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6 text-white">
                      <p>add generated code and typewriter effect</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                  className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;
