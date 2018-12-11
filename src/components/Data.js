import React from 'react'

export default ({ data }) => {
  function collapse() {
    var x = document.getElementById("table");
    if (x.style.display === "none") {
        x.style.display = "inline-flex";
    } else {
        x.style.display = "none";
    } 
  }
  console.log(data)
  return (
    <div 
      style={{
        flexDirection: 'column',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'}}>
        <h1>GDrive Files</h1>
        <table style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <tbody>
            {data.allFile.edges.map(({node}, index) => (
              <div key={index}>
                {node.name}
              </div>))}
          </tbody>
        </table>
        <button onClick={collapse} >
          Show/Hide
        </button>
        <div 
          id='table'
          style={{
            alignItems:'center', 
            justifyContent:'center', 
            backgroundColor:'grey', 
            display:'inline-flex'}}>
            <table 
              style={{
                display: 'inline-block',
                float: 'left'}}>
              <thead>
                  <tr>
                    <th>time</th>
                    <th>x</th>
                    <th>y</th>
                    <th>z</th>
                    <th>degree</th>
                  </tr>
              </thead>
              <tbody>
                {data[`allMsmDataTest${1}Csv`].edges.map(({node}, index) => (
                  <tr key={index}>
                      <td>{node.time}</td>
                      <td>{node.x}</td>
                      <td>{node.y}</td>
                      <td>{node.z}</td>
                      <td>{node.degree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table 
              style={{
                display: 'inline-block',
                float: 'left'}}>
              <thead>
                  <tr>
                    <th>predicted</th>
                    <th>prediction</th>
                  </tr>
              </thead>
              <tbody>
                {data[`allMsmDataTest${1}ResultsCsv`].edges.map(({node}, index) => (
                  <tr key={index}>
                      <td>{node.predicted}</td>
                      <td>{node.prediction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
    </div>
  )
}
  

