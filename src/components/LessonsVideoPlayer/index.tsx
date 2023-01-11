import { Spinner } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../../graphql/generated";
import { LessonInfos } from "./LessonInfos";
import { VideoPlayer } from "./VideoPlayer";

interface LessonsVideoPlayerProps {
  lessonSlug: string;
}

export function LessonsVideoPlayer({ lessonSlug }: LessonsVideoPlayerProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  return (
    <div className="relative flex-1">
      {!data ||
        (!data?.lesson && (
          <Spinner size={24} className="absolute animate-spin inset-1/2" />
        ))}
      {data?.lesson && (
        <>
          <VideoPlayer videoId={data.lesson.videoId} />
          <LessonInfos lesson={data.lesson} />
        </>
      )}
    </div>
  );
}
