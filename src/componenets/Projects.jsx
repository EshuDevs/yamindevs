
import yamindevs from '../assets/yamindevs.jpg'
import shop from '../assets/shop.jpg'
import saiko from '../assets/saiko-info.jpeg'

const features = [
  {
    name: 'YaminDevs',
    description:
      'My personal website which I built with react and tailwind ',
    img: yamindevs,
    
  },
  {
    name: 'Showcase store',
    description:
      'its a website i built to practice it was also build with react and tailwind it has some functionality',
    img: shop
    
  },
  {
    
    name: 'saiko-intensivpflege.info',
    description:
      'A website I built for a client who runs a intensive care business which was built using react and tailwind I unfortunately cant provide the code for obvious reasons',
    img: saiko
  },

]

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            these are some of the websites I build so far
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative w-[22rem]">
                <img src={feature.img} className='rounded-md mb-3 w-[22rem] h-[12rem] border border-gray-200'/>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 h-[7rem] text-base leading-7 text-gray-600">{feature.description}</dd>
                <div className='flex gap-5 mt-4'>
                    <button className='border border-indigo-600 px-9 py-1 text-indigo-600 rounded-full hover:text-white hover:bg-indigo-600'>Link</button>
                    <button className='border border-indigo-600 px-9 text-indigo-600 rounded-full hover:text-white hover:bg-indigo-600'>Repo</button>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}