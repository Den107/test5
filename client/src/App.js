import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import AddSkill from "./pages/AddSkill";
import EditSkill from "./pages/EditSkill";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'new'} element={<AddSkill/>}/>
                <Route path={'edit/:id'} element={<EditSkill/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
