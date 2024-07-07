import { constructionIconSvg } from "@/lib/icons"

export default function MusicSplash() {

  const constructionIcon = constructionIconSvg();

  return (
    <div id="music-splash"
      className="flex flex-col justify-center items-center"
    >
      Splash Page!
      <p>
        ... is under construction.
      </p>
      <p>
        Sorry X_x
      </p>
      <div id="under-construction"
        className="my-10 size-36">
        {constructionIcon}
      </div>
    </div>
  )
}