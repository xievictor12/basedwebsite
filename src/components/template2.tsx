import "../styles/template2.scss";
import Avatar from "../assets/DSC03224.png";

function Template2(){
    return(
        <div className="template2">
            <h2 id="name">Victor Xie</h2>
            <h5 id="title">Professional Musician & Pianist</h5>
            <div className="content-container2">
                <img className="avatar" src={Avatar}/>
                
                <div className="bio">
                    <h5 className="bio-head">About Me</h5>
                    <article className="bio-text">
                        <p><span className="tab"/>Victor Xie is from Palo Alto, California, and completed his BM in piano performance
                        with Prof. Alexander Korsantia and Mr. Victor Rosenbaum at the New England Conservatory of
                        Music. He studied Composition briefly with Prof. Alla Cohen and John Heiss in 2020. He
                        currently studies Composition with Prof. Huang Ruo at Mannes School of Music.
                        </p>
                        <p><span className="tab"/>Victor bridges contemporary ideas with classical music through interlacing compositions
                        and improvised music on the piano, an ongoing project titled the Phoenix. Past all of the
                        stylizations, studies, and experiments, Victor aims to emphasize the present moment of music as
                        most essential. 
                        </p>
                        <p><span className="tab"/>Before studying at NEC, he proved himself a capable pianist through a myriad of
                        competitions. As the winner of the Young Artist’s Solo Competition, he performed the complete
                        Saint Saens Concerto No.2 with the California Youth Symphony in two concerts. He performed
                        the same concerto with the Mercury Orchestra at Sanders Theatre, Harvard, as winner of the
                        Foundation for Chinese Performing Arts Concerto Competition. In the Spring of 2020, he was
                        privileged to participate as a laureate in the National Chopin Competition of the United States.
                        The following Spring of 2021, Victor won Piano Honors at New England Conservatory with his
                        own transcriptions of the Star-Spangled Banner and a Christmas carol.
                        </p>
                    </article>
                </div>
            </div>
            <div className="background-wrap">
                <div className="x2">
                    <div className="cloud"/>
                </div>
                <div className="x4">
                    <div className="cloud"/>
                </div>
                <div className="x5">
                    <div className="cloud"/>
                </div>
                <div className="x1">
                    <div className="cloud"/>
                </div>
                <div className="x2">
                    <div className="cloud"/>
                </div>
                <div className="x3">
                    <div className="cloud"/>
                </div>
                <div className="x4">
                    <div className="cloud"/>
                </div>
                <div className="x1">
                    <div className="cloud"/>
                </div>
                <div className="x5">
                    <div className="cloud"/>
                </div>
                <div className="x2">
                    <div className="cloud"/>
                </div>
                <div className="x3">
                    <div className="cloud"/>
                </div>
            </div>
        </div>
    )
}
export default Template2;
