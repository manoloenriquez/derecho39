import { Link } from 'react-router-dom';

const Home = () => {
    return (  
        <div className="home">
            <div className="collegesFlex">
                <div className="threeC">
                    <Link to="/colleges">
                        <img src="/ccs-slate.png" alt="ccs slate pic" className='ccsGrid'/>
                    </Link>
                    <Link to="/colleges">
                        <img src="/cla-slate.png" alt="cla slate pic" className='claGrid'/>
                    </Link>
                    <Link to="/colleges">
                        <img src="/cos-slate.png" alt="cos slate pic" className='cosGrid'/>
                    </Link>
                </div>
                <div className="twoC">
                    <Link to="/colleges">
                        <img src="/cob-slate.png" alt="cob slate pic" className='cobGrid'/>
                    </Link>
                    <Link to="/colleges">
                        <img src="/soe-slate.png" alt="soe slate pic" className='soeGrid'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Home;