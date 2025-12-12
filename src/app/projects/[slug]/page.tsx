import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/getProject';
import Image from 'next/image';

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <div className='mx-auto max-w-3xl py-16'>
      <h1 className='font-zalando font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-50'>
        {project.title}
      </h1>

      <p className='font-poppins font-light text-gray-300 text-[0.9rem]'>
        {project.category} · {project.year}
      </p>

      <h3 className='mt-8 font-poppins font-semibold text-amber-50'>Project description</h3>
      <p className='mt-2 font-poppins font-light text-amber-50'>{project.description}</p>

      <h3 className='mt-8 font-poppins font-semibold text-amber-50'>Skills and deliverables</h3>
      <ul className='mt-2 list-none flex'>
        {project.services.map((service) => (
          <li
            className='border border-amber-50 rounded-full px-4 py-1 mr-2 text-amber-50'
            key={service}
          >
            {service}
          </li>
        ))}
      </ul>

      <div className='mt-10 grid grid-cols-1 gap-6'>
        <a href={project.link} target='_blank' className='links'>
          <Image
            src={project.coverImage}
            className='mb-4 transition-transform hover:scale-[1.02]'
            alt={project.title}
            width={800}
            height={600}
          />
        </a>

        {/* <div className='flex'>
          {project.gallery.map((img) => (
            <img key={img} src={img} alt='' className='max-w-auto' />
          ))}
        </div> */}
      </div>
    </div>
  );
}
