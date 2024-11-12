const Base = () => {
    return ( 
        <div className="base">
            <div className="baseFlex">
                <div className="vision">
                    <div className="visionWords">
                        <img src="/block1.svg" alt="block1" className="block1" width="100px"/>   
                        <h1 className="vis1">REALIZED</h1>
                        <h1 className="vis1">LASALLIAN</h1>
                        <h1 className="vis2">PURPOSE</h1>
                    </div>
                </div>
                <div className="eb-column">
                    <img src="/base-eb.png" alt="EB base pic" className="baseEb" />
                </div>
            </div>
            <div className="baseFlex">
                <div className="eb-column">
                    <img src="/base-eb.png" alt="EB base pic" className="baseEb" />
                </div>
                <div className="vision">
                    <div className="baseSpeechContainer">
                        <p className="baseSpeech">
                            As our university reaches its 50th year, we celebrate the personal and shared experiences guiding us toward <strong>our dreams and goals </strong>as Lasallians. 
                            In our journey of discovering these, we value our individual pursuits and embrace the strengths found within our different paces.
                        </p>
                        <p className="baseSpeech">
                            The University Student Government is dedicated to <strong>empowering you in your everyday student life</strong> through opportunities focused on <strong> purposeful student response, transformative university life</strong>, and <strong>collaborative community development</strong>, 
                            helping you academically and socially thrive. By respecting each individual’s unique journey, we foster an environment where you can achieve your fullest potential.
                        </p>
                        <p className="baseSpeech">
                            <strong>A Realized Lasallian Purpose</strong> means finding your place in the university and your role in the community. 
                            <strong>This is a university life that you can call yours</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Base;