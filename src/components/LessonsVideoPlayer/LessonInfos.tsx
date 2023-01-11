import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

interface LessonInfosProps {
  lesson?: {
    videoId: string;
    title: string;
    description?: string | null | undefined;
    teacher?: {
      avatarURL: string;
      bio: string;
      name: string;
    } | null;
  };
}

export function LessonInfos({ lesson }: LessonInfosProps) {
  return (
    <div className="p-8 max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{lesson?.title}</h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            {lesson?.description}
          </p>

          {lesson?.teacher && (
            <div className="flex items-center gap-4 mt-6">
              <img
                src={lesson.teacher.avatarURL}
                className="w-16 h-16 border-2 border-blue-500 rounded-full"
              />

              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">
                  {lesson.teacher.name}
                </strong>
                <span className="block text-sm text-gray-200">
                  {lesson.teacher.bio}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-700 "
          >
            <DiscordLogo size={24} />
            Comunidade do discord
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 p-4 text-sm font-bold text-blue-500 uppercase transition-colors border border-blue-500 rounded hover:bg-blue-500 hover:text-gray-900"
          >
            <Lightning size={24} />
            Acesse o desafio
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-20">
        <a
          href="#"
          className="flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600"
        >
          <div className="flex items-center h-full p-6 bg-green-700">
            <FileArrowDown size={40} />
          </div>

          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Material complementar</strong>
            <p className="mt-2 text-sm text-gray-200">
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>
          <div className="flex items-center h-full p-6">
            <CaretRight size={24} />
          </div>
        </a>

        <a
          href="#"
          className="flex items-stretch gap-6 overflow-hidden transition-colors bg-gray-700 rounded hover:bg-gray-600"
        >
          <div className="flex items-center h-full p-6 bg-green-700">
            <Image size={40} />
          </div>

          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Wallpapers exclusivos</strong>
            <p className="mt-2 text-sm text-gray-200">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
              máquina
            </p>
          </div>
          <div className="flex items-center h-full p-6">
            <CaretRight size={24} />
          </div>
        </a>
      </div>
    </div>
  );
}
