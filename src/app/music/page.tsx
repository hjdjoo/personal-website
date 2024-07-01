import { constructionIconSvg } from "@/lib/icons"
import { musicNoteIconSvg } from "@/lib/icons"


export default function MusicPage() {


  const musicNoteIcon = musicNoteIconSvg();
  const constructionIcon = constructionIconSvg();

  return (
    <div className="h-3/4 max-w-screen flex flex-col items-center justify-center py-12">
      <div id="engineering-page-title"
        className="flex my-8">
        <h1 className="text-2xl font-bold my-auto">
          Music Projects
        </h1>
        <div className="size-10 ml-4 my-auto">
          {musicNoteIcon}
        </div>
      </div>
      <p className="text-lg">X_x</p>
      <br />
      <h1 className="text-2xl text-center">This page is under construction!</h1>
      <div className="size-32 my-12">
        {constructionIcon}
      </div>
    </div>
  )

}