import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { Link, useParams } from "react-router-dom";

import classNames from "classnames";
import { dateFormatter } from "../utils/date-formmater";

interface LessonProps {
  title: string;
  _slug: string;
  availableAt: Date;
  type: "class" | "live";
}

export function Lesson({ availableAt, _slug, title, type }: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const isActiveLesson = slug === _slug;
  const { formattedDate } = dateFormatter({ date: availableAt });

  return (
    <Link to={`/event/lesson/${_slug}`} className="group">
      <span className="text-gray-300">{formattedDate}</span>
      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white border uppercase",
              {
                "border-white": isActiveLesson,
                "border-green-500": !isActiveLesson,
              }
            )}
          >
            {type === "live" ? "Ao Vivo" : "Aula Prática"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
