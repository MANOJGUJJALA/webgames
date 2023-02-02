
import { useState } from "react"
import back from './utilities/back1.jpg'

const Sudoku = ({fromTic}) => {
    const init=[
        [-1, 5, -1, 9, -1, -1, -1, -1, -1],
        [8, -1, -1, -1, 4, -1, 3, -1, 7],
        [-1, -1, -1, 2, 8, -1, 1, 9, -1],
        [5, 3, 8, 6, -1, 7, 9, 4, -1],
        [-1, 2, -1, 3, -1, 1, -1, -1, -1],
        [1, -1, 9, 8, -1, 4, 6, 2, 3],
        [9, -1, 7, 4, -1, -1, -1, -1, -1],
        [-1, 4, 5, -1, -1, -1, 2, -1, 9],
        [-1, -1, -1, -1, 3, -1, -1, 7, -1]
      ]
      
      
      const dcopy=(arr)=>{
          return JSON.parse(JSON.stringify(arr))
        }
        const [arr, setarr] = useState(dcopy(init))

    const ValuChnage=(e,r,c)=>{
        let val=e.target.value
        
        let grid=dcopy(arr)
        
        if (val ===-1 || (val>=1 && val<=9) || val===""){

            grid[r][c]= parseInt(val===""?"-1":val )
        }
        
        setarr(grid)

    }

    const SolvedSudoku=()=>{
        let solved=[[4,5,1,9,7,3,8,6,2],
                    [8,9,2,1,4,6,3,5,7],
                    [7,6,3,2,8,5,1,9,4],
                    [5,3,8,6,2,7,9,4,1],
                    [6,2,4,3,9,1,7,8,5],
                    [1,7,9,8,5,4,6,2,3],
                    [9,8,7,4,1,2,5,3,6],
                    [3,4,5,7,6,8,2,1,9],
                    [2,1,6,5,3,9,4,7,8]
                ]
                return dcopy( solved)
    }

    const CompareSudoku=(currentSudoku,solved)=>{
        let res={
            isSolved:true,
            isComplete:true
        }

        for (let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if (currentSudoku[i][j]!==solved[i][j]){
                    if (currentSudoku[i][j]!==-1){
                        res.isSolved=false
                    }
                    res.isComplete=false
                }
            }
        }
        return res

    }

    const Checksudoku=()=>{
        let solved=SolvedSudoku()
        let currentSudoku=arr
        let res=CompareSudoku(currentSudoku,solved)

        if (res.isComplete){
            alert("Congractulations! You have Solved Sudoku !")

        }
        else if (res.isSolved){
            alert("Keep Going.!")
        }
        else{
            alert("Sudoku Can't be Solved. Try again!!")
        }

    }
    
    const Solvesudoku=()=>{
        let solved= SolvedSudoku()
        setarr(solved)

    }
    
    const Resetsudoku=()=>{
        let sudoku=dcopy(init)
        setarr(sudoku)
    }
    const bacty=()=>{

        fromTic()
        
    }

    return (
        <>
        <div className="homeButton">
        
        <img src={back} className="backSymbol" alt="no imag found" onClick={()=>bacty()}/>
        
        </div>
            <div className="sudokuClass">

                <h1 className="text text-info" > Sudoku </h1> <br />

                <table>
                    <tbody>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                                return (
                                    <tr key={rIndex} className={ (row+1) %3===0 ?'drkrBorder':''}>
                                        {
                                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                                                return (

                                                    <td key={rIndex+cIndex} className={ (col+1) %3===0 ?'drkcBorder':''}>
                                                        
                                                        <input type="text" onChange={(e)=>ValuChnage(e,row,col)} 
                                                        value={arr[rIndex][cIndex]===-1?"":arr[rIndex][cIndex]} 
                                                        className={init[row][col]!==-1? "disableColor":"textSize"} disabled={init[row][col]!==-1}/>
                                                    </td>
                                                )

                                            })
                                        }
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </table>
               <div className="buttonContainer">

                        <button className="checkSize" onClick={Checksudoku}>Check</button>
                        <button className="solveSize" onClick={Solvesudoku}>Solve</button>
                        <button className="resetSize" onClick={Resetsudoku}>Reset</button>

               </div>

            </div>
        </>
    )
}

export default Sudoku