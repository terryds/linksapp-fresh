export default function LinkComponent(props: {
  project: { url: string; title: string, emoji: string, title: string, year: number, };
}) {
  const { project } = props;

  return (
    <li>
      <a
        href={project.url}
        target="_blank"
        class="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
      >
        <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-black/5 rounded-full">
          <span class="text-xl">{project.emoji}</span>
        </div>
        <div class="ml-4">
          <div class="flex items-center justify-start space-x-2">
            <h3 class="text-lg font-medium text-gray-900">{project.title}</h3>
            <span class="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full">
              {project.year}
            </span>
          </div>
          <p class="text-sm text-gray-500">{project.description}</p>
        </div>
      </a>
    </li>
  );
}