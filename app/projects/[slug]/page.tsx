import { projectsData } from '@/components/Projects/projectsData';
import ProjectContent from '@/components/Projects/ProjectContent';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;

  const {
    slug
  } = params;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto flex-1 px-6 py-24 sm:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-100">
              Project Not Found
            </h1>
            <p className="mt-4 text-gray-400">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-1 px-6 py-24 sm:px-8">
        <ProjectContent {...project} />
      </div>
    </main>
  );
}
