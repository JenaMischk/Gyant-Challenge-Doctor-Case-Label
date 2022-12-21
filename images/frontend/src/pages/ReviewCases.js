import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import * as constants from './../Constants';



async function updateCase(caseId, body) {
    return fetch(`http://${constants.BACKEND_URL}:${constants.BACKEND_PORT}/case/${caseId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(data => data.json());
}

async function getCases() {
    return fetch(`http://${constants.BACKEND_URL}:${constants.BACKEND_PORT}/case`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .catch(err => {
        console.log(err.toString());
    });
}

async function getConditions() {
    return fetch(`http://${constants.BACKEND_URL}:${constants.BACKEND_PORT}/condition`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .catch(err => {
        console.log(err.toString());
    });
}


function ReviewCases({ authenticatedUser }) {

    const [cases, setCases] = useState([]);
    const [currentCase, setcurrentCase] = useState();
    const [conditions, setConditions] = useState([]);

    const fetchData = async () => {
        const caseData = await getCases();
        if(caseData){
            setCases(caseData);
            setcurrentCase(caseData[0]);
        }
        const conditionData = await getConditions();
        if(conditionData){
            setConditions(conditionData);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async e => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        const conditionList = Object.keys(formDataObj);

        console.log(conditions);

        const res = await updateCase(
            currentCase.case, {
                reviewedBy: authenticatedUser,
                conditionList: conditionList
        });

        if(res){
            document.getElementById('submit-case-label').reset();
            fetchData();
        }

    }

    if(!authenticatedUser){
        return (
            <p>Please create an account and login to review cases</p>
        );
    }

    return (
        <>
            <h2>Review Cases</h2>

            {currentCase && cases &&
                <p>Case ID: {currentCase.case} | Case 1/{cases.length}</p>
            }

            <br/>

            <div className='Review-container'>

                <div className='Review-container-child'>
                {currentCase &&
                    <> 
                        <p>Please review the following case:</p>
                        <textarea className='Case-textarea' disabled value={currentCase.caseDescription}/>
                    </>
                }
                </div>

                <div className='Review-container-child'>
                {currentCase && conditions && 
                    <>
                        <p>Select conditions</p>
                        <div className='Conditions-scrollview'>
                        <Form id='submit-case-label' onSubmit={handleSubmit}>
                            {conditions.map((condition) => (
                                <div key={condition.icd} className="mb-3">
                                    <Form.Check
                                        inline
                                        label={condition.icd + ': ' + condition.icdDescription}
                                        name={condition.icd}
                                        type='checkbox'
                                        id={condition.icd}
                                    />
                                </div>
                            ))}
                        </Form>
                        </div>
                        <br/>
                        <button form='submit-case-label' type="submit" style={{float:'right'}}>Submit Case</button>
                    </>
                }  
                </div> 

            </div>  

            {!currentCase &&
                <p>No more cases left to review</p>
            }     

        </>
    );
  }
  
  export default ReviewCases;
  