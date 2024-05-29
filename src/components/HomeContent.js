import "./HomeContentStyles.css"
import ContentImage1 from "../components/Assets/ContentImage1.jpg"
import ContentImage2 from "../components/Assets/ContentImage2.jpg"
import ContentImage3 from "../components/Assets/ContentImage3.jpg"

function HomeContent() {
    return(
    <div>
        <div className="mvv-container">
            <div className="mvv-block">
                <div className="Image">
                    <img src={ContentImage1} alt="/"/>
                </div>
                <div className="content">
                    <h1>Our History</h1>
                    <p>Our project started with a simple idea: to make specific activity, e.g., creating resumes 
                    easier for everyone. We noticed that many people found it challenging to 
                    specific point, e.g., create professional-looking resumes. So, we decided to create a solution. 
                    Our team came together and worked hard to develop a platform that would help people 
                    create resumes without any hassle. And thus, our journey began.</p> 
                </div>
            </div>
        </div>
        <div className="mvv-container">
            <div className="mvv-block">
                <div className="Image">
                    <img src={ContentImage2} alt="/"/>
                </div>
                <div className="content">
                    <h1>Our Mission</h1>
                    <p>Our mission is to empower individuals by providing them with access to 
                    specific services or benefits provided by our project. We aim to 
                    simplify the process, enhance accessibility, etc. and make more accessible 
                    to everyone, regardless of their background or expertise.</p> 
                </div>
            </div>
        </div>
        <div className="mvv-container">
            <div className="mvv-block">
                <div className="Image">
                    <img src={ContentImage3} alt="/"/>
                </div>
                <div className="content">
                    <h1>Our Vision</h1>
                    <p>We dream of a future where everyone can make professional resumes without any trouble.
                    We want our project to be known for helping people and making things better for everyone. 
                    We want to be the best at what we do and help as many people as we can.</p> 
                </div>
            </div>
        </div>
    </div>

    )

}

export default HomeContent;