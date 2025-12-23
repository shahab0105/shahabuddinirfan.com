import { useEffect } from "react";
// import { sanityClient } from "../sanity/client"
import { FeaturedWork } from "../sanity/interfaces";
const FeatureWorkCard = ({ title, description, tags, url}: FeaturedWork) => {

  useEffect( () => {
  }, []);
  return (<div>
    <div className="title">{title}</div>
    <div className="description">{description}</div>
    <div className="tags">{tags?.join(", ")}</div>
    <div className="url"><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
    </div>);
}

export default FeatureWorkCard;