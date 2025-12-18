import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { Login } from './Login'
import Dashboard from './Dashboard'
import Welcome from './Welcome'
import { EC2Toggle } from './EC2Toggle'
import { InstanceManager } from './InstanceManager'
import ProjectsPage from './ProjectsPage'
import Header from './Header'
import Pricing from './Pricing'
import Login from './Login'
import DivisComponent from './DivisComponent'
// import InstanceManager from './InstanceManager'

const FinalComp=()=>{
    const instanceId='i-0e08ee5a3f9d35972'
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                <Route element={<Welcome/>} path='/'/>
                    <Route element={<Login/>} path='/login'/>
                    <Route element={<Pricing/>} path='/pricing'/>
                    <Route element={<Dashboard/>} path='/dashboard'/>
                        <Route element={<EC2Toggle instanceId={instanceId}/>} path='/ec2'/>
                        <Route element={<InstanceManager/>} path='/im'/>
                        <Route element={<InstanceManager/>} path='/im'/>
                        <Route element={<ProjectsPage/>} path='/projectsPage'/>
                        <Route element={<DivisComponent/>} path='/diviscomponent'/>
                </Routes>
            </Router>
            
        </>
    )
}

export default FinalComp