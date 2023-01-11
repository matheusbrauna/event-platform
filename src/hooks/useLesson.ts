import { useGetLessonBySlugQuery } from "../graphql/generated";

interface Lesson {
  lesson?: {
    title: string;
    description: string;
    videoId: string;
    teacher: {
      avatarURL: string;
      name: string;
      bio: string;
    };
  };
}

export function useLesson(slug: string): Lesson {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug,
    },
  });

  return {
    lesson: {
      title: data?.lesson?.title ?? "",
      description: data?.lesson?.description ?? "",
      videoId: data?.lesson?.videoId ?? "",
      teacher: {
        avatarURL: data?.lesson?.teacher?.avatarURL ?? "",
        bio: data?.lesson?.teacher?.bio ?? "",
        name: data?.lesson?.teacher?.name ?? "",
      },
    },
  };
}
