import Classlisttable from './Components/Classlisttable';
import Sidebar from './Components/Sidebar';


const ClassList = () => {
    return (
        <>
            <Sidebar />
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-10 classlist">
                        <Classlisttable />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassList;