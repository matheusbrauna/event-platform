import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import eventImgUrl from "../assets/event-image.png";
import { LessonsVideoPlayer } from "../components/LessonsVideoPlayer";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 gap-5 p-8">
        <div className="flex flex-1 gap-5">
          {slug ? (
            <LessonsVideoPlayer lessonSlug={slug} />
          ) : (
            <div className="flex-1">
              <img
                src={eventImgUrl}
                alt=""
                className="object-cover rounded aspect-video"
              />
            </div>
          )}
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
