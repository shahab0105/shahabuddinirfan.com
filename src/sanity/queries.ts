const FEATUREDWORK_QUERY = `*[
  _type == "featuredWork"

]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, tags, description, url}`;


const FETCH_SERVICES_QUERY = `*[
  _type == "services"
  && category in ["Projects"]
]|order(publishedAt desc){_id, name, description, timeline, pricing}`;
export { FEATUREDWORK_QUERY, FETCH_SERVICES_QUERY }