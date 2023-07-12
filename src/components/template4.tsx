import "../styles/template4.scss"
import jsonData from "../testdata/testBlog.json"
import Avatar from "../assets/DSC03029.png";

function Template4() {
    console.log(jsonData)
    return (
        <div className="template4">
            <div className="container">
                <div className="blog">
                <div className="header">
                    <h2 className="header-title">Blog</h2>
                </div>
                    <div className="blog-container">
                        <div className="flex-container">
                            <time>{jsonData.data.time}</time>
                            <img className="blog-img" src={Avatar}/>
                        </div>
                        <div className="blog-description">
                            <h2 className="blog-title">{jsonData.data.title}</h2>
                            <p>{jsonData.data.entry}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Template4;