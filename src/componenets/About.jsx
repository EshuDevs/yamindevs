import aboutImg from '../assets/about.png'
export default function About() {
    return (
      <section id='about' className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 " />
        <div className="absolute inset-y-0  mr-16 w-[200%]   sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <h3 className="text-indigo-600 pb-10">About Me</h3>
              <p>
                My name is Yamin but most people call me Eshu I am a front-end developer who aspires to learn as much about coding/programming as I can.
                I practice martial arts which helps me to not only keep my body but also my mind sharp
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={aboutImg}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }