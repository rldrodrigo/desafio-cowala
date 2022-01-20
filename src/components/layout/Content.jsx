import React from "react";
import './Content.css'
import {
    Routes,
    Route
} from "react-router-dom";
import Form from "../../views/Form";


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Form />} />
        </Routes>
    </main>
)

export default Content