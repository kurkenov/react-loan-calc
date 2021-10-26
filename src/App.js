import React, {useState} from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import './App.css';


function App() {

    const [loanAmount,setLoan] = useState("");
    const [monthsOfLoan, setMonthsOfLoan] = useState("");
    const [loanRate, setLoanRate] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState("");

   
    const handleLoanChange = (e) => {
      setLoan(e.target.value);
    }

    const handleMonthChange = (e) => {
      setMonthsOfLoan(e.target.value);
    }

    const handleLoanRateChange = (e) => {
      setLoanRate(e.target.value);
    }

    const showData = () => {
        setMonthlyPayment(parseInt(loanAmount)/parseInt(monthsOfLoan) + parseInt(loanAmount)*(parseInt(loanRate)/100/12))      
    }

    return (
      <div className="App">
        <Box>
              <Box p={1}>
                <TextField id="loanAmount" name="loanAmount" label="Loan ammount" variant="outlined" type="number" onChange={handleLoanChange} value={loanAmount} required/>
              </Box> 
              <Box p={1}>
                <TextField id="monthsOfLoan" name="monthsOfLoan " label="Months of loan" variant="outlined" type="number" onChange={handleMonthChange} value={monthsOfLoan} required/>
              </Box> 
              <Box p={1}>
                <TextField id="loanRate" name="loanRate " label="Rate of loan %" variant="outlined" type="number" onChange={handleLoanRateChange} value={loanRate} required/>
              </Box> 

                <Button disabled={!loanAmount||!monthsOfLoan||!loanRate} variant="contained" onClick={showData}>Calculated</Button>
              <Box>
                <p>Monthly payment: {monthlyPayment} </p> 
              </Box>
        </Box>
    </div>   
    );
  }
  
export default App;