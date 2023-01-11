import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  return (
    <div className="flex justify-center bg-black rounded">
      <div className="h-full w-full max-w[1100px] max-h[80vh] aspect-video">
        <Player>
          <Youtube videoId={videoId} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  );
}
