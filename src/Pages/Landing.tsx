import { useNavigate } from "react-router-dom";
import redditlogo from "../assets/reddit_logo.png";
import youtubeLogo from "../assets/yt_logo.svg.webp";
import cnnlogo from "../assets/cnn_logo.png";
import wsjlogo from "../assets/wsj_logo.png";
import nbclogo from "../assets/nbc_logo.svg";
import screenshot from "../assets/project-app-screenshot.png";

const features = [
  {
    name: "Enter your topics",
    description:
      "Add your list of topics you care about, and share a source. It can be a Reddit Forum, YouTube Channel, or even a link to your favorite magazine.",
  },
  {
    name: "Sheldon Analyzes and Adds Context",
    description:
      "Sheldon analyzes everything it finds on the internet and breaks it down into bullet point summaries. It also adds knowledge to news stories which help you understand the context behind them better.",
  },
  {
    name: "Check your email or dashboard",
    description:
      "Sheldon will send the most important news or info it finds on your topics each morning, and if you don’t want to clutter your inbox, you can just check your dashboard.",
  },
];

const faqs = [
  {
    id: 1,
    question: "How does Sheldon help prevent bias?",
    answer:
      "For US Political News, Sheldon is given a range of news sources labeled with its corresponding political lean (Left, or Right). Sheldon will try to search across sources from both sides of the spectrum, and present you summaries from each side.",
  },

  {
    id: 2,
    question: "How accurate is Sheldon's analysis and sumamries?",
    answer:
      "Sheldon is powered by a large language model, and therefore does have the potential to make errors in its analysis. Sheldon is a great tool to break news down, or get the tldr version of a topic, but it should not be a replacement for reading the full article and evaluating multiple sources.",
  },

  {
    id: 3,
    question: "How was Sheldon Built?",
    answer:
      "Sheldon uses APIs from common websites like Reddit, YouTube, and New York Times to aggregate articles on a topic. It then uses the Llama2 language model to summarize the articles into bullet points. It's prompted to use general knowledge from the internet to add context to the summaries.",
  },
  // More questions...
];




export default function Example() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Introducing Sheldon
                </h1>
                <div className="mt-6 text-lg leading-8 text-gray-600">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      Sheldon finds news & information on any topic and breaks
                      it down into bullet points
                    </li>
                    <li>
                      It also provides background and context behind news
                      stories which is often missed
                    </li>
                  </ul>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    onClick={() => { navigate('/register') }}
                    className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    onClick={() => { navigate('/login') }}
                    className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
                  >
                    Login <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src={screenshot}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={redditlogo}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 lg:order-5"
              src={wsjlogo}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={nbclogo}
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={cnnlogo}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 lg:order-2"
              src={youtubeLogo}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="">
                Sheldon gets the most important information for you from all
                these sources.
              </span>
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" /> You can
                also add your own!{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                How It Works
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get the most important info on any topic
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You can give specific topics like "SpaceX" or broader ones like
                "Geopolitics" and watch it summarize the most important bits for
                you.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6"></p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
               Never feel out of the loop again
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              With Sheldon, you can stay up to date without trying, and get news without bias, negativity, and clutter.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                onClick={() => { navigate('/register') }}
                className="cursor-pointer rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                onClick={() => { navigate('/login') }}
                className="cursor-pointer text-sm font-semibold leading-6 text-white"
              >
                Login <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
