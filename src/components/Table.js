
const TableComponent = ({ data, coloumn, sortItem }) => {
    const Tablerow = ({ item, coloumn }) => (
        <tr>
            {
                coloumn.map((Cdata, index) => {
                    if (Cdata.value.includes('.')) {
                        const split = Cdata.value.split('.')        //[ 'person' ,'name']
                        return <td key={index}><img src="icon.png" alt="icon" className="icon" /> {item[split[0]][split[1]]} </td>
                    }
                    return <td key={index}> {item[Cdata.value]} </td>
                })
            }
        </tr>
    )

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        {
                            coloumn.map((item, index) => {
                                if (item.heading === "Name" && item.icon === "name") {
                                    return <th key={index}> {item.heading} <i className="fa fa-sort" onClick={() => sortItem("person.name")}></i> </th>
                                }
                                if (item.heading === "JoiningDate" && item.icon === "jd") {
                                    return <th key={index}> {item.heading} <i className="fa fa-sort" onClick={() => sortItem("joiningDate")}></i> </th>
                                }
                                if (item.heading === "Role" && item.icon === "role") {
                                    return <th key={index}> {item.heading} <i className="fa fa-sort" onClick={() => sortItem("role")}></i> </th>
                                }
                                if (item.heading === "City" && item.icon === "city") {
                                    return <th key={index}> {item.heading} <i className="fa fa-sort" onClick={() => sortItem("city")}></i> </th>
                                }
                                if (item.heading === "Role" && item.icon === "role2") {
                                    return <th key={index}> {item.heading} <i className="fa fa-sort" onClick={() => sortItem("role")}></i> </th>
                                }
                                return <th key={index}>{item.heading}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => <Tablerow item={item} key={index} coloumn={coloumn} />)
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableComponent;
