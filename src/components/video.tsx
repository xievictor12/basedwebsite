import { itemType } from "customTypes";
function Video(props: {index: number, video: itemType}){
    /*
        Note: A well known problem of the Youtube API is chacters returned from the api
              results in HTML characters. Some solutions to this problem is:
              he (library): https://github.com/mathiasbynens/he
              TODO: Look over using this package.
              Temparary fix: using fromCharCode to decode HTML characters.
    */
    const unescape = (str: string) => {
        return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    }
    let {kind, etag, id, snippet} = props.video;
    let url:string = `https://www.youtube.com/embed/${id.videoId}?controls=1&amp;autoplay=1&amp;modestbranding=1;`
    snippet.title = unescape(snippet.title);
    return (
        <li key={props.index+1}>
            <iframe className="video"
                width={375}
                height={210}
                src={url}
                allow="encrypted-media; picture-in-picture;"
            />
            <section className="description-box">
                <h2 className="title-text">{snippet.title}</h2>
                <p className="description-text">{snippet.description}</p>
            </section>
        </li>
    )
}
export default Video;