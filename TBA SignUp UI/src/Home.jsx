import { MDBIcon } from "mdb-react-ui-kit"
import Sidebar from "./Components/Sidebar"
import Barchart from "./Components/Barchart"
import Piechart from "./Components/Piechart"

const Home = () => {
    return (
      <>
          {/* <Sidebar /> */}
           
          <div className="dashboardbody">
              <div className="row dashboardbox">
                  <div className="col-3 box1"> 
                      <div className="row">
                          <div className="col-4 mt-2 boxiconpie"><MDBIcon icon="chart-pie"/></div>
                          <div className="col-8">
                              {/* <p className="boxtext1">Number</p> */}
                              <h5 className="boxstd">200</h5>
                          </div>
                      </div>
                      <hr />
                      <div><h4 className="boxheading">Total Students</h4></div>
                  </div>
                  <div className="col-3 box1"> 
                  <div className="row">
                          <div className="col-4 mt-2 boxiconbar"><MDBIcon icon="chart-bar"/></div>
                          <div className="col-8">
                              {/* <p className="boxtext1">Number</p> */}
                              <h5 className="boxclass">15</h5>
                          </div>
                      </div>
                      <hr />
                      <div><h4 className="boxheading">Total Students</h4></div>
                  </div>
                  <div className="col-3 box1"> 
                  <div className="row">
                          <div className="col-4 mt-2 boxiconglobe"><MDBIcon icon="globe"/></div>
                          <div className="col-8">
                              {/* <p className="boxtext1">Number</p> */}
                              <h5 className="boxevent">Independence Day Celebrations</h5>
                          </div>
                      </div>
                      <hr />
                      <div><h4 className="boxheading">Latest Event</h4></div>
                  </div>
              </div>

              <div className="row dashboardbox mt-2">
                  <div className="col-6 barchart"> 
                          <Barchart />
                  </div>
                  <div className="col-4 piechart"> 
                  <Piechart />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Home
