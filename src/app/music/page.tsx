import { constructionIconSvg } from "@/lib/icons"

export default function MusicPage() {

  const constructionIcon = constructionIconSvg();

  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center py-12 px-24 dark:text-stone-100">
      <h1 className="text-2xl">This page is under construction!</h1>
      <p className="text-lg">X_x</p>
      <div className="size-32 my-12">
        {constructionIcon}
      </div>
    </main>
  )

}