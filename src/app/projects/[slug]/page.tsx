import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/getProject';

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <div className='mx-auto max-w-3xl py-16'>
      <h1 className='text-4xl font-bold'>{project.title}</h1>

      <p className='text-gray-500 mt-2'>
        {project.category} · {project.year}
      </p>

      <p className='mt-6 leading-relaxed'>{project.description}</p>

      <h3 className='mt-10 font-semibold'>Services</h3>
      <ul className='list-disc pl-6'>
        {project.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

      <div className='mt-10 grid grid-cols-1 gap-6'>
        {project.gallery.map((img) => (
          <img key={img} src={img} alt='' className='rounded-lg' />
        ))}
      </div>
    </div>
  );
}
