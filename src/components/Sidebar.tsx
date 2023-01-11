import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-full h-full max-w-[348px] max-h-[80vh] bg-gray-700 p-6 border rounded border-gray-600 overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            _slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
