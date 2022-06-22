import { gql, useQuery } from '@apollo/client';
import { Lesson } from './Lesson';

const GET_LESSON_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface GetLessonQueryResponse {
  lessons: {
    id: string;
    lessonType: 'live' | 'class';
    availableAt: string;
    title: string;
    slug: string;
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSON_QUERY);

  return (
    <aside className="max-w-[348px] bg-gray-700 p-6 border rounded-b mr-5 border-gray-600 max-h-[650px] overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
