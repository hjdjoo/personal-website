
export const demoAlbumData = [
  {
    id: 2,
    name: "demo 2",
    details: "demo album 2 details lorem ipsum dolor est blah blah",
    releaseDate: "4/31/2009"
  },
  {
    id: 1,
    name: "demo 1",
    details: "demo album 1 details lorem ipsum dolor est blah blah",
    releaseDate: "12/31/2007"
  },
  {
    id: 3,
    name: "demo 3",
    details: "demo album 3 details lorem ipsum dolor est blah blah",
    releaseDate: "2/28/2010"
  },
]

export const demoEvents = [
  {
    id: 2,
    name: "Album 1 release",
    blurb: "Demo Album 1 is released",
    date: "12/31/2007"
  },
  {
    id: 1,
    name: "Darryl is born",
    blurb: "The world keeps spinning",
    date: "6/20/2007"
  },
  {
    id: 3,
    name: "Southern tour 1",
    blurb: "American Ghost tour - Philadelphia, DC, Virginia",
    date: "4/21/2008"
  },
  {
    id: 4,
    name: "Album 2 Release",
    blurb: "Demo Album 2 is released",
    date: "4/31/2009"
  }
]



// album_resource {
//   id: int8(serial)
//   eventId: int8 //fk - public.albums.id
//   name: text
//   type: text
//   description: text
//   src: text
//   alt_text: text
//   date: text
// }