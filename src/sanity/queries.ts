const FEATUREDWORK_QUERY = `*[
  _type == "featuredWork"

]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, tags, description, url}`;



export { FEATUREDWORK_QUERY}