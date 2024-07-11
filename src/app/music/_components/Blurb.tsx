import { BlurbData } from "@/types/client-types/types";

interface BlurbProps {
  data: BlurbData
}

export default function Blurb(props: BlurbProps) {

  const { name, blurb, src } = props.data;

  return (
    <div id={`${name}-blurb-container`}
      className="flex-1 h-full w-full flex flex-col justify-center items-center my-36">
      <div id={`${name}-blurb-text`}
        className="py-4 my-4 text-center">
        <p className="text-2xl">
          {`"${blurb}"`}
        </p>
      </div>
      <div id={`${name}-blurb-source`}
        className="mt-8 self-end sm:pr-6 md:pr-16 italic text-right">
        <a href={src}>
          {`- ${name}`}
        </a>
      </div>
    </div>
  )

}