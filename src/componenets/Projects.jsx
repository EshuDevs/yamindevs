
import yamindevs from '../assets/yamindevs.jpg'
import shop from '../assets/shop.jpg'
import saiko from '../assets/saiko-info.jpeg'

const features = [
  {
    name: 'YaminDevs',
    description:
      'My personal website which I built with react and tailwind ',
    img: yamindevs,
    url: 'https://yamindevs.netlify.app/',
    repo: 'https://github.com/EshuDevs/yamindevs'
    
  },
  {
    name: 'Showcase store',
    description:
      'its a website i built to practice it was also build with react and tailwind it has some functionality',
    img: shop,
    url: 'https://showcase-store.netlify.app/',
    repo: 'https://github.com/EshuDevs/off-white/tree/main/off-white-frontend',
  },
  {
    
    name: 'saiko-intensivpflege.info',
    description:
      'A website I built for a client who runs a intensive care business which was built using react and tailwind I unfortunately cant provide the code for obvious reasons',
    img: saiko,
    url: 'https://saiko-intensivpflege.info/',
    repo: 'https://github.com/EshuDevs?tab=repositories'
  },

]

export default function Projects() {
  return (
    <div id='projects' className="bg-white py-24 flex justify-center sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  max-w-2xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-indigo-600">My Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            these are some of the websites I build so far
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl items-center justify-center grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative w-[17rem] md:w-[22rem]">
                <img src={feature.img} className='rounded-md border-4 mb-3 w-[17rem] md:w-[22rem] md:h-[12rem] border-gray-500'/>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 md:h-[7rem] text-base leading-7 text-gray-600">{feature.description}</dd>
                <div className='flex gap-5 mt-4'>
                    <a href={feature.url} target='_blank' rel='noreferrer' className='border border-indigo-600 px-9 py-1 text-indigo-600 rounded-full hover:text-white hover:bg-indigo-600'>Link</a>
                    <a href={feature.repo} target='_blank' rel='noreferrer' className='border border-indigo-600 px-9 py-1 text-indigo-600 rounded-full hover:text-white hover:bg-indigo-600'>Repo</a>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}