import React from "react"
import Header from '../components/Header'
import Data from '../components/Data'

export default ({data}) => (    
    <div
        style={{
            backgroundColor: 'darkgrey',
        }}>
        <Header/>
        <Data data={data}/>
    </div>
)

export const query = graphql`
    query {
        allFile {
            edges {
              node {
                name
              }
            }
        },
        allMsmDataTest1Csv {
            edges {
              node {
                time
                x
                y
                z
                degree
              }
            }
        },
        allMsmDataTest1ResultsCsv {
            edges {
                node {
                    predicted
                    prediction
                }
            }
        }
    }
`
