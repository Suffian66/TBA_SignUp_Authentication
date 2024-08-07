
import ClassListTable from './ClassListTable';


const ClassList = () => {
    return (
        <>
            
            <div className="dashboardbody">
                <div className="row dashboardbox pt-5 pb-5">
                    <div className="col-10 classlist">
                        <ClassListTable/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassList;