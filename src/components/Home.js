import React, { useState, } from "react";
import TableComponent from "./Table";
import { tableData } from "./json"

const Home = () => {
    const [data, updateData] = useState(tableData);
    const [Flag, updateFlag] = useState("INC");

    const coloumn1 = [
        { heading: "Name", value: "person.name", icon: "name" },
        { heading: "E-mail Address", value: "email" },
        { heading: "Role", value: "role" },
    ]

    const coloumn2 = [
        { heading: "E-mail Address", value: "email" },
        { heading: "JoiningDate", value: "joiningDate", icon: "jd" },
        { heading: "Role", value: "role", icon: "role" },
    ]

    const coloumn3 = [
        { heading: "Name", value: "person.name" },
        { heading: "City", value: "city", icon: "city" },
        { heading: "JoiningDate", value: "joiningDate" },
        { heading: "Role", value: "role", icon: "role2" },

    ]
    const sortItem = (col) => {
        if (Flag === "INC") {
            const sort = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            updateData(sort);
            updateFlag("DEC")
        }
        if (Flag === "DEC") {
            const sort = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            updateData(sort);
            updateFlag("INC")
        }

    }

    return (
        <>
            <div className="mcontainer">
                <TableComponent data={data} coloumn={coloumn1} sortItem={sortItem} />
                <TableComponent data={data} coloumn={coloumn2} sortItem={sortItem} />
                <TableComponent data={data} coloumn={coloumn3} sortItem={sortItem} />

            </div>
        </>
    )
}
export default Home;
