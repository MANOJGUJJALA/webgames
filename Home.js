import {  useEffect,useState } from 'react';

import tic from "./utilities/tictactoe.png"
import sudok from "./utilities/sud.png"
import Tictactoe from './Ticktacktoe';
import Sudoku from './Sudoku';

import Navbar from './Navbar';

function Home() {

    const [homeShow,sethomeShow]=useState(true)
    const [ticShow,setticShow]=useState(false)
    const [sudokuShow,setsudokuShow]=useState(false)

    
    useEffect(() => {
        // console.log("use Effect called")
    }, [])

    const ticFunctionality=()=>{
        
        setticShow(true)
        sethomeShow(false)
        setsudokuShow(false)
    }
    const sudokuFunctionality=()=>{
        
        setsudokuShow(true)
        sethomeShow(false)
        setticShow(false)
    }
    const fromTic=()=>{
        sethomeShow(true)
        setticShow(false)
        setsudokuShow(false)

    }
    
    return (
        <>
            
            {homeShow?
            <>
            <Navbar />
                <div className='Container'>

                
                <table className='hometable'>
                    <tbody>

                    <tr >
                        <td >
                        <div className='card '>
                            <button className='btn ' onClick={ticFunctionality}>
                            <img className="card-img-top" src={tic} alt="Tic Tok imag"/>
                            </button>
                            <div className='card-footer'>
                                <h4 className='text text-primary'><center>Tic Tac Toe</center> </h4>
                            </div>
                        </div>
                        </td>
                        <td>
                           
                        <div className='card gap' >
                            <button className='btn' onClick={sudokuFunctionality}>
                            <img className="card-img-top" src={sudok} alt="Sudoku imag"/>
                            </button>
                            <div className='card-footer'>
                                <h4 className='text text-primary'><center>Sudoku</center>  </h4>
                            </div>
                        </div>

                        </td>
                    </tr>
                    </tbody>
                </table>

                </div>
            {/* <div className='Container' >
                <div className='row'>
                    <div className='col-md-3 ' style={{ color: 'blue' }}>
                       
                    </div>
                    <div className='col-md-3 offset-md-1' style={{ color: 'blue' }}>
                        
                    </div>
                </div>
            </div> */}
            </>
            :ticShow?<Tictactoe fromTic={fromTic}/>:sudokuShow?<Sudoku fromTic={fromTic}/>:""
            
            }
            
        </>
    );
}
export default Home;
